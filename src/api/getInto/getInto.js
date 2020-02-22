
import { get, post } from '@/http/http.js'

const getInto = (info) => post('/ar/getp', info)
/* 
参数:
person_id 用户id
返回参数:
	success: true/false 成功/失败
	message: 成功错误返回消息
	date: 
	  person 成功者用户信息 */
export {
    getInto
}