<template>
    <div>
        <ul class="nav_bot">

            <router-link to="/page3sy">
                <li class="li">
                    <section>
                        <mu-icon value="account_balance">
                        </mu-icon>
                    </section>
                    <p>首页</p>
                </li>
            </router-link>
            <router-link to="/search">
                <li  class="li">
                    <section>
                        <mu-icon value="youtube_searched_for">
                        </mu-icon>
                    </section>
                    <p>搜索</p>
                </li>
            </router-link>

        </ul>
    </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
// import "../css/common.css";
export default {};
</script>

<style>
.nav_bot .li{
    width: 50%;
}
</style>
