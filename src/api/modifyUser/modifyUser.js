import { get, post } from '@/http/http.js'

const modifyUser = (info) => post('/ar/up', info)
/* 
参数:
	name 姓名 (非必须参数)
	idno 身份证号码(非必须参数)
	address 住址(非必须参数)
	birthplace 籍贯(非必须参数)
	mobileno 电话号码(非必须参数)
	orgid  组织id(非必须参数)
	weichatid 微信oppenid
	carno 车牌号(非必须参数)
	contact 是否接触过疫区人员或途经疫区人员,0、未接触 1、接触过(非必须参数)
	hubei   是否去过湖北或途经湖北,0、未去地过、未途径 1、去过或经过(非必须参数)
	isfever  是否发热,0、不发热 1、发热(非必须参数)
	seemingly 是否存在疑似症状, 呼吸困难，发热，乏力，咽喉疼痛，干咳，腹泻，流鼻涕，其它，无(非必须参数)
返回参数:
	success: true/false 成功/失败
	message: 成功错误返回消息
	date: 成功已json格式返回用户信息 */
export {
	modifyUser
}