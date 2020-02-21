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
  },
  mounted() {
    this.state = this.getQueryString("state");
  },
  methods: {
    handle() {
      var url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdfeb79e40c392970&redirect_uri=http%3A%2F%2Fwww.chinabdc.cn&response_type=code&state=${this.state}&scope=snsapi_base&connect_redirect=1#wechat_redirect`;
      window.location.href = url;
    },
    UrlSearch() {
      var name, value;
      var str = location.href; //取得整个地址栏
      console.log(str);
      var num = str.indexOf("?");
      str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
      var arr = str.split("&"); //各个参数放到数组里
      console.log(arr);
      for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
          name = arr[i].substring(0, num);
          value = arr[i].substr(num + 1);
          console.log(name);
          console.log(value);
          if (name == "state") {
            this.state = value;
          }
          if (name == "code") {
            this.$router.push({
              path: "/index",
              query: {
                state: this.state,
                code: this.code
              }
            });
          } else {
            this.handle();
          }
        }
      }
    },
    // 获取地址栏参数
    getQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      console.log(r);
      return null;
    }
  }
};
</script>
<style lang="less">
</style>