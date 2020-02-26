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
      openid: "",
      orgid: ""
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
      this.orgid = newArr[0];
      this.code = newArr[1];
      this.userId = newArr[2];
      // console.log(this.orgid);
      // console.log(this.code);
      // console.log(this.userId);
      this.getParse();
    },
    getParse() {
      isLogin({
        code: this.code,
        orgid: this.orgid
      })
        .then(res => {
          if (res.data.person.can_verify == 1) {
            this.$router.push({
              path: "/employeeInfo",
              query: {
                userId: this.userId,
                prjId: res.data.person.id
              }
            });
          } else {
            this.$dialog.alert({
              message: "您当前没有审核权限,如是审核人员,请联系后台人员添加权限"
            });
          }
        })
        .catch(err => {
          this.$toast({
            message: "抱歉，您没有审核权限,请先注册",
            onClose: () => {
              window.location.href =
                "http://www.chinabdc.cn/?state=" + this.orgid;
            }
          });
        });
    }
  }
};
</script>
<style lang="less">
</style>