<template>
    <div></div>
</template>
<script>
import { isLogin } from "@/api/isLogin/isLogin.js";
export default {
  data() {
    return {
      state: "",
      code: "",
      openid: ""
    };
  },
  mounted() {
    this.UrlSearch();
  },
  methods: {
    // 获取地址栏微信返回的code参数和扫码地区标识state参数
    UrlSearch() {
      var name, value;
      var newArr = [];
      var str = location.href; //取得整个地址栏
      // console.log(str);
      var num = str.indexOf("?");
      str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
      var arr = str.split("&"); //各个参数放到数组里
      for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
          name = arr[i].substring(0, num);
          value = arr[i].substr(num + 1);
          newArr.push(value);
        }
      }
      this.code = newArr[0];
      this.state = newArr[1];
      // console.log(this.code);
      // console.log(this.state);
      this.getParse();
    },
    getParse() {
      isLogin({
        code: this.code,
        orgid: this.state
      })
        .then(res => {
          if (res.errCode == "1000") {
            this.$toast(res.message);
            this.$router.push({
              path: "/index",
              query: {
                state: this.state,
                orgname:res.data.orgname,
                openid: res.data.openid
              }
            });
          }
          else {
            this.$router.push({
              path: "/fangyi",
              query: {
                code: this.code,
                state: this.state,
                data: JSON.stringify(res.data.person)
              }
            });
          }
        })
        .catch(err => {
          this.$toast(err.message);
        });
    }
  }
};
</script>
<style lang="less">
</style>