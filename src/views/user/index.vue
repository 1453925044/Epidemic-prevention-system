<template>
    <div class="container">
        <div class="user-card">
            <div class="title"></div>
            <img src="/static/images/head_img.png" alt="头像" />
            <div class="user-info">
                <span style="font-size:22px;">人员通行凭证</span>
                <span>姓名：魏大大</span>
                <span>手机：15282211107</span>
            </div>
        </div>
        <div class="from">
            <div class="cell" v-for="(item,index) in fromList" :key="index">
                <span class="title">{{item.title}}</span>
                <van-field v-model="item.data" placeholder="请填写手机号" disabled></van-field>
            </div>
        </div>
        <div class="qrcode">
            <!-- <div class="img"></div> -->
            <div id="qrcode"></div>
            <p v-if="false">超时，点击重新加载</p>
            <van-button @click="jump">修改个人信息</van-button>
        </div>
        <div class="desc">
            <p>传晟信息服务抗疫防控平台</p>
            <p>技术支持：成都传晟信息技术有限公司</p>
        </div>
        <van-popup v-model="show" round position="bottom" :style="{ height: '40%' }">
            <div class="popup-content">
                <p>
                    <span
                        class="icon"
                        :style="{color: isPopup ?'#53e961':'#ff6b6b'}"
                    >{{isPopup ? '&#xe867;':'&#xe64e;'}}</span>
                </p>
                <div class="success" v-if="isPopup">
                    <p>
                        <span class="count">今日已入园{{1}}次</span>
                    </p>
                    <p class="count" v-for="(item,index) in record" :key="index">
                        <span class="time">{{index+1}}、{{item.time}}</span>
                        <span class="time">进入园区</span>
                    </p>
                </div>
                <div class="fail" v-else>
                    <p class="count">
                        <span>入园失败</span>
                    </p>
                    <p class="time">体温偏高,请检查登记</p>
                </div>
            </div>
        </van-popup>
    </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  components: {
    QRCode
  },
  data() {
    return {
      show: true,
      isPopup: true,
      link: "https://baidu.com",
      record: [
        {
          time: "10:02:14"
        },
        {
          time: "10:02:14"
        }
      ],
      fromList: [
        {
          title: "籍贯",
          data: "四川"
        },
        {
          title: "车牌",
          data: "无"
        },
        {
          title: "敏感区域接触史",
          data: "否"
        },
        {
          title: "是否发热",
          data: "否"
        },
        {
          title: "途经区域接触史",
          data: "否"
        },
        {
          title: "疑似症状",
          data: "无"
        }
      ]
    };
  },
  created() {
    this.UrlSearch();
  },
  mounted() {
    this.$nextTick(function() {
      this.qrcode();
    });
  },
  methods: {
    //  生成二维码
    qrcode() {
      let that = this;
      let qrcode = new QRCode("qrcode", {
        width: 124,
        height: 124, // 高度
        text: this.link, // 二维码内容
        render: "canvas", // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        background: "#409eff", // 背景色
        foreground: "#409eff" // 前景色
      });
    },
    jump() {
      this.$router.push({
        path: "/index"
      });
    },
    UrlSearch() {
      var name, value, code, state;
      var str = location.href; //取得整个地址栏
      var num = str.indexOf("?");
      str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
      var arr = str.split("&"); //各个参数放到数组里
      console.log(arr);
      for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
          name = arr[i].substring(0, num);
          value = arr[i].substr(num + 1);
        }
      }
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
    margin: 8px auto;
    p {
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
  .count {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>