<template>
    <div class="EmployeeInfo">
        <div class="title">
            <span>人员通行证信息核对</span>
        </div>
        <div class="intoCount">
            <span>该用户累计入园次数</span>
            <span>
                <span class="count" :style="{color:countColor}">{{intoCount}}次</span>
            </span>
        </div>
        <div class="completion-info">
            <div class="inputBox">
                <div>
                    <span>1、姓名</span>
                    <div class="input">
                        <span class="icon" style="font-size:20px;">&#xe605;</span>
                        <van-field disabled v-model="person.name" style="background:#f5f5f5;" />
                    </div>
                </div>
                <div>
                    <span>2、身份证</span>
                    <div class="input">
                        <span class="icon" style="font-size:20px;">&#xe6d7;</span>
                        <van-field disabled v-model="person.id_no" style="background:#f5f5f5;" />
                    </div>
                </div>
                <!-- <div>
                    <span>3、籍贯</span>
                    <div class="input">
                        <span class="icon" style="font-size:20px;">&#xe61f;</span>
                        <van-field
                            disabled
                            v-model="person.birthplace"
                            style="background:#f5f5f5;"
                        />
                    </div>
                </div>-->
                <!-- <div>
                    <span>4、现住址</span>
                    <div class="input">
                        <span class="icon" style="font-size:20px;">&#xe61f;</span>
                        <van-field disabled v-model="person.address" style="background:#f5f5f5;" />
                    </div>
                </div>-->
                <!-- <div>
                    <span>5. 车牌号</span>
                    <div class="input">
                        <span class="icon" style="font-size:20px;">&#xe625;</span>
                        <van-field disabled v-model="person.car_no" style="background:#f5f5f5;" />
                    </div>
                </div>-->
            </div>
            <div>
                <span>3. 是否发热</span>
                <van-radio-group class="radio" disabled v-model="person.is_fever">
                    <van-radio class="radioBox" name="是">是</van-radio>
                    <van-radio class="radioBox" name="否">否</van-radio>
                </van-radio-group>
            </div>
            <div>
                <span class="radioTitle">4、1月1日后是否去过（湖北）或途径</span>
                <van-radio-group class="radio" disabled v-model="person.hubei">
                    <van-radio class="radioBox" name="是">是</van-radio>
                    <van-radio class="radioBox" name="否">否</van-radio>
                </van-radio-group>
            </div>
            <div>
                <span>5、1月1日后是否与疫区人员接触史</span>
                <van-radio-group class="radio" disabled v-model="person.contact">
                    <van-radio class="radioBox" name="是">是</van-radio>
                    <van-radio class="radioBox" name="否">否</van-radio>
                </van-radio-group>
            </div>
            <div>
                <span>6、是否有疑似病症</span>
                <van-checkbox-group class="radio" disabled v-model="person.is_seemingly">
                    <van-checkbox class="radioBox" name="呼吸困难">呼吸困难</van-checkbox>
                    <van-checkbox class="radioBox" name="发热">发热</van-checkbox>
                    <van-checkbox class="radioBox" name="乏力">乏力</van-checkbox>
                    <van-checkbox class="radioBox" name="喉咙疼痛">喉咙疼痛</van-checkbox>
                    <van-checkbox class="radioBox" name="干咳">干咳</van-checkbox>
                    <van-checkbox class="radioBox" name="腹泻">腹泻</van-checkbox>
                    <van-checkbox class="radioBox" name="流鼻涕">流鼻涕</van-checkbox>
                    <van-checkbox class="radioBox" name="其他">其他</van-checkbox>
                    <van-checkbox class="radioBox" name="无">无</van-checkbox>
                </van-checkbox-group>
            </div>
            <div class="inputBox">
                <div>
                    <span>7、体温</span>
                    <div
                        class="input"
                        style="border:1px solid #cccccc;border-radius:8px;background:white"
                    >
                        <span
                            class="icon"
                            v-html="temperature"
                            style="font-size:20px;"
                        >{{temperature}}</span>
                        <van-field
                            required
                            type="number"
                            v-model="temperatureNum"
                            placeholder="请输入当前体温"
                        />
                    </div>
                </div>
            </div>
            <div class="inputBox">
                <div>
                    <span>8、备注</span>
                    <div class="textBox">
                        <textarea
                            class="beizhu"
                            maxlength="100"
                            v-model="successRemark"
                            placeholder="请输入备注信息,如办理事项(过户、抵押、查档、公积金等)"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="btnBox">
            <van-button class="btn" plain type="info" size="large" @click="showInto()">禁止进入</van-button>
            <van-button class="btn" type="info" size="large" @click="ChooseEnter(1)">允许进入</van-button>
        </div>
        <van-overlay :show="show">
            <div class="wrapper" @click.stop="show = false">
                <div class="block" @click.stop>
                    <div class="title">
                        <span>填写禁止进入原因</span>
                        <span>{{failRemark.length}}/100</span>
                    </div>
                    <div class="textBox">
                        <textarea maxlength="100" v-model="failRemark" placeholder="请填写原因"></textarea>
                    </div>
                    <div class="btnBox">
                        <van-button
                            class="btn"
                            plain
                            type="info"
                            style="color:#fff;background: rgba(0,0,0,0.3);border:1px solid #fff"
                            size="large"
                            @click="cancel"
                        >取消</van-button>
                        <van-button class="btn" type="info" size="large" @click="ChooseEnter(0)">确定</van-button>
                    </div>
                </div>
            </div>
        </van-overlay>
        <div class="ToastBox" v-if="toastShow">
            <div class="dialog">
                <van-icon
                    class="passicon"
                    :style="{color:toastInfo.color}"
                    :name="toastInfo.icon"
                    size="30px"
                />
                <span class="text">{{toastInfo.text}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from "vant";
import { addLog } from "@/api/addLog/addLog.js";
import { intoCouunt } from "@/api/count/count.js";
import { getInto } from "@/api/getInto/getInto.js";

export default {
  data() {
    return {
      text: "",
      length: 0,
      show: false,
      toastShow: false,
      textValue: "",
      intoCount: "",
      countColor: "#45ec55",
      temperature: "&#xe600;",
      toastInfo: {
        icon: "checked",
        text: "以允许进入",
        color: "#6bff79"
      },
      iconName: "dddd",
      person: {},
      userId: "",
      prjId: "",
      failRemark: "",
      successRemark: "",
      temperatureNum: "",
      result: ""
    };
  },
  created() {
    this.userId = this.$route.query.userId;
    this.prjId = this.$route.query.prjId;
    this.getCount();
    this.getUserInfo();
  },
  methods: {
    // 动态改变对象属性值
    handle() {
      this.$set(
        this.person,
        "is_fever",
        this.person.is_fever == 0 ? "否" : "是"
      );
      this.$set(this.person, "contact", this.person.contact == 0 ? "否" : "是");
      this.$set(this.person, "hubei", this.person.hubei == 0 ? "否" : "是");
    },
    getUserInfo() {
      getInto({
        person_id: this.userId
      })
        .then(res => {
          if (res.success) {
            this.person = res.data.person;
            this.handle();
          } else {
            this.$toast(err.message);
          }
        })
        .catch(err => {
          this.$toast(err.message);
        });
    },
    ChooseEnter(isInto) {
      switch (isInto) {
        case 1:
          if (this.temperatureNum === "") {
            this.$toast("请输入当前体温");
          } else if (this.temperature >= 37.3) {
            this.$toast("体温高于37.3，禁止入内");
            this.failRemark = "体温高于37.3，禁止入内";
            this.addLog(0);
          } else {
            this.addLog(isInto);
          }
          break;
        case 0:
          if (this.temperatureNum === "") {
            this.$toast("请输入当前体温");
          } else if (this.failRemark === "") {
            this.$toast("请输入禁入原因");
          } else {
            this.addLog(isInto);
            this.cancel();
          }
          break;
      }
    },
    addLog(isInto) {
      let parmas = {
        person_id: this.userId, //出入人员id
        temperature: this.temperatureNum, //体温
        verify_per_id: this.prjId, //出入记录.审核人ID
        in_out: 1, //出入记录.出入类型,1、进入 -1、出去
        symptom: this.person.is_seemingly, //疑似症状
        is_permit: isInto, //是否允许进入,1:允许,0:不允许
        orgid: this.person.orgid,
        remark: this.successRemark == "" ? this.failRemark : this.successRemark,
        url: location.href
      };
      addLog(parmas)
        .then(res => {
          if (res.success) {
            let data = res.data;
            this.dialog("checked", res.message, "#6bff79");
            this.getCount();
            // 扫描完成之后调用微信扫一扫;
            wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: "wxdfeb79e40c392970", // 必填，公众号的唯一标识
              timestamp: data.sign.timestamp, //  1b 必填，生成签名的时间戳
              nonceStr: data.sign.noncestr, // 必填，生成签名的随机串
              signature: data.sign.signature, // 必填，签名
              jsApiList: ["scanQRCode"] // 必填，需要使用的JS接口列表
            });
            setTimeout(() => {
              wx.scanQRCode({
                needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function(res) {
                  this.result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                  window.location.href = this.result;
                },
                fail: function(err) {
                  this.$toast("调用扫码失败");
                }
              });
            }, 2000);
          } else {
            this.dialog("clear", res.message, "#ff6b6b");
          }
        })
        .catch(err => {
          this.$toast(err.message);
        });
    },
    getCount() {
      intoCouunt({
        person_id: this.userId
      })
        .then(res => {
          this.intoCount = res.data.count;
          if (this.intoCount > 0) {
            this.countColor = "#45ec55";
          } else {
            this.countColor = "#ff5959";
          }
        })
        .catch(err => {
          this.dialog("clear", res.message, "#ff6b6b");
        });
    },
    showInto() {
      this.show = true;
      this.successRemark = "";
    },
    cancel() {
      this.show = false;
      this.failRemark = "";
    },
    passInto() {
      this.dialog("checked", "已允许进入", "#6bff79");
    },
    submitSuccess() {
      this.dialog("clear", "提交成功", "#ff6b6b");
    },
    //提示
    dialog(icon, text, color) {
      this.toastInfo.text = text;
      this.toastInfo.color = color;
      this.toastInfo.icon = icon;
      this.toastShow = true;
      setTimeout(() => {
        this.toastShow = false;
      }, 1000);
    },
    // 调用微信扫码功能
    wxScanCode() {
      wx.scanQRCode({
        desc: "scanQRCode desc",
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function(res) {
          console.log("调用成功");
          var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
          alert(result);
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
.EmployeeInfo {
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .intoCount {
    width: 100%;
    height: 48px;
    margin-top: 16px;
    border-radius: 6px;
    font-size: 14px;
    padding: 0px 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.19);
    border-radius: 8px;
    .count {
      font-size: 22px;
      margin-right: 10px;
    }
  }
  .ToastBox {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 100;
    .dialog {
      width: 151px;
      height: 67px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 6px;
      margin: 270px auto;
      color: white;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0px 10px;
      box-sizing: border-box;
      .passicon {
        color: #6bff79;
      }
      .text {
        font-size: 17px;
      }
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .block {
      width: 100%;
      height: 322px;
      margin: 0 12px;
      border-radius: 6px;
      padding: 25px;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.2);
      .title {
        color: #fff;
        font-size: 14px;
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      .textBox {
        width: 100%;
        height: 171px;
        background: #fff;
        border-radius: 6px;
        padding: 10px;
        box-sizing: border-box;
        margin-top: 10px;
        textarea {
          width: 100%;
          height: 100%;
          font-size: 14px;
          border: none;
          color: #181818;
        }
      }
    }
  }
  .title {
    font-size: 26px;
    color: #409eff;
    font-weight: 600;
  }
  .completion-info {
    width: 100%;
    font-size: 14px;
    color: #38363e;
    .radio {
      margin-top: 15px;
      margin-left: 14px;
      display: flex;
      flex-wrap: wrap;
      .radioBox {
        width: 33%;
        margin-bottom: 14px;
      }
    }
    .inputBox {
      margin-top: 14px;
      .textBox {
        padding-top: 10px;
      }
      .beizhu {
        width: 100%;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        box-sizing: border-box;
        border: 1px solid rgb(204, 204, 204);
      }
      .input {
        width: 100%;
        display: flex;
        margin: 10px 0;
        border-radius: 8px;
        padding-left: 10px;
        align-items: center;
        background: #f5f5f5;
        box-sizing: border-box;
      }
    }
  }
  .btnBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .btn {
      width: 48%;
    }
  }
}
</style>