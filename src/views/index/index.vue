import { isLogin } from '../../api/isLogin/isLogin';
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
                    <span class="type">(必填)</span>
                </div>
                <div class="from-radio">
                    <van-cell-group>
                        <van-field class="icon iconxingming" v-model="name" placeholder="请填写真实姓名">
                            <span slot="left-icon" class="icon">&#xe605;</span>
                        </van-field>
                    </van-cell-group>
                </div>
            </div>
            <div class="from-row">
                <div class="from-title">
                    <span class="num">2、</span>
                    <span class="title">身份证</span>
                    <span class="type">(必填)</span>
                </div>
                <div class="from-radio">
                    <van-cell-group>
                        <van-field class="icon iconxingming" v-model="idno" placeholder="请填写身份证号">
                            <span slot="left-icon" class="icon">&#xe6d7;</span>
                        </van-field>
                    </van-cell-group>
                </div>
            </div>
            <div class="from-row">
                <div class="from-title">
                    <span class="num">3、</span>
                    <span class="title">籍贯</span>
                    <span class="type">(必填)</span>
                </div>
                <div class="from-radio">
                    <van-cell-group>
                        <van-field
                            class="icon iconxingming"
                            v-model="birthplace"
                            placeholder="请填写籍贯"
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
                    <span class="type">(必填)</span>
                </div>
                <div class="from-radio">
                    <van-cell-group>
                        <van-field
                            class="icon iconxingming"
                            v-model="mobileno"
                            placeholder="请填写手机号"
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
                    <van-radio-group
                        style="justify-content: space-between;"
                        v-model="seemingly"
                        direction="horizontal"
                        :icon-size="18"
                    >
                        <van-radio name="1">呼吸困难</van-radio>
                        <van-radio name="2">发热</van-radio>
                        <van-radio name="3">乏力</van-radio>
                        <van-radio name="4">咽喉疼痛</van-radio>
                        <van-radio name="5">干咳</van-radio>
                        <van-radio name="6">腹泻</van-radio>
                        <van-radio name="7">流鼻涕</van-radio>
                        <van-radio name="8">其它</van-radio>
                        <van-radio name="9">无</van-radio>
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
      seemingly: "",
      radio: 0,
      checked: true
    };
  },
  mounted() {
    this.orgid = this.$route.query.state;
    this.weichatid = this.$route.query.openid;
    console.log(this.orgid);
    console.log(this.weichatid);
  },
  methods: {
    submit() {
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
        seemingly: this.seemingly
      })
        .then(res => {
          if (res.success) {
            console.log(res);
            // this.$toast({
            //   message: "提交成功",
            //   onClose: () => {
            //     this.$router.push({
            //       path: "./fangyi",
            //       query: {
            //         code: 1,
            //         state: 123
            //       }
            //     });
            //   }
            // });
          } else {
            this.$toast(res.message);
          }
        })
        .catch(err => {
          this.$toast(err.message);
        });
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