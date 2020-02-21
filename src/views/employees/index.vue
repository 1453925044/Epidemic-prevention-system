<template>
  <div class="EmployeeInfo">
    <div class="title">
      <span>人员通行证信息核对</span>
    </div>
    <div class="intoCount">
      <span>该用户累计入园次数</span>
      <span>
        <span class="count" :style="{color:countColor}">0</span>次
      </span>
    </div>
    <div class="completion-info">
      <span>1. 人员身份</span>
      <van-radio-group class="radio" disabled v-model="radio">
        <van-radio class="radioBox" name="1">工作人员</van-radio>
        <van-radio class="radioBox" name="2">办事人员</van-radio>
        <van-radio class="radioBox" name="3">来访人员</van-radio>
      </van-radio-group>
      <div class="inputBox">
        <div v-for="(item,index) in inputInfo" :key="index">
          <span>{{item.name}}</span>
          <div class="input">
            <span class="icon" v-html="item.icon" style="font-size:20px;">{{item.icon}}</span>
            <van-field disabled style="background:#f5f5f5;" :placeholder="item.value" />
          </div>
        </div>
      </div>
     <div>
        <span>7. 是否发热</span>
        <van-radio-group class="radio" disabled v-model="radio2">
            <van-radio class="radioBox" name="1">是</van-radio>
            <van-radio class="radioBox" name="2">否</van-radio>
        </van-radio-group>
     </div>
     <div>
        <span class="radioTitle">8、1月1日后是否去过（湖北）或途径</span>
        <van-radio-group class="radio" disabled v-model="radio">
            <van-radio class="radioBox" name="1">是</van-radio>
            <van-radio class="radioBox" name="2">否</van-radio>
        </van-radio-group>
     </div>
      <div>
        <span>9、1月1日后是否与疫区人员接触史</span>
        <van-radio-group class="radio" disabled v-model="radio">
            <van-radio class="radioBox" name="1">是</van-radio>
            <van-radio class="radioBox" name="2">否</van-radio>
        </van-radio-group>
      </div>
      <div>
        <span>10、是否有疑似病症</span>
        <van-radio-group class="radio" disabled v-model="radio">
            <van-radio class="radioBox" name="1">呼吸困难</van-radio>
            <van-radio class="radioBox" name="2">发热</van-radio>
            <van-radio class="radioBox" name="3">乏力</van-radio>
            <van-radio class="radioBox" name="4">喉咙疼痛</van-radio>
            <van-radio class="radioBox" name="5">干咳</van-radio>
            <van-radio class="radioBox" name="6">腹泻</van-radio>
            <van-radio class="radioBox" name="7">流鼻涕</van-radio>
            <van-radio class="radioBox" name="8">其他</van-radio>
            <van-radio class="radioBox" name="9">无</van-radio>
        </van-radio-group>
      </div>
      <div class="inputBox">
        <div>
          <span>11、体温</span>
          <div class="input" style="border:1px solid #cccccc;border-radius:8px;background:white">
            <span class="icon" v-html="temperature" style="font-size:20px;">{{temperature}}</span>
            <van-field required type="number" placeholder="请输入当前体温" />
          </div>
        </div>
      </div>
    </div>
    <div class="btnBox">
      <van-button class="btn" plain type="info" size="large" @click="show = true">禁止进入</van-button>
      <van-button class="btn" type="info" size="large" @click="passInto">允许进入</van-button>
    </div>
    <van-overlay :show="show">
      <div class="wrapper" @click.stop="show = false">
        <div class="block" @click.stop>
          <div class="title">
            <span>填写禁止进入原因</span>
            <span>{{length}}/100</span>
          </div>
          <div class="textBox">
            <textarea maxlength="100" v-model="textValue" @input="onInput" placeholder="请输入..."></textarea>
          </div>
          <div class="btnBox">
            <van-button class="btn" plain type="info" style="color:#fff;background: rgba(0,0,0,0.3);border:1px solid #fff" size="large"  @click="cancel">取消</van-button>
            <van-button class="btn" type="info" size="large" @click="submitSuccess">确定</van-button>
          </div>
        </div>
      </div>
    </van-overlay>
    <div class="ToastBox" v-if="toastShow">
      <div class="dialog">
        <van-icon
          class="passicon"
          :style="{color:toastInfo.color}"
          :name="toastInfo.icon"
          size="30px"
        />
        <span class="text">{{toastInfo.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      radio: "1",
      radio2: "2",
      text: "",
      length: 0,
      show: false,
      toastShow: false,
      textValue: "",
      //countColor: "#ff5959",
      countColor: "#45ec55",
      temperature: "&#xe600;",
      toastInfo: {
        icon: "checked",
        text: "以允许进入",
        color: "#6bff79"
      },
      iconName: "dddd",
      inputInfo: [
        {
          name: "2、姓名",
          value: "陈红",
          icon: "&#xe605;"
        },
        {
          name: "2、身份证",
          value: "510987199003148977",
          icon: "&#xe6d7;"
        },
        {
          name: "3、国家或地区",
          value: "中国",
          icon: "&#xe641;"
        },
        {
          name: "4、籍贯",
          value: "四川成都",
          icon: "&#xe61f;"
        },
        {
          name: "5、现住址",
          value: "成都市高新区天府三街",
          icon: "&#xe61f;"
        },
        {
          name: "6. 车牌号",
          value: "暂无车牌",
          icon: "&#xe625;"
        }
      ]
    };
  },
  methods: {
    cancel() {
      this.show = false;
      this.textValue = "";
    },
    onInput(e) {
      this.length = this.textValue.length;
    },
    passInto() {
      this.dialog("checked", "已允许进入", "#6bff79");
    },
    submitSuccess() {
      this.dialog("clear", "提交成功", "#ff6b6b");
    },
    //提示
    dialog(icon, text, color) {
      this.toastInfo.text = text;
      this.toastInfo.color = color;
      this.toastInfo.icon = icon;
      this.toastShow = true;
      setTimeout(() => {
        this.toastShow = false;
      }, 1000);
    }
  }
};
</script>

