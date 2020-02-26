<template>
    <div class="container">
        <div class="user-card">
            <div class="title"></div>
            <img src="/static/images/head_img.png" alt="头像" />
            <div class="user-info">
                <span style="font-size:22px;">人员通行凭证</span>
                <span>姓名：{{person.name}}</span>
                <span>手机：{{person.mobile_no}}</span>
            </div>
        </div>
        <div class="from">
            <!-- <div class="cell">
                <span class="title">籍贯</span>
                <van-field v-model="person.birthplace" disabled></van-field>
            </div>
            <div class="cell">
                <span class="title">车牌</span>
                <van-field v-model="person.car_no" disabled></van-field>
            </div>-->
            <div class="cell">
                <span class="title">敏感区域接触史</span>
                <van-field v-model="person.contact" disabled></van-field>
            </div>
            <div class="cell">
                <span class="title">是否发热</span>
                <van-field v-model="person.is_fever" disabled></van-field>
            </div>
            <div class="cell">
                <span class="title">途经区域接触史</span>
                <van-field v-model="person.hubei" disabled></van-field>
            </div>
            <div class="cell">
                <span class="title">疑似症状</span>
                <van-field v-model="person.is_seemingly" disabled></van-field>
            </div>
        </div>
        <div class="qrcode">
            <div id="qrcode"></div>
            <p v-if="false">超时，点击重新加载</p>
            <van-button @click="jump">修改个人信息</van-button>
        </div>
        <div class="desc">
            <span>大厅防疫登记平台</span>
            <span>技术支持：成都传晟信息技术有限公司</span>
        </div>
        <!-- <van-button @click="scanQRCode">点击扫码</van-button> -->
        <van-popup v-model="show" round position="bottom" :style="{ height: '45%' }">
            <div class="popup-content">
                <div class="success">
                    <p>
                        <span class="icon" style="color:#53e961;">&#xe867;</span>
                    </p>
                    <p class="title">
                        <span class="count">今日已进入{{success.length}}次</span>
                    </p>
                    <p class="count" v-for="(item,index) in success" :key="index">
                        <span class="time">{{index+1}}、{{item.create_date}}</span>
                        <span class="time">进入</span>
                    </p>
                </div>
                <!-- <div class="fail" v-if="showFail">
                    <p>
                        <span class="icon" style="color:#ff6b6b;">&#xe64e;</span>
                    </p>
                    <p class="title">
                        <span class="count">审核失败</span>
                    </p>
                    <p class="fail-count" v-for="(item,index) in fail" :key="index">
                        <span class="time">{{index+1}}、{{item.create_date}}</span>
                        <span class="reson">{{item.remark ?item.remark:'请到大厅登记'}}</span>
                    </p>
                </div>-->
            </div>
        </van-popup>
    </div>
</template>
<script>
import QRCode from "qrcodejs2";
import { addLog } from "@/api/addLog/addLog.js";
import { isRegist } from "@/api/isRegist/isRegist.js";
let timer = null;
export default {
  components: {
    QRCode
  },
  data() {
    return {
      count: 0,
      show: false,
      showInto: false,
      showFail: false,
      isPopup: true,
      orgid: "",
      person: {},
      record: [],
      success: [],
      fail: [],
      weichatid: "",
      ticket: ""
    };
  },
  mounted() {
    this.orgid = this.$route.query.orgid;
    this.weichatid = this.$route.query.openid;
    this.person = JSON.parse(this.$route.query.data);
    console.log(this.person);
    this.$nextTick(function() {
      this.qrcode();
      this.handle();
    });
    timer = setInterval(() => {
      this.getInto();
    }, 2000);
  },
  destroyed() {
    clearInterval(timer);
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
    //  生成二维码
    qrcode() {
      let that = this;
      let args = {
        id: that.person.id,
        orgid: that.person.orgid
      };
      let url = `http://www.chinabdc.cn/blank/?id=${that.person.id}&orgid=${that.person.orgid}`;
      let qrcode = new QRCode("qrcode", {
        width: 186,
        height: 186, // 高度
        text: url, // 二维码内容
        render: "canvas", // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        background: "#409eff", // 背景色
        foreground: "#409eff" // 前景色
      });
    },
    // 查询进入次数
    getInto() {
      isRegist({
        person_id: this.person.id
      })
        .then(res => {
          let fail = [];
          let success = [];
          if (res.success && res.data.logs) {
            let data = res.data.logs;
            for (let i in data) {
              if (data[i].is_permit == 1) {
                success.push(data[i]);
              }
            }
            this.success = success;
            if (this.count < data.length) {
              this.show = true;
              this.count = data.length;
            }
            success = [];
          } else {
            this.show = false;
          }
        })
        .catch(err => {
          this.show = false;
          this.$toast(err.message);
        });
    },
    jump() {
      this.$router.push({
        path: "/index",
        query: {
          data: JSON.stringify(this.person),
          prefix: true
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  .user-card,
  .from,
  .qrcode,
  .desc {
    padding: 0 12px;
    box-sizing: border-box;
  }
  .user-card {
    width: 100%;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 10px 10px;
    background: url("/static/images/card_bg.png") no-repeat;
    background-size: 100%;
    background-position: center;
    img {
      width: 63px;
      height: 71px;
    }
    .user-info {
      color: #fff;
      display: flex;
      margin-left: 10px;
      flex-direction: column;
      justify-content: space-around;
      span {
        font-size: 14px;
      }
    }
  }
  .from {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .cell {
      width: 50%;
      margin-top: 10px;
      .van-cell,
      .van-field {
        margin-top: 8px;
        padding: 0 0.26667rem;
        /deep/.van-cell__value,
        /deep/.van-field__value {
          border-radius: 8px;
          padding: 8px 6px;
          background: #f5f5f5;
          border: 1px solid @base-color;
        }
      }
      .title {
        margin-left: 10px;
        font-size: 14px;
        color: @text-color;
      }
    }
  }
  .qrcode {
    display: flex;
    margin-top: 16px;
    align-items: center;
    flex-direction: column;

    .img {
      width: 162px;
      height: 162px;
      border: 1px solid #000;
    }
    .van-button {
      width: 162px;
      height: 40px;
      font-size: 14px;
      margin-top: 15px;
      line-height: 40px;
      color: @main-color;
      border-radius: 4px;
      border: 1px solid @main-color;
    }
  }
  .desc {
    width: 100%;
    display: flex;
    margin: 16px auto;
    align-items: center;
    flex-direction: column;
    span {
      font-size: 13px;
      color: #b2b2b2;
      text-align: center;
    }
  }
}
.popup-content {
  width: 100%;
  height: 90%;
  p {
    width: 100%;
    padding: 6px 0;
    text-align: center;
    .icon {
      font-size: 58px;
    }
    span {
      font-size: 30px;
    }
    .time {
      font-size: 14px;
    }
  }
  .title {
    padding: 0px 0;
    margin: 0;
  }
  .count {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .fail-count {
    display: flex;
    margin: 0;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    .reson {
      font-size: 14px;
    }
  }
}
</style>