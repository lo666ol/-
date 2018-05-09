<template>
	<div>
		<!--个人中心-->
		<div class="gerenzhongxin">
			<div class="zuojiantou">
				<!-- <a href=""><img src="../../static/img//jiantou.png" /></a> -->
			</div>
			<div class="geren">个人中心</div>
			<div class="dengluzhuce" v-show="boolean">
				<router-link to="/page6">登录</router-link>

				&nbsp;&nbsp;丨&nbsp;&nbsp;
				<router-link to="/page6">注册</router-link>
				<!-- <a href="/page7">注册</a> -->
			</div>
			<div class="use" v-show="boolean1">{{userName1}}</div>
		</div>
		<!--我的订单-->
		<div class="wodedingdan">
			<!--订单-->
			<div class="dd">
				<div class="top">
					<p>我的订单</p>
					<div class="xiangzuo"></div>
				</div>
				<div class="bottom">
					<ul>
						<li>
							<div class="tu">
								<img src="../../static/img/dingdan1.png" />
							</div>
							<p>待付款</p>
						</li>
						<li>
							<div class="tu">
								<img src="../../static/img/dingdan2.png" />
							</div>
							<p>待发货</p>
						</li>
						<li>
							<div class="tu">
								<img src="../../static/img/dingdan3.png" />
							</div>
							<p>待收货</p>
						</li>
						<li>
							<div class="tu">
								<img src="../../static/img/dingdan4.png" />
							</div>
							<p>待评价</p>
						</li>
						<li>
							<div class="tu">
								<img src="../../static/img/dingdan5.png" />
							</div>
							<p>退款/售后</p>
						</li>
					</ul>
				</div>
			</div>
			<!--购物车-->
			<div class="gwc">
				<div class="top">
					<p>购物车</p>
					<div class="xiangzuo"></div>
				</div>
				<div class="top">
					<p>优惠券</p>
					<div class="xiangzuo"></div>
				</div>
			</div>
			<!--收藏夹-->
			<div class="scj">
				<div class="top">
					<p>收藏夹</p>
					<div class="xiangzuo"></div>
				</div>
				<div class="top">
					<p>足迹</p>
					<div class="xiangzuo"></div>
				</div>
			</div>
			<!--帮助与客服-->
			<div class="bz">
				<div class="top">
					<p>帮助与客服</p>
					<div class="xiangzuo"></div>
				</div>
			</div>
		</div>
		<navBotm></navBotm>
	</div>
</template>

<script>
import navBotm from "../components/navBotm";
import "../css/common.css";
import "../css/page5.css";
import axios from "axios";
export default {
    components: { navBotm },
    data() {
        return {
            userName: "",
            boolean: true,
			        userName1: "",
            boolean1: false

        };
    },
    methods: {
		
        getUrlParam() {
            // var name,value;
            // var arr=str.split("&"); //各个参数放到数组里
            // for(var i=0;i < arr.length;i++){
            //     num=arr[i].indexOf("=");
            //     if(num>0){
            //         name=arr[i].substring(0,num);
            //         value=arr[i].substr(num+1);
            //         this[name]=value;
            //     }
            // }
        },
        getInfo() {
            var str = location.href; //取得整个地址栏
            // console.log(str)
            var num = str.indexOf("?");

            str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
            // console.log(str);

            if (str == "from=1") {
                this.boolean = false;
                this.boolean1 = true;
                axios({
                    url: "/api/Handler/AdminLoginHandler?action=returninfo",
                    method: "get"
                }).then(result => {
                    // console.log(result.data.data.userName);
                    this.userName = result.data.data.userName;
					var a = this.userName;
					  console.log(a)
			 sessionStorage.setItem("pass",a);
			 if(sessionStorage.getItem("pass")!=null&&sessionStorage.getItem("pass")!=""){
			  this.userName1=sessionStorage.getItem("pass",a)}
                });
            } else if (str == "from=3") {
                this.boolean = false;
                this.boolean1 = true;
                this.userName = "用户加密";
				var a = this.userName;
				sessionStorage.setItem("pass",a);
				// sessionStorage.getItem("pass",a);
				// console.log(sessionStorage.getItem("pass",a))
     	 if(sessionStorage.getItem("pass")!=null&&sessionStorage.getItem("pass")!=""){
			  this.userName1=sessionStorage.getItem("pass",a)}
            }
// console.log(a)
        }
    },
    mounted() {
// if(sessionStorage.getItem("pass")!=null&&sessionStorage.getItem("pass")!=""){
 this.getInfo();

// }// }else{
// alert(0)

    }
};
</script>

<style>
.use {
    width: 16%;
    height: 55px;
    border-radius: 50%;
    font-size: 14px;
    text-align: center;
    position: absolute;
    top: 35%;
    left: 143px;
    line-height: 56px;
    background: none;
    z-index: 4;
    color: black;
    background: yellow;
}
</style>
