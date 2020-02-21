import { get, post } from '@/http/http.js'

const isRegist = (info) => post('/ar/isrg', info)
/* 
参数:
oppenid 微信oppenid 
返回参数:
	success: true/false 成功/失败
	message: 成功错误返回消息
	date: 
	  isrg: 1已注册,0未注册
	  person: 如果注册返回用户信息,未注册person返回信息为空 */
export {
    isRegist
}