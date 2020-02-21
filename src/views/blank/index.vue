<template>
    <div></div>
</template>
<script>
export default {
  data() {
    return {
      state: "",
      code: ""
    };
  },
  created() {
    this.state = this.getQueryString("state");
    setTimeout(() => {
      this.handle();
    }, 300);
  },
  methods: {
    handle() {
      var url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdfeb79e40c392970&redirect_uri=http%3A%2F%2Fwww.chinabdc.cn%2Fdetail&response_type=code&state=${this.state}&scope=snsapi_base&connect_redirect=1#wechat_redirect`;
      window.location.href = url;
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