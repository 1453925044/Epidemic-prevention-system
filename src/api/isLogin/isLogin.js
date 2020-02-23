import { get, post } from '@/http/http.js'

const isLogin = (info) => post('/cs_yqfy/ar/login', info)
/* 
参数:
code 微信接口调用凭证
返回参数:
	success: true/false 成功/失败
	message: 成功错误返回消息
	errCode: 用户未注册返回1000,已注册返回0000 ,date字段中返回用户的openid
	date: 	  
	  person: 如果已注册返回用户信息
    (根据errCode判断是否注册)
查询总进入次数: */
export {
    isLogin
}