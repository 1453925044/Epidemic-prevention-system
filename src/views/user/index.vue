<template>
    <div class="container">
        <div class="user-card">
            <div class="title"></div>
            <img src="/static/images/head_img.png" alt="头像" />
            <div class="user-info">
                <span style="font-size:24px;">人员通行凭证</span>
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
            <div class="img"></div>
            <p v-if="false">超时，点击重新加载</p>
            <van-button @click="jump">修改个人信息</van-button>
        </div>
        <div class="desc">
            <p>传晟信息服务抗疫防控平台</p>
            <p>技术支持：成都传晟信息技术有限公司</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
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
  methods: {
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
  padding: 0 12px;
  padding-top: 0px;
  box-sizing: border-box;
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
        width: 85%;
        margin-top: 6px;
        border-radius: 4px;
        background: #f5f5f5;
        border: 1px solid @base-color;
      }
      .title {
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
</style>