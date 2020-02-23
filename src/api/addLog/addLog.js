import { get, post } from '@/http/http.js'

const addLog = (info) => post('/cs_yqfy/ar/addLog', info)
/*
 参数:
  person_id  出入人员id
  temperature  体温
  verify_per_id 出入记录.审核人ID
  in_out   出入记录.出入类型,1、进入 -1、出去
  symptom  疑似症状
  is_permit 是否允许进入,1:允许,0:不允许
返回参数:
  success: true/false 成功/失败
  message: 成功错误返回消息 */
export {
    addLog
}