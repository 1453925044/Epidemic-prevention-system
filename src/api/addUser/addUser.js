import { get, post } from '@/http/http.js'

const addUser = (info) => post('/ar/re', info)
/* 
参数:
	name 姓名
	idno 身份证号码
	address 住址
	birthplace 籍贯
	mobileno 电话号码
	orgid  组织id
	weichatid 微信oppenid
	carno 车牌号
	contact 是否接触过疫区人员或途经疫区人员,0、未接触 1、接触过
	hubei   是否去过湖北或途经湖北,0、未去地过、未途径 1、去过或经过
	isfever  是否发热,0、不发热 1、发热
	seemingly 是否存在疑似症状, 呼吸困难，发热，乏力，咽喉疼痛，干咳，腹泻，流鼻涕，其它，无
返回参数:
	success: true/false 成功/失败
	message: 成功错误返回消息
	date: 成功已json格式返回用户信息,前台需要记录返回的用户id */
export {
    addUser
}