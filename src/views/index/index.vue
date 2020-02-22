<template>
    <div class="container">
        <div class="desc">
            <span class="title">保障办公区安全</span>
            <span class="title">人员通行证信息填写</span>
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
                        >
                            <span slot="left-icon" class="icon">&#xe6d7;</span>
                        </van-field>
                    </van-cell-group>
                </div>
            </div>
            <div class="from-row">
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
            </div>
            <div class="from-row">
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
            </div>
            <div class="from-row">
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
            </div>
            <div class="from-row">
                <div class="from-title">
                    <span class="num">6、</span>
                    <span class="title">手机号</span>
                    <span class="type" v-if="!prefix">(必填)</span>
                </div>
                <div class="from-radio">
                    <van-cell-group>
                        <van-field
                            class="icon iconxingming"
                            v-model="mobileno"
                            placeholder="请填写手机号"
                            :disabled="prefix"
                        >
                            <span slot="left-icon" class="icon">&#xe613;</span>
                        </van-field>
                    </van-cell-group>
                </div>
            </div>
            <div class="from-row">
                <div class="from-title">
                    <span class="num">7、</span>
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
                    <span class="num">8、</span>
                    <span class="title">1月1日后是否去过(湖北)</span>
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
                    <span class="num">9、</span>
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
                    <span class="num">10、</span>
                    <span class="title">是否有疑似症状</span>
                    <span class="type">(必选)</span>
                </div>
                <div class="from-radio">
                    <van-checkbox-group
                        style="margin-left:16px;"
                        v-model="seemingly"
                        direction="horizontal"
                        :icon-size="20"
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
      weichatid: "",
      carno: "",
      contact: "", //是否接触过疫区人员或途经疫区人员,0、未接触 1、接触过
      hubei: "", //是否去过湖北或途经湖北,0、未去地过、未途径 1、去过或经过
      isfever: "", // 是否发热,0、不发热 1、发热
      seemingly: [],
      radio: 0,
      checked: false,
      prefix: false,
      checkedIsDisable: false
    };
  },
  mounted() {
    this.orgid = this.$route.query.state;
    this.weichatid = this.$route.query.openid;
    console.log(this.$route.query);
    console.log(this.weichatid);
    if (this.$route.query.hasOwnProperty("prefix")) {
      this.prefix = Boolean(this.$route.query.prefix);
      let data = JSON.parse(this.$route.query.data);
      console.log(data);
      this.weichatid = data.weichat_id;
      this.orgid = data.orgid;
      this.name = data.name;
      this.idno = data.id_no;
      this.birthplace = data.birthplace;
      this.address = data.address;
      this.carno = data.car_no;
      this.mobileno = data.mobile_no;
      this.isfever = data.is_fever == "否" ? "0" : "1";
      this.hubei = data.hubei == "否" ? "0" : "1";
      this.contact = data.contact == "否" ? "0" : "1";
      this.checkedIsDisable = data.is_seemingly;
      console.log(data.is_seemingly.split(","));
      this.seemingly = data.is_seemingly.split(",");
    }
  },
  methods: {
    submit() {
      if (this.prefix) {
        this.modify();
      } else {
        this.add();
      }
    },
    add() {
      if (
        this.name === "" ||
        this.idno === "" ||
        this.address === "" ||
        this.birthplace === "" ||
        this.mobileno === "" ||
        this.isfever === "" ||
        this.hubei === "" ||
        this.contact === "" ||
        this.seemingly === []
      ) {
        this.$toast("请填写完整信息");
      } else if (!this.checked) {
        this.$toast("请勾选承诺");
      } else {
        addUser({
          orgid: this.orgid,
          weichatid: this.weichatid,
          name: this.name,
          idno: this.idno,
          address: this.address,
          birthplace: this.birthplace,
          mobileno: this.mobileno,
          carno: this.carno,
          contact: this.contact,
          hubei: this.hubei,
          isfever: this.isfever,
          seemingly: this.seemingly.toString()
        })
          .then(res => {
            if (res.success) {
              console.log(res);
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
          address: this.address,
          birthplace: this.birthplace,
          mobileno: this.mobileno,
          carno: this.carno,
          contact: this.contact,
          hubei: this.hubei,
          isfever: this.isfever,
          seemingly: this.seemingly.toString()
        })
          .then(res => {
            if (res.success) {
              console.log(res);
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
  padding: 0 12px;
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
      padding-bottom: 12px;
      .from-title {
        padding-bottom: 12px;
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
        .checkBox {
          width: 28%;
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
            border-radius: 8px;
          }
        }
      }
    }
    .bottom {
      width: 100%;
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
        margin: 42px 0 21px 0;
        border-radius: 8px;
      }
    }
  }
}
</style>