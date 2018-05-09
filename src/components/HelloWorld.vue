<template>
  <div class="hello">
    <div class="nav">
      <a class="logo" href=""><img src="https://z11.tuanimg.com/imagev2/wxyy/140x60.ed03b607cfa0b9eef23235a039d21f75.png" alt=""></a>
      <div class="nav_serch">
        <section class="ser">
          <mu-icon value="search" :size="25" color="#bdbdbd">
          </mu-icon>
        </section><input type="text" placeholder="超值特卖会买3免1"></div>
      <a class="btn_serch" href="#"><img src="https://status.tuanimg.com/statics/mz/index/img/category-icon.png" alt=""></a>
    </div>
    <div class="nav2">
      <div class="noe">推荐</div>
      <ul class='tuijian_wrap'>
        <li class='tmaihi'>419特卖会</li>
        <li>家电</li>
        <li>女装</li>
        <li>鞋包</li>
        <li>居家</li>
        <li>母婴</li>
        <li class='meishi'>美食</li>
        <li>内衣</li>
        <li>配饰</li>
        <li>数码</li>
        <li>美妆</li>
        <li>甲方</li>
        <li>中老年</li>
        <li class='meishi'>运动</li>
        <li>美妆</li>
        <li>女装</li>
        <li>鞋包</li>
        <li>网球</li>
        <li>美妆</li>
        <li>女装</li>
        <li class='meishi'>鞋包</li>
        <li>母婴</li>
        <li>电影</li>
        <li>配饰</li>

      </ul>
    </div>
    <!-- banner 图 -->
    <section>
      <mt-swipe class="swiper1" :continuous="true" :showIndicators="true">
        <mt-swipe-item>
          <img src="../../static/img/conta (3).jpg" />
        </mt-swipe-item>

        <mt-swipe-item>
          <img src="../../static/img/conta (4).jpg" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../static/img/conta (5).jpg" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../static/img/conta (6).jpg" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../static/img/conta (7).jpg" />
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <!-- 买三免一 -->
    <ul class="cont1">
      <li><img src="../../static/img/conta (1).png" alt="买"></li>
      <li><img src="../../static/img/conta (3).png" alt="三"></li>
      <li><img src="../../static/img/conta (4).png" alt="送"></li>
      <li><img src="../../static/img/conta (5).png" alt="一"></li>
    </ul>
    <!-- go -->
    <div class="cont2">
      <img src="../../static/img/go2_1.gif" alt="">
    </div>
    <!-- 限时秒杀 -->
    <div class="cont3">
      <div class="cont3_top">
        <img src="../../static/img/b (3).png" alt="">
        <img src="../../static/img/b (4).png" alt="">
      </div>
      <div class="cont3_bot">
        <img src="../../static/img/b (1).png" alt="">
        <img class="center" src="../../static/img/b (2).png" alt="">
        <img src="../../static/img/b (5).png" alt="">
      </div>
    </div>
    <!-- 加载数据 -->
     <!-- <button @click='sw'>DJU </button>{{msg}} -->
   
    <div class="cont4" @click="changeVeri">
    <ul>
      <li v-for="item,index in mssg" >
        <!-- <router-link to="/page3"> -->
        <a :href="item.goods_jump_url">
           <img :src="item.pic_url" alt="">
          
           <p class="tit">{{item.title}}</p>
            <p class="cont">{{item.title_long}}</p>
            <!-- </router-link> --></a>
         
     
      </li>
  
    </ul>
        <div class="jiazai">加载完啦!</div>
    </div> 
    <div class="bottom"></div>
   <navBotm></navBotm>       
    <div class="liangge" id="liangge">
      <div class="fanhui" id="fanhui">返回顶部</div>
      <div class="jiazaip" id="jiazai1">点击加载</div>
    </div>
  </div>
</template>
<script type="text/javascript" src="../../static/a.js"></script>
<script>

import navBotm from '../components/navBotm'

import Vue from 'vue'
import axios from 'axios'
import "../css/common.css";
import "../css/helloword.css";
// Vue.use(jiaohu)
export default {
    name: "HelloWorld",
    data() {
        return {
          msg: '', 
          s:'s',
          mssg:{}          
          };
    },
    components:{navBotm},
       methods: {
              changeVeri() {
            axios.get(
                    'https://www.easy-mock.com/mock/5ad9daff9f06a408237644f9/zhe800/m#!method=get'
                )
                .then(res => {
                    // console.log(res.data);
                    this.mssg=res.data.data.goods;
                    // console.log(this.mssg)
                    // this.drawpic(res.data.data)
                })
                .catch(error => console.log(error));
          
        },
           
        },  mounted() {
      
         this.changeVeri()
                // this.$http.jsonp("https://pina.m.zhe800.com/nnc/list/banner.json?type=2&show_user=1").then(res=>{
                //      console.log(res)
                //      this.msg = res.data.s
                // }
                }
      
  
}

</script>
<style scoped>

</style>
