<template>
    <div class="container">
        <div class="desc">
            <!-- <span class="title">保障办公区安全</span> -->
            <span class="title">{{orgname}}</span>
            <span class="title-text">为了您和他人的健康如实准确填写</span>
        </div>
        <div class="from">
            <div class="from-row">
                <div class="from-title">
                    <span class="num">1、</span>
                    <span class="title">姓名</span>
                    <span class="type" v-if="!prefix">(必填)</span>
                </div>
                <div class="from-radio">
                    <van-cell-group>
                        <van-field
                            class="icon iconxingming"
                            v-model="name"
                            placeholder="请填写真实姓名"
                            :disabled="prefix"
                        >
                            <span slot="left-icon" class="icon">&#xe605;</span>
                        </van-field>
                    </van-cell-group>
                </div>
            </div>
            <div class="from-row">
                <div class="from-title">
                    <span class="num">2、</span>
                    <span class="title">身份证</span>
                    <span class="type" v-if="!prefix">(必填)</span>
                </div>
                <div class="from-radio">
                    <van-cell-group>
                        <van-field
                            class="icon iconxingming"
                            v-model="idno"
                            placeholder="请填写身份证号"
                            :disabled="prefix"
                            :maxlength="18"
                        >
                            <span slot="left-icon" class="icon">&#xe6d7;</span>
                        </van-field>
                    </van-cell-group>
                </div>
            </div>
            <!-- <div class="from-row">
                <div class="from-title">
                    <span class="num">3、</span>
                    <span class="title">籍贯</span>
                    <span class="type" v-if="!prefix">(必填)</span>
                </div>
                <div class="from-radio">
                    <van-cell-group>
                        <van-field
                            class="icon iconxingming"
                            v-model="birthplace"
                            placeholder="请填写籍贯"
                            :disabled="prefix"
                        >
                            <span slot="left-icon" class="icon">&#xe61f;</span>
                        </van-field>
                    </van-cell-group>
                </div>
            </div>-->
            <!-- <div class="from-row">
                <div class="from-title">
                    <span class="num">4、</span>
                    <span class="title">现住址</span>
                    <span class="type">(必填)</span>
                </div>
                <div class="from-radio">
                    <van-cell-group>
                        <van-field
                            class="icon iconxingming"
                            v-model="address"
                            placeholder="请填写现居住详细地址"
                        >
                            <span slot="left-icon" class="icon">&#xe61f;</span>
                        </van-field>
                    </van-cell-group>
                </div>
            </div>-->
            <!-- <div class="from-row">
                <div class="from-title">
                    <span class="num">5、</span>
                    <span class="title">车牌号</span>
                </div>
                <div class="from-radio">
                    <van-cell-group>
                        <van-field class="icon iconxingming" v-model="carno" placeholder="请填写车牌号">
                            <span slot="left-icon" class="icon">&#xe625;</span>
                        </van-field>
                    </van-cell-group>
                </div>
            </div>-->
            <div class="from-row">
                <div class="from-title">
                    <span class="num">3、</span>
                    <span class="title">手机号</span>
                    <span class="type" v-if="!prefix">(必填)</span>
                </div>
                <div class="from-radio">
                    <van-cell-group>
                        <van-field
                            class="icon iconxingming"
                            v-model="mobileno"
                            placeholder="请填写手机号"
                            :maxlength="11"
                            :disabled="prefix"
                        >
                            <span slot="left-icon" class="icon">&#xe613;</span>
                        </van-field>
                    </van-cell-group>
                </div>
            </div>
            <div class="from-row">
                <div class="from-title">
                    <span class="num">4、</span>
                    <span class="title">是否发热</span>
                    <span class="type">(必选)</span>
                </div>
                <div class="from-radio">
                    <van-radio-group v-model="isfever" direction="horizontal" :icon-size="18">
                        <van-radio name="1">是</van-radio>
                        <van-radio name="0">否</van-radio>
                    </van-radio-group>
                </div>
            </div>
            <div class="from-row">
                <div class="from-title">
                    <span class="num">5、</span>
                    <span class="title">2020年1月24日零时后是否去过武汉</span>
                    <span class="type">(必选)</span>
                </div>
                <div class="from-radio">
                    <van-radio-group v-model="hubei" direction="horizontal" :icon-size="18">
                        <van-radio name="1">是</van-radio>
                        <van-radio name="0">否</van-radio>
                    </van-radio-group>
                </div>
            </div>
            <div class="from-row">
                <div class="from-title">
                    <span class="num">6、</span>
                    <span class="title">1月1日后是否与疫区人员接触史</span>
                    <span class="type">(必选)</span>
                </div>
                <div class="from-radio">
                    <van-radio-group v-model="contact" direction="horizontal" :icon-size="18">
                        <van-radio name="1">是</van-radio>
                        <van-radio name="0">否</van-radio>
                    </van-radio-group>
                </div>
            </div>
            <div class="from-row">
                <div class="from-title">
                    <span class="num">7、</span>
                    <span class="title">是否有疑似症状</span>
                    <span class="type">(必选)</span>
                </div>
                <div class="from-radio">
                    <van-checkbox-group
                        style="margin-left:20px;display:flex;justify-content:space-between;"
                        v-model="seemingly"
                        direction="horizontal"
                        :icon-size="19"
                    >
                        <van-checkbox class="checkBox" name="呼吸困难">呼吸困难</van-checkbox>
                        <van-checkbox class="checkBox" name="发热">发热</van-checkbox>
                        <van-checkbox class="checkBox" name="乏力">乏力</van-checkbox>
                        <van-checkbox class="checkBox" name="咽喉疼痛">咽喉疼痛</van-checkbox>
                        <van-checkbox class="checkBox" name="干咳">干咳</van-checkbox>
                        <van-checkbox class="checkBox" name="腹泻">腹泻</van-checkbox>
                        <van-checkbox class="checkBox" name="流鼻涕">流鼻涕</van-checkbox>
                        <van-checkbox class="checkBox" name="其它">其它</van-checkbox>
                        <van-checkbox class="checkBox" name="无">无</van-checkbox>
                    </van-checkbox-group>
                </div>
            </div>
            <div class="from-row" v-if="orgid==99900">
                <div class="from-title">
                    <span class="num">8、</span>
                    <span class="title">返京是否满14天</span>
                    <span class="type">(必选)</span>
                </div>
                <div class="from-radio">
                    <van-radio-group
                        style="display:flex;flex-direction:column;justify-content:space-between;"
                        v-model="backBj"
                        direction="horizontal"
                        :icon-size="19"
                    >
                        <van-radio class="checkBox" name="14天内未离京" style="width:100%">14天内未离京</van-radio>
                        <van-radio class="checkBox" name="返京满十四天" style="width:100%">返京满十四天</van-radio>
                        <van-radio class="checkBox" name="返京未满十四天" style="width:100%">返京未满十四天</van-radio>
                    </van-radio-group>
                </div>
            </div>
            <div class="bottom">
                <van-checkbox
                    v-model="checked"
                    shape="square"
                >本人郑重承诺，以上所填内容完全属实，如有隐瞒、伪造、弄虚作假，一切由自己负责。</van-checkbox>
                <van-button color="#409eff" @click="submit()">提交</van-button>
            </div>
        </div>
    </div>
