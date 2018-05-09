<template>
  <div>
          <ul class="nav_bot"> 
             <router-link to="/"> <li><img src="../../static/img/nav (3).png" alt=""><p>今日特卖</p></li></router-link>
              <router-link to="/page2"><li><img src="../../static/img/nav (4).png" alt=""><p>淘宝价</p></li></router-link>
            <router-link to="/page3sy">  <li><img src="../../static/img/nav (5).png" alt=""><p>拼团</p></li></router-link>
            <router-link to="/page4" v-if="hide">  <li><img src="../../static/img/nav (6).png" alt=""><p>购物车</p></li></router-link>
           
            <router-link to="/page6" v-if="show">  <li><img src="../../static/img/nav (6).png" alt=""><p>购物车</p></li></router-link>
            <router-link to="/page5?from=2">  <li><img src="../../static/img/nav (7).png" alt=""><p>我的</p></li></router-link>
          </ul>
 
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import "../css/common.css";

export default {
  data(){
    return{
hide:false,
show:true
    }
  },
mounted(){
  if(sessionStorage.getItem("pass")!=null&&sessionStorage.getItem("pass")!=""){
// this.fatherTitle='gwc';
this.hide=true,
this.show=false
}else{
}
}
}
</script>

<style>

</style>
