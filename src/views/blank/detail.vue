import { isLogin } from '../../api/isLogin/isLogin';
<template>
    <div></div>
</template>
<script>
import { isLogin } from "@/api/isLogin/isLogin.js";
export default {
  data() {
    return {
      state: "",
      code: ""
    };
  },
  mounted() {
    this.UrlSearch();
  },
  methods: {
    // 获取地址栏微信返回的code参数和扫码地区标识state参数
    UrlSearch() {
      var name, value;
      var str = location.href; //取得整个地址栏
      var num = str.indexOf("?");
      str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
      var arr = str.split("&"); //各个参数放到数组里
      for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
          name = arr[i].substring(0, num);
          value = arr[i].substr(num + 1);
          if (name == "state") {
            this.state = value;
          } else if (name == "code") {
            this.code = value;
          }
        }
      }
      return this.getParse();
      //   this.$router.push({
      //     path: "/index",
      //     query: {
      //       state: this.state,
      //       code: this.code
      //     }
      //   });
    },
    getParse() {
      isLogin({
        code: this.code
      })
        .then(res => {
          console.log(res);
          if (res.success) {
            this.$toast(res.message);
          } else {
            this.$toast(res.message);
          }
        })
        .catch(err => {
          this.$toast(err.message);
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less">
</style>