</template>
<script>
import { addUser } from "@/api/addUser/addUser.js";
import { modifyUser } from "@/api/modifyUser/modifyUser.js";
export default {
  data() {
    return {
      name: "",
      idno: "",
      address: "",
      birthplace: "",
      mobileno: "",
      orgid: "",
      orgname: "",
      weichatid: "",
      carno: "",
      contact: "", //是否接触过疫区人员或途经疫区人员,0、未接触 1、接触过
      hubei: "", //是否去过湖北或途经湖北,0、未去地过、未途径 1、去过或经过
      isfever: "", // 是否发热,0、不发热 1、发热
      seemingly: [],
      radio: 0,
      checked: false,
      prefix: false,
      checkedIsDisable: false,
      // 新增字段信息
      backBj: ""
    };
  },
  mounted() {
    this.orgid = Number(this.$route.query.state);
    this.orgname = this.$route.query.orgname || "防疫登记服务平台";
    this.weichatid = this.$route.query.openid;
    if (this.$route.query.hasOwnProperty("prefix")) {
      this.prefix = Boolean(this.$route.query.prefix);
      let data = JSON.parse(this.$route.query.data);
      this.weichatid = data.weichat_id;
      this.orgid = data.orgid;
      this.name = data.name;
      this.idno = data.id_no;
      // this.birthplace = data.birthplace;
      // this.address = data.address;
      // this.carno = data.car_no;
      this.mobileno = data.mobile_no;
      this.isfever = data.is_fever == "否" ? "0" : "1";
      this.hubei = data.hubei == "否" ? "0" : "1";
      this.contact = data.contact == "否" ? "0" : "1";
      this.checkedIsDisable = data.is_seemingly;
      this.seemingly = data.is_seemingly.split(",");
    }
    this.setTitle();
  },
  methods: {
    // 根据组织id更改页面title
    setTitle() {
      if (this.$route.query.hasOwnProperty("prefix")) {
        document.title = "人员信息修改";
      } else {
        document.title = this.orgname;
      }
    },
    submit() {
      if (this.prefix) {
        this.modify();
      } else {
        this.addInfo();
      }
    },
    addInfo() {
      var idReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      var phoneReg = /^1[3456789]\d{9}$/;
      if (
        this.name === "" ||
        this.isfever === "" ||
        this.hubei === "" ||
        this.contact === "" ||
        this.seemingly === []
      ) {
        this.$toast("请填写完整信息");
      } else if (!idReg.test(this.idno)) {
        this.$toast("请输入正确的身份证号");
        return false;
      } else if (!phoneReg.test(this.mobileno)) {
        this.$toast("请输入正确的手机号");
        return false;
      } else if (!this.checked) {
        this.$toast("请勾选承诺");
      } else if (this.hubei == "1") {
        this.$toast("因您2020年1月24日零时后是否去过武汉,请您居家隔离");
      } else if (this.backBj == "返京未满十四天") {
        this.$toast("因您离京未满14天，请您居家隔离满14天后再出门");
      } else if (this.seemingly != "无") {
        this.$toast("因您有不适症状请您康复后再来办理业务");
      } else {
        addUser({
          orgid: this.orgid,
          weichatid: this.weichatid,
          name: this.name,
          idno: this.idno,
          // address: this.address,
          // carno: this.carno,
          // birthplace: this.birthplace,
          mobileno: this.mobileno,
          contact: this.contact,
          hubei: this.hubei,
          isfever: this.isfever,
          seemingly: this.seemingly.toString()
        })
          .then(res => {
            if (res.success) {
              this.$toast({
                message: res.message,
                onClose: () => {
                  this.$router.push({
                    path: "./fangyi",
                    query: {
                      openid: this.weichatid,
                      orgid: this.orgid,
                      data: JSON.stringify(res.data.person)
                    }
                  });
                }
              });
            } else {
              this.$toast(res.message + "请检查填写信息");
            }
          })
          .catch(err => {
            this.$toast(err.message);
          });
      }
    },
    modify() {
      if (
        this.isfever === "" ||
        this.hubei === "" ||
        this.contact === "" ||
        this.seemingly === []
      ) {
        this.$toast("请填写完整信息");
      } else if (!this.checked) {
        this.$toast("请勾选承诺");
      } else {
        modifyUser({
          orgid: this.orgid,
          weichatid: this.weichatid,
          name: this.name,
          idno: this.idno,
          // address: this.address,
          // carno: this.carno,
          // birthplace: this.birthplace,
          mobileno: this.mobileno,
          contact: this.contact,
          hubei: this.hubei,
          isfever: this.isfever,
          seemingly: this.seemingly.toString()
        })
          .then(res => {
            if (res.success) {
              this.$toast({
                message: res.message,
                onClose: () => {
                  this.$router.push({
                    path: "./fangyi",
                    query: {
                      openid: this.weichatid,
                      orgid: this.orgid,
                      data: JSON.stringify(res.data.person)
                    }
                  });
                }
              });
            } else {
              this.$toast(res.message + "请检查填写信息");
            }
          })
          .catch(err => {
            this.$toast(err.message);
          });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  background-color: #ffffff;
  .desc {
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    span {
      margin: 5px 0 0 0;
    }
    .title {
      font-size: 18px;
      color: @main-color;
    }
    .title-text {
      font-size: 14px;
      color: @vice-color;
    }
  }
  .from {
    width: 100%;
    margin-top: 16px;
    .from-row {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 10px;
      .from-title {
        padding: 6px 0;
        span {
          font-size: 14px;
        }
        .num,
        .title {
          color: @text-color;
        }
        .type {
          color: @vice-color;
        }
      }
      .from-radio {
        box-sizing: border-box;
        .checkBox {
          width: 22%;
          margin-top: 10px;
        }
        .van-radio-group {
          padding: 0 12px;
          box-sizing: border-box;
          justify-content: flex-start;
          .van-radio {
            padding: 4px;
            margin-right: 32px;
            /deep/.van-radio__label {
              color: @text-color;
              font-size: 14px;
            }
          }
        }
        .van-hairline--top-bottom::after {
          transform: scale(0);
        }
        .van-cell-group {
          border-radius: 8px;
          border: 1px solid @base-color;
          .van-cell {
            padding: 8px 0.42667rem;
            border-radius: 8px;
          }
        }
      }
    }
    .bottom {
      width: 100%;
      margin-top: 24px;
      .van-checkbox {
        .van-checkbox__icon {
          .van-icon {
            width: 1.15rem;
            height: 1.15rem;
          }
        }
        /deep/.van-checkbox__label {
          color: @text-color;
          font-size: 14px;
        }
      }
      .van-button {
        width: 100%;
        margin: 24px 0;
        border-radius: 8px;
      }
    }
  }
}
</style>