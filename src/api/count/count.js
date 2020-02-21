
import { get, post } from '@/http/http.js'

const intoCouunt = (info) => post('/ar/count', info)
/* 
参数:
person_id 用户id
返回参数:
	success: true/false 成功/失败
	message: 成功错误返回消息
	date: 
	  count: 次数 */
export {
    intoCouunt
}