<template>
    <div></div>
</template>
<script>
export default {
  data() {
    return {
      state: "",
      code: "",
      userId: "",
      orgid: "",
      prefix: false
    };
  },
  created() {
    if (this.$route.query.id) {
      this.userId = this.getQueryString("id");
      this.orgid = this.getQueryString("orgid");
    } else {
      this.state = this.getQueryString("state");
    }
    setTimeout(() => {
      this.handle();
    }, 300);
  },
  methods: {
    handle() {
      let urlBase = "http://www.chinabdc.cn/employees?orgid=" + this.orgid; //定义基本路径
      // console.log(encodeURIComponent(urlBase));
      var url_one = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdfeb79e40c392970&redirect_uri=http%3A%2F%2Fwww.chinabdc.cn%2Fdetail&response_type=code&state=${this.state}&scope=snsapi_base&connect_redirect=1#wechat_redirect`;

      var url_two = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdfeb79e40c392970&redirect_uri=${encodeURIComponent(
        urlBase
      )}&response_type=code&state=${
        this.userId
      }&scope=snsapi_base&connect_redirect=1#wechat_redirect`;
      if (this.userId != "") {
        console.log("走的验证");
        window.location.href = url_two;
      } else {
        console.log("走的注册");
        window.location.href = url_one;
      }
    },
    // 获取地址栏参数
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
  }
};
</script>
<style lang="less">
</style>