<style lang='less' scoped>
.EmployeeInfo {
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .intoCount {
    width: 100%;
    height: 48px;
    margin-top: 16px;
    border-radius: 6px;
    font-size: 16px;
    padding: 0px 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.19);
    border-radius: 8px;
    .count {
      font-size: 22px;
      margin-right: 10px;
    }
  }
  .ToastBox {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 100;
    .dialog {
      width: 151px;
      height: 67px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 6px;
      margin: 270px auto;
      color: white;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0px 10px;
      box-sizing: border-box;
      .passicon {
        color: #6bff79;
      }
      .text {
        font-size: 17px;
      }
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .block {
      width: 100%;
      height: 322px;
      margin: 0 12px;
      border-radius: 6px;
      padding: 25px;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0.2);
      .title {
        color: #fff;
        font-size: 14px;
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      .textBox {
        width: 100%;
        height: 171px;
        background: #fff;
        border-radius: 6px;
        padding: 10px;
        box-sizing: border-box;
        margin-top: 10px;
        textarea {
          width: 100%;
          height: 100%;
          font-size: 14px;
          border: none;
          color: #ccc;
        }
      }
    }
  }
  .title {
    font-size: 20px;
    color: #409eff;
    font-weight: 600;
  }
  .completion-info {
    width: 100%;
    margin-top: 30px;
    font-size: 14px;
    color: #38363e;
    .radio {
      margin-top: 15px;
      margin-left: 14px;
      display: flex;
      flex-wrap: wrap;
      .radioBox {
        width: 33%;
        margin-bottom: 14px;
      }
    }
    .inputBox {
      margin-top: 14px;
      .input {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        background: #f5f5f5;
        margin: 10px 0;
        padding-left: 10px;
        box-sizing: border-box;
      }
    }
  }
  .btnBox {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .btn {
      width: 48%;
    }
  }
}
</style>