import axios from 'axios'
import Qs from 'qs'

//接口基路径
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/api' : 'http://www.css110.cn:8088';
// 请求超时时间
axios.defaults.timeout = 60000;
//参数格式化
axios.defaults.transformRequest = [function (data) {
    data = Qs.stringify(data, { indices: false });
    return data;
}];
// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = store.getters.token;
        // config.headers.Authorization = token
        return config;
    },
    error => {
        return Promise.error(error);
    });

// 响应拦截器
axios.interceptors.response.use(
    response => {
        console.log(response)
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况 
    error => {
        console.log(error)
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录    
                // 未登录则跳转登录页面，并携带当前页面的路径    
                // 在登录成功后返回当前页面，这一步需要在登录页操作。    
                case 401:
                    console.log(error.response.status)
                    break;
                // 403 token过期    
                // 登录过期对用户进行提示    
                // 清除本地token和清空vuex中token对象    
                // 跳转登录页面    
                case 403:
                    console.log(error.response.status)
                    // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    // MessageBox.alert('登录过期，请重新登录', "提示", {
                    //     confirmButtonText: "确定",
                    //     showClose: false,
                    //     callback: () => {
                    //     }
                    // });
                    break;
                case 404:
                    console.log(error.response.status)
                    // MessageBox.alert('接口请求不存在', "提示", {
                    //     confirmButtonText: "确定"
                    // });
                    break;
                case 500:
                    console.log(error.response.status)
                    // MessageBox.alert('api内部错误', "提示", {
                    //     confirmButtonText: "确定"
                    // });
                    break;
                case 504:
                    console.log(error.response.status)
                    // MessageBox.alert('网关超时,请检查环境再试', "提示", {
                    //     confirmButtonText: "确定"
                    // });
                    break;
                // 其他错误，直接抛出错误提示    
                default:
                    _console.log(error.response.status)
                // MessageBox.alert(error.response.data.Message, "提示", {
                //     confirmButtonText: "确定"
                // });
            }
        }
        return Promise.reject(error);
    }
);
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
    let config = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
        }
    };
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }, config)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    let config = {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
        }
    };
    return new Promise((resolve, reject) => {
        axios.post(url, params, config)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
export default axios;