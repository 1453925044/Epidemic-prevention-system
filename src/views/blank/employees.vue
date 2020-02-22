<template>
    <div></div>
</template>
<script>
import { isLogin } from "@/api/isLogin/isLogin.js";
export default {
  data() {
    return {
      code: "",
      userId: "",
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
      console.log(str);
      var num = str.indexOf("?");
      str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
      var arr = str.split("&"); //各个参数放到数组里
      for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
          name = arr[i].substring(0, num);
          value = arr[i].substr(num + 1);
          newArr.push(value);
          console.log(newArr);
        }
      }
      this.code = newArr[0];
      this.userId = newArr[1];
      console.log(this.code);
      console.log(this.userId);
      this.getParse();
    },
    getParse() {
      isLogin({
        code: this.code
      })
        .then(res => {
          if (res.data.person.can_verify == 1) {
            alert("欢迎审核工作人员");
            this.$router.push({
              path: "/employeeInfo",
              query: {
                userId: this.userId,
                prjId: res.data.person.id
              }
            });
          } else {
            this.$toast("抱歉，您没有审核权限");
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