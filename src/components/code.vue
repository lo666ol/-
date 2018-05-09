<template>
    <div>
        <canvas id="canvas" width="100" height="34" @click="changeVeri"></canvas>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            canvas: "",
            width: "",
            height: "",
            ctx: "",
            a: "a"
        };
    },
    methods: {
        // 分装随机数
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        randomColor(min, max) {
            var r = this.randomNum(min, max);
            var g = this.randomNum(min, max);
            var b = this.randomNum(min, max);
            return "rgb(" + r + "," + g + "," + b + ")";
        },
        changeVeri() {
            //             this.$Axios({
            //      url:"/api/Handler/AdminLoginHandler?action=veri",
            //      method:"get",
            //      parmas:""
            //    }).then(res=>{
            //        console.log(res.data.data)
            //      this.drawpic(res.data.data)
            //    })

            axios
                .get("/api/Handler/AdminLoginHandler?action=veri")
                .then(res => {
                    console.log(res.data);
                    this.drawpic(res.data.data);
                })
                .catch(error => console.log(error));
        },
        drawpic(txt) {
            var a = this.ctx;
            // 绘制矩形
            a.fillStyle = this.randomColor(180, 240);
            a.fillRect(0, 0, this.width, this.height);
            // 干扰线
            for (var i = 0; i < 10; i++) {
                a.strokeStyle = this.randomColor(100, 150);
                a.beginPath();
                a.moveTo(
                    this.randomNum(0, this.width),
                    this.randomNum(0, this.height)
                );
                a.lineTo(
                    this.randomNum(0, this.width),
                    this.randomNum(0, this.height)
                );
                a.lineWidth = 1;
                a.closePath();
                a.stroke();
            }
            for (var j = 0; j < 50; j++) {
                a.fillStyle = this.randomColor(80, 150);
                a.beginPath();
                a.arc(
                    this.randomNum(0, this.width),
                    this.randomNum(0, this.height),
                    1,
                    0,
                    Math.PI * 2,
                    true
                );
                a.fill();
                a.closePath();
            }
            for (var i = 0; i < 4; i++) {
                a.strokeStyle = this.randomColor(50, 150);
                a.beginPath();
                a.moveTo(
                    this.randomNum(0, this.width),
                    this.randomNum(0, this.height)
                );
                a.lineTo(
                    this.randomNum(0, this.width),
                    this.randomNum(0, this.height)
                );
                a.lineWidth = 1;
                a.closePath();
                a.stroke();
            }
            // 绘制文字
            for (var i = 0; i < 4; i++) {
                var text = txt[i];
                a.fillStyle = this.randomColor(50, 160);
                a.beginPath();
                a.font = this.randomNum(16, 30) + "px SimHei";
                var x = i * 15 + 20;
                var y = this.randomNum(18, 25);
                var deg = this.randomNum(-30, 30);
                a.rotate(deg * Math.PI * 2);
                a.fillText(text, x, y);
                a.closePath();
            }
        }
    },
    mounted() {
        console.log(this.randomColor(1, 100));
        this.canvas = document.getElementById("canvas");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ctx = this.canvas.getContext("2d");
        this.changeVeri();
    }
};
</script>

<style>

</style>
