<template>
  <div>
    <div class="ban">
      <section>
        <div class="titl">
          <span class="now">推荐</span>
          <span>服装</span>
          <span>美食</span>
          <span>居家</span>
          <span>母音</span>
          <span>鞋包</span>
          <span>美妆</span>

        </div>
        <mt-swipe class="swiper1" :auto="0" :continuous="true" :showIndicators="true">
          <mt-swipe-item>
            <div class="cont4">
              <ul>
                <li v-for="item in msg1">
              
                
                  <a :href="item.detail_url">
                  <img :src="item.image" alt="">

                  <p class="tit">{{item.title}}</p>
                  <p class="cont">{{item.title_long}}</p>
                </a> 
             
                </li>

              </ul>
              <div class="jiazai">加载完啦!</div>
            </div>
          </mt-swipe-item>

          <mt-swipe-item>
            <div class="cont4">
              <ul>
                <li v-for="item in msg2">
                   <a :href="item.detail_url"> 
                  <img :src="item.image" alt="">

                  <p class="tit">{{item.title}}</p>
                  <p class="cont">{{item.title_long}}</p>
                </a> 
                </li>

              </ul>
              <div class="jiazai">加载完啦!</div>
            </div>

          </mt-swipe-item>
          <mt-swipe-item>
            <div class="cont4">
              <ul>
                <li v-for="item in msg3">
                 <a :href="item.detail_url"> 
                  <img :src="item.image" alt="">

                  <p class="tit">{{item.title}}</p>
                  <p class="cont">{{item.title_long}}</p>
                </a> 
                </li>

              </ul>
              <div class="jiazai">加载完啦!</div>
            </div>

          </mt-swipe-item>
          <mt-swipe-item>
            <div class="cont4">
              <ul>
                <li v-for="item in msg4">
                  <a :href="item.detail_url">
                  <img :src="item.image" alt="">

                  <p class="tit">{{item.title}}</p>
                  <p class="cont">{{item.title_long}}</p>
                </a> 
                </li>

              </ul>
              <div class="jiazai">加载完啦!</div>
            </div>

          </mt-swipe-item>
          <mt-swipe-item>
            <div class="cont4">
              <ul>
                <li v-for="item in msg1">
                     <a :href="item.detail_url">
                  <img :src="item.image" alt="">

                  <p class="tit">{{item.title}}</p>
                  <p class="cont">{{item.title_long}}</p>
                </a> 
                </li>

              </ul>
              <div class="jiazai">加载完啦!</div>
            </div>

          </mt-swipe-item>
          <mt-swipe-item>
            <div class="cont4">
              <ul>
                <li v-for="item in msg2">
                    <a :href="item.detail_url">
                  <img :src="item.image" alt="">

                  <p class="tit">{{item.title}}</p>
                  <p class="cont">{{item.title_long}}</p>
                </a> 
                </li>

              </ul>
              <div class="jiazai">加载完啦!</div>
            </div>

          </mt-swipe-item>
          <mt-swipe-item>
            <div class="cont4">
              <ul>
                <li v-for="item in msg3">
                     <a :href="item.detail_url"> 
                  <img :src="item.image" alt="">

                  <p class="tit">{{item.title}}</p>
                  <p class="cont">{{item.title_long}}</p>
                </a> 
                </li>

              </ul>
              <div class="jiazai">加载完啦!</div>
            </div>

          </mt-swipe-item>
        </mt-swipe>

      </section>
    </div>
    <nav1></nav1>
  </div>
</template>

<script>
import "../css/pin.css";
import nav1 from "../components/nav";
import Vue from "vue";
import axios from "axios";
import "../css/helloword.css";
export default {
    components: { nav1 },
    data() {
        return {
            msg1: [],
            msg2: [],
            msg3: {},
            msg4: {},
            arr:[1,2,3,4,5,6]
        };
    },
    methods: {
        fo() {
            axios
                .get(
                    "https://www.easy-mock.com/mock/5ae332a6e671403cb1da47c4/example/r1#!method=get"
                )
                .then(res => {
                    this.msg1 = res.data.data.list;
                    console.log(this.msg1);
                     console.log(this.msg1[14].title);
                })
                // .catch(error => console.log(error));
            axios
                .get(
                    "https://www.easy-mock.com/mock/5ae332a6e671403cb1da47c4/example/r2#!method=get"
                )
                .then(res => {
                    this.msg2 = res.data.data.list;
                })
                // .catch(error => console.log(error));
            axios
                .get(
                    "https://www.easy-mock.com/mock/5ae332a6e671403cb1da47c4/example/r3#!method=get"
                )
                .then(res => {
                    this.msg3 = res.data.data.list;
                     console.log(this.msg3);
                })
                // .catch(error => console.log(error));
            axios
                .get(
                    "https://www.easy-mock.com/mock/5ae332a6e671403cb1da47c4/example/r4#!method=get"
                )
                .then(res => {
                    this.msg4 = res.data.data.list;
                })
                // .catch(error => console.log(error));
        }
    },
    mounted() {
        this.fo();
    }
};
</script>
 
<style>
.ban {
    position: relative;
    width: 100%;
    background: red;
    height: 100%;
}
.mint-swipe {
    overflow: hidden;
    position: relative;
    height: 9999px;

    top: 40px;
}
.ban section {
    position: absolute;
    top: 0px;
    width: 100%;
    /* background: pink; */
    height: 490px;
    /* overflow:hidden; */
}
.titl {
    z-index: 9999;
    width: 100%;
    height: 38px;
    line-height: 48px;
    background: white;
    font-size: 17px;
    position: fixed;
    text-align: center;
}
.titl span {
    width: 46px;
    height: 40px;
    display: inline-block;
}
.ban .mint-swipe-indicators {
    position: absolute;
    top: -32px;
    width: 100%;
    background: white;
    height: 37px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
.ban .mint-swipe-indicator {
    width: 45px;
    height: 34px;
    display: inline-block;
    /* border-radius: 100%; */
    background: #000;
    margin: 0 3px;
    border-radius: 0;
    background: #000;
    opacity: 1;
}
.ban .mint-swipe-indicators {
    position: fixed;
    top: 5px;
    z-index: 99;
    width: 100%;
    background: white;
    height: 37px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
}
.ban .mint-swipe-indicator.is-active {
    background: red;
}
.now {
    color: rgb(159, 161, 21);
}
</style>
