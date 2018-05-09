<template>
  <div>
    <mt-search  autofocus v-model='md' @focus="focus">
      <router-link to="/page2"><mt-cell v-for="item in result" :title="item.title" :value="item.word">
      </mt-cell></router-link>
    </mt-search>
    <!-- <div @click="e">iuhib</div> -->
    <nav1></nav1>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

import nav1 from "../components/nav";
export default {
    components: { nav1 },
    data() {
        return {
            result: [],
            md:'',
            a: ""
            
        };
    },
  
    methods: {
      focus(){
this.fo()
      },
        fo() {
            axios
                .get(
                    "zhe/zhe800-search/suggestion/searchJsonp",
                    { params: { word: this.md} }
                )
                .then(res => {
                    let num1=res.data.indexOf("(")
                    let num2=res.data.indexOf(")")
                    let resdata = JSON.parse(res.data.substring(num1+1,num2))
                   
                     this.result=resdata.response.docs
                    
                })
                .catch(error => console.log(error));

            //  this.$jsonp('https://status.tuanimg.com/zhe800-search/suggestion/searchJsonp',{word:this.md}
            //         ).then(function(res){
            //                 console.log(res.response.docs);
            //                 this.result=res.response.docs
            //             },function(res){
            //                 console.log(res.status);
            //             });

        }
    },
 
    updated() {
     
        this.focus();
       
    }
};
</script>

<style>
.mint-cell-title {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 0;
}
</style>
