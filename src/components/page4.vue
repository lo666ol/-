<template>
  <div>
    <div>

      <div class='box' v-for="item,index in mssg2">
        <div class='circle lt'>
          <input type="checkbox" v-model="selectList" :id="item.id" :value="index" name="selectList">
        </div>
        <div class='lt img'>
          <img :src="item.image" alt="">
          <!-- <img src="../../static/img/conta (2).jpg" alt=""> -->
        </div>
        <div class='rt text'>
          <div class='name'>{{item.title}} </div>
          <div class='price lt'>￥{{item.wuxian_price}}</div>
          <div class='btn rt'>
            <div class='minus lt' @click="handleReduce(index)" :disabled="item.is_baoyou === 1">-</div>
            <div class='num lt'>
              {{item.is_baoyou}}
            </div>
            <div class='add lt' @click="handleAdd(index)">+</div>
          </div>
        </div>
      </div>

    </div>
    <div class='he lt'>合计：￥{{totalPrice}}
      <button class='jie lt'>去结算({{count}})
      </button>
      <div class="chkAll rt">
        <input type="checkbox" v-on:click="swapCheck" v-model="checked">
        <span>全选</span>
      </div>
    </div>

    <!-- <div style="color:red">
    您的购物车里面什么也没有
  </div> -->
    <div style="width=100%;height:300px;"></div>

    <navBotm></navBotm>
  </div>
</template>

<script>
import navBotm from "../components/navBotm";
import axios from "axios";
export default {
    components: { navBotm },
    data() {
        return {
            mssg2: [],
            selectList: [],
            checked: false
            // totalPrice1:''
        };
    },
    computed: {
        totalPrice: function() {
            var total = 0;
            for (var i = 0, len = this.selectList.length; i < len; i++) {
                var index = this.selectList[i];
                var item = this.mssg2[index];
                total += item.wuxian_price * item.is_baoyou;
            }

            //  console.log(total)

            return total.toString().replace(/\B(?=(\d{3})+$)/g, ",");
        },
        count: function() {
            var count = 0;
            for (var i = 0, len = this.selectList.length; i < len; i++) {
                var index = this.selectList[i];
                var item = this.mssg2[index];
                count += item.is_baoyou;
            }

            return count;
        }
    },
    methods: {
        handleReduce: function(index) {
            // alert(2)
            var item = this.mssg2[index];
            //  console.log(item)
            if (item.is_baoyou < 2) {
                return;
            }
            item.is_baoyou--;
        },
        handleAdd: function(index) {
            // alert(1)
            var item = this.mssg2[index];
            item.is_baoyou++;
        },
        swapCheck: function() {
            var selectList = document.getElementsByName("selectList");
            var len = selectList.length;
            if (this.checked) {
                for (var i = 0; i < len; i++) {
                    var item = selectList[i];
                    item.checked = false;
                }
                this.checked = false;
                this.selectList = [];
            } else {
                for (i = 0; i < len; i++) {
                    item = selectList[i];
                    if (item.checked === false) {
                        item.checked = true;
                        this.selectList.push(selectList[i].value);
                    }
                }
                this.checked = true;
            }
        }
    },
    mounted() {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            // console.log(key);

            this.mssg2.push(JSON.parse(localStorage.getItem(key)));
            // console.log(localStorage.getItem(key))
            // console.log(JSON.parse(localStorage.getItem(key)))
        }

        // console.log(this.mssg2);

        // console.log('key')
    }
};
</script>

<style>
img {
    width: 100%;
    height: 100%;
    margin: 0 auto;
}
.box {
    height: 120px;
    background: #fff;
    border-top: 1px solid #ddd;
    padding: 10px 16px 13px 13px;
    box-sizing: border-box;
    margin-bottom: 6px;
    font-size: 14px;
}
.circle {
    width: 10%;
    height: 100%;
}
.circle icon {
    color: green;
    margin-top: 70px;
}
.lt {
    float: left;
}
.rt {
    float: right;
}
.box .img {
    width: 20%;
    height: 100%;
    border: 1px solid #ddd;
}
.box .img image {
    width: 100%;
    height: 164px;
}
.box .text {
    width: 65%;
    padding: 10px;
    box-sizing: border-box;
}
.box .text .name {
    font-size: 13px;
}
.box .text .price {
    font-weight: bolder;
    color: #ee5050;
    line-height: 66px;
}
.btn {
    margin-top: 18px;
    text-align: center;
}
.minus,
.add {
    width: 30px;
    height: 30px;
    border: 1px solid #dfdfe1;
    background: #f9f9f9;
    border-radius: 5px;
    display: inline-block;
    float: left;
}
.num {
    display: inline-block;
    width: 30px;
    height: 30px;

    border: 1px solid #dfdfe1;
    background: #fff;
    line-height: 30px;
}
.transh {
    width: 50px;
    height: 500px;
    margin-right: 40px;
    display: inline-block;
}

.bottom {
    padding: 30px 36px 0 36px;
    box-sizing: border-box;
}
.he,
.jie {
    display: inline-block;
}
.he {
    color: #757676;
}
.he .money {
    color: #ee5050;
}
.jie {
    width: 88px;
    height: 30px;
    background: #ee5050;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    color: #fff;
}
</style>
