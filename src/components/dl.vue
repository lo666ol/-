<template>
  <div>
    <!--开始-->
    <div class="kaishi">
      <div class="fanhui">
        <router-link to="/page5"><img src="../../static/img/jiantou.png" /></router-link>
      </div>
    </div>
    <!--登录/注册     选项卡-->
    <div class="xuanxiang">
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="短信验证登录" />
        <mu-tab value="tab2" title="密码验证登录" />
      </mu-tabs>
      <div class="content" v-if="activeTab === 'tab1'">
        <section>
          <div class="tele">
            <mu-icon value="account_circle">
            </mu-icon> <input type="text" ref="dataInfo" name="" id="phone" placeholder="手机号">
          </div>
          <div class="password">
            <mu-icon value="search">
            </mu-icon>
            <input type="text" ref="lili" name="" id="" :value="innerCode">
            <div class="yzm" @click="yzm">获取验证码</div>
          </div>
        </section>
        <div class="anniu anniu_1" id="input" @click="login1">登录</div>
        <p class="center">收不到短信使用
          <a href="">语音验证码试试</a>
        </p>
        <div class="center">其他账号直接登陆</div>
        <section class="dlfs">
          <mu-icon-button icon="all_inclusive" type="button" target="_top" tooltipPosition="middle-center" :touch="true">
          </mu-icon-button>
        </section>

      </div>
      <div class="content" v-if="activeTab === 'tab2'">
        <section>
          <div class="tele">
            <mu-icon value="account_circle">
            </mu-icon> <input type="text" ref="userName" name="" id="" placeholder="手机号/用户名">
          </div>
          <div class="password">
            <mu-icon value="enhanced_encryption">
            </mu-icon>
            <input type="text" name="" ref="password" id="" placeholder="登录密码">
          </div>
        </section>

        <div class="anniu anniu_1" id="input" @click="login">登录</div>
        <div class="center">其他账号直接登陆</div>
        <section class="dlfs">
          <mu-icon-button icon="all_inclusive" type="button" target="_top" tooltipPosition="middle-center" :touch="true">
          </mu-icon-button>
        </section>
      </div>

    </div>
    <!-- 模态框Mask -->
    <div class="Mask" v-if="hide">
      <div class="code" @click="changeCode">{{codeStr}}</div>
      <div class="ok" @click="close">确定</div>
      <div class="no" @click="cancel">取消</div>
    </div>
      <navBotm></navBotm>
  </div>
</template>

<script>
import axios from "axios";
import "../css/common.css";
import "../css/dlzc.css";
import navBotm from "../components/navBotm";
export default {
        components: { navBotm },
    data() {
        return {
            activeTab: "tab1",
            hide: false,
            codeStr: "",
            innerCode: "动态验证码",
            ress: ""
        };
    },
    methods: {
        handleTabChange(val) {
            this.activeTab = val;
        },
        yzm() {
               var ress = this.$refs.dataInfo.value;
            var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            if (!myreg.test(ress)) {
                alert("请输入有效的手机号码！");
                return false;
            }

            this.hide = true;
            this.getyzm();
            
        },
        getyzm() {
            this.codeStr = "";
            var codeLength = 4; //验证码的长度
            var checkCode = document.getElementById("show_yzm");
            var selectChar = new Array(
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z"
            ); //所有候选组成验证码的字符，当然也可以用中文的
            for (var i = 0; i < codeLength; i++) {
                var charIndex = Math.floor(Math.random() * 52); //Math.random得到0-36中随机的一个数,floor取整数部分
                this.codeStr += selectChar[charIndex];
            }
            console.log(this.codeStr);
        },

        login1() {
          if(this.$refs.lili.value==this.codeStr){
  this.$router.push("/page5?from=3");
          }else{
            alert('验证码输入错误')
          }
       
        },
        cancel() {
            this.hide = false;
        },
        close() {
            this.hide = false;
            this.innerCode = this.codeStr;
        },
        changeCode() {
            this.getyzm();
        },
        login() {
            axios({
                url: "/api/Handler/AdminRegHandler?action=login",
                method: "post",
                data: {
                    userName: this.$refs.userName.value,
                    password: this.$refs.password.value
                }
            }).then(res => {
                if (res.data.success == "登录成功") {
               
                    this.$router.push("/page5?from=1");
                
                } else {
                    alert("没有此用户");
                }
            });
        },
        change() {}
    },

    mounted() {}
};
</script>

<style>
.Mask {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}
.Mask .code {
    width: 60%;
    height: 80px;
    background: white;
    margin: 300px auto 0;
    font-size: 36px;
    color: blue;
    line-height: 80px;
    text-align: center;
    letter-spacing: 2px;
}
.Mask .ok,
.no {
    width: 100px;
    height: 50px;
    float: left;
    line-height: 50px;
    text-align: center;
    background: green;
    margin: 40px;
    color: white;
}
.Mask .no {
    background: brown;
}
.center {
    text-align: center;
}
</style>
