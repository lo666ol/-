window.onload=function(){
    !(function(){
		oBth = document.getElementById("fanhui");
				//设置是否正在运动开关
				//以让在运动的时候window.onscroll检测时不让按钮显示
				var onMove = false;
				//当页面向上滚动超出600px时，显示返回顶部按钮
//				window.onscroll = function() {
//						//兼容写法，document.documentElement.scrollTop使用火狐（document.body.scrollTop在火狐内返回0）
//						//，document.body.scrollTop适用其他浏览器
//						if (!onMove && (document.documentElement.scrollTop || document.body.scrollTop > 600)) {
//							oBth.style.display = "block";
//						} else {
//							oBth.style.display = "none";
//						}
//					}
					//返回顶部
				oBth.onclick = function() {
//					oBth.style.display = "none";
					onMove = true;
					var timer = setInterval(function() {
						window.scrollBy(0, -100);
						var top = document.documentElement.scrollTop || document.body.scrollTop;
						if (top <= 0) {
							clearInterval(timer);
							onMove = false;
						}
					}, 100);
				}
	})();
	!(function(){
		obox = document.getElementById("liangge");
		window.onscroll = function() {
			onMove = false;
						//兼容写法，document.documentElement.scrollTop使用火狐（document.body.scrollTop在火狐内返回0）
						//，document.body.scrollTop适用其他浏览器
						if (!onMove && (document.documentElement.scrollTop || document.body.scrollTop > 600)) {
							obox.style.display = "block";
						} else {
							obox.style.display = "none";
						}
					}
	})()
}