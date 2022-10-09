<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>
        注册新用户
        <span class="go"
          >我有账号，去 <a href="login.html" target="_blank">登陆</a>
        </span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <input type="text" placeholder="请输入你的手机号" v-model="phone" />
        <span class="error-msg">{{ error.phone }}</span>
      </div>
      <div class="content">
        <label>验证码:</label>
        <input type="text" placeholder="请输入验证码" v-model="code" />
        <img
          ref="code"
          src="https://s4.ax1x.com/2022/02/09/HGLTU0.png"
          alt="code"
          @click="getCode(phone)"
        />
        <span class="error-msg">{{ error.code }} </span>
      </div>
      <div class="content">
        <label>登录密码:</label>
        <input
          type="text"
          placeholder="请输入你的登录密码"
          v-model="password"
        />
        <span class="error-msg">{{ error.password }}</span>
      </div>
      <div class="content">
        <label>确认密码:</label>
        <input type="text" placeholder="请输入确认密码" v-model="password1" />
        <span class="error-msg">{{ error.password1 }}</span>
      </div>
      <div class="controls">
        <input
          name="m1"
          type="checkbox"
          :checked="isChecked"
          v-model="isChecked"
        />
        <span>同意协议并注册《尚品汇用户协议》</span>
        <span class="error-msg" v-show="!isChecked">协议必须同意</span>
      </div>
      <div class="btn">
        <button @click="Register()">完成注册</button>
      </div>
    </div>

    <!-- 底部 -->
    <div class="copyright">
      <ul>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>联系客服</li>
        <li>商家入驻</li>
        <li>营销中心</li>
        <li>手机尚品汇</li>
        <li>销售联盟</li>
        <li>尚品汇社区</li>
      </ul>
      <div class="address">地址：北京市昌平区宏福科技园综合楼6层</div>
      <div class="beian">京ICP备19006430号</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      phone: "",
      code: "",
      password: "",
      password1: "",
      isChecked: true,
      message: "",
    };
  },
  methods: {
    async getCode(phone) {
      try {
        if (phone.length == 11) {
          await this.$store.dispatch("getCode", phone);
          this.code = this.$store.state.user.code;
        } else {
          this.code = "";
        }
      } catch (error) {
        alert(error.message);
      }
    },
    async Register() {
      let { phone, code, password } = this;
      try {
        await this.$store.dispatch("Register", { phone, code, password });
        await this.$router.push({path:'/login',query:{phone:this.phone}})
      } catch (error) {
        this.message = error.message;
        console.log(error.message);
      }
    },
  },
  computed: {
    error() {
      let error = {};
      let { phone, code, password, password1, message } = this;
      if (phone.length != 11 && phone.length != 0) {
        error.phone = "手机号格式无效";
      }
      if (password.length != 0 && password.length < 8) {
        error.password = "密码格式无效";
      }
      if (password1 != password && password1.length != 0) {
        error.password1 = "密码不一致";
      }
      if (message != "") {
        if (message == "223") error.phone = "该手机号已注册";
        else if (message == "206") error.code = "验证码错误";
      }
      return error;
    },
  },
};
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        position: relative;
        top: 8px;
        left: 10px;
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }

  .copyright {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 24px;

    ul {
      li {
        display: inline-block;
        border-right: 1px solid #e4e4e4;
        padding: 0 20px;
        margin: 15px 0;
      }
    }
  }
}
</style>
