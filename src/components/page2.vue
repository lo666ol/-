<template>
  <div>

    <!--淘特价-->
    <div class="ttj">淘特价</div>
    <!--导航条-->
    <div class="daohang">
      <div class="jx">精选</div>

      <ul class=" tuijian_wrap">
        <li>服装</li>
        <li>居家</li>
        <li>鞋包</li>
        <li>儿童</li>
        <li class="nono">美食</li>

        <li>家电</li>
        <li>女装</li>
        <li>鞋包</li>
        <li>居家</li>
        <li>母婴</li>

        <li>内衣</li>
        <li>配饰</li>
        <li class="nono">数码</li>
        <li>美妆</li>
        <li>甲方</li>
        <li>中年</li>

        <li>美妆</li>
        <li>女装</li>
        <li class="nono">鞋包</li>
        <li>网球</li>
        <li>美妆</li>
        <li>女装</li>

        <li>母婴</li>
        <li>电影</li>
        <li class="nono">配饰</li>

      </ul>

    </div>
    <!-- banner 图 -->
    <section>
      <mt-swipe class="swiper1" :continuous="true" :showIndicators="true">
        <mt-swipe-item>
          <img src="../../static/img/p2banner (1).jpg" />
        </mt-swipe-item>

        <mt-swipe-item>
          <img src="../../static/img/p2banner (2).jpg" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../static/img/p2banner (3).jpg" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../static/img/p2banner (4).jpg" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../static/img/p2banner (5).jpg" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../static/img/p2banner (6).jpg" />
        </mt-swipe-item>
      </mt-swipe>
    </section>
    <!--四个小图-->
    <div class="sigetu">
      <ul>
        <li>
          <div class="tu"><img src="../../static/img/nav (9).png" /></div>
          <p>今日必抢</p>
        </li>
        <li>
          <div class="tu"><img src="../../static/img/nav (2).png" /></div>
          <p>9块9</p>
        </li>
        <li>
          <div class="tu"><img src="../../static/img/nav (1).png" /></div>
          <p>神卷专区</p>
        </li>
        <li>
          <div class="tu"><img src="../../static/img/nav (8).png" /></div>
          <p>淘宝订单</p>
        </li>
      </ul>
    </div>
    <!--跨年狂欢日-->
    <div class="knkhr">·每天早上9点更新·淘宝天猫精选·</div>
    <div class="cont4 boss">
      <ul>

        <li v-for="item,index in mssg2" @click="setS(index)">
          <div class="tu">  <img :src="item.image" alt=""></div>
          <div class="zi_yi">
            <div class="right">{{item.title}}</div>
          </div>
          <div class="zi_er">
            <div class="zuo">￥{{item.wuxian_price}}</div>
            <div class="zhong"  style="text-decoration:line-through;">￥{{item.list_price}}</div>
            <div class="you">包邮</div>
          </div>
          <div class="zi_san">
            <div class="lf">{{item.sold}}件已售</div>
            <div class="rg">去天猫</div>
          </div>
        </li>
      </ul>

    </div>

      <div class="bottom"></div>
    <navBotm></navBotm>
  </div>
</template>

<script>
import axios from 'axios'
import navBotm from "../components/navBotm";
import "../css/page2.css";
export default { name: "HelloWorld",
    data() {
        return {
     
          mssg2:[] 
          };
    },
    methods: {
              changeVeri() {
            axios.get(
                    'https://www.easy-mock.com/mock/5ad9daff9f06a408237644f9/zhe800/1#!method=get'
                )
                .then(res => {
                    // console.log(res.data);
                    this.mssg2=res.data.data.goods;
                    console.log(this.mssg2)
                    // this.drawpic(res.data.data)
                })
                .catch(error => console.log(error));
          
        },setS(index){

          console.log(index)
              var item = this.mssg2[index];
    const img = {
       image: item.image,
        title:item.title,
        wuxian_price: item.wuxian_price,
        is_baoyou:item.is_baoyou
    };
    // sessionStorage.setItem('key', JSON.stringify(info));
    localStorage.setItem(index, JSON.stringify(img));




        }
           
        },  mounted() {
      
         this.changeVeri()
                // this.$http.jsonp("https://pina.m.zhe800.com/nnc/list/banner.json?type=2&show_user=1").then(res=>{
                //      console.log(res)
                //      this.msg = res.data.s
                // }
                },
    components: { navBotm }
};

</script>

<style>

</style>
