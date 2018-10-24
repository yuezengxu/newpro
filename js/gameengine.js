function GageEngine(){
	if(!GageEngine.cache){
		GageEngine.cache = {
			body : $id("main"),
			oUl : $id("options"),
			emy : null,
			level : 0,
			initMenu : function(){
				this.oUl.onclick = function(e){
					var e = e || window.event;
					var target = e.target || e.srcElement;
					if(target.nodeName == "LI"){
						this.level = target.getAttribute("level");
						this.oUl.remove();
						this.start();
					}										
				}.bind(this)
			},
			start : function(){
				var logo = document.createElement("div");
				this.body.appendChild(logo);
				logo.className = "logo";
				var loading = document.createElement("div");
				this.body.appendChild(loading);
				loading.className = "loading";
				index = 0;
				var timer = setInterval(function(){
					index++;
					loading.style.background = "url(images/loading"+index+".png)";
					if(index == 3){
						index = 0;
					}
				},500)
				setTimeout(function(){
					clearInterval(timer);
					loading.remove();
					logo.remove();
					this.gameStart();
					
				}.bind(this),1900)
			},
			gameStart : function(){//战斗机上场  敌机上场
				new MyPlane().init().move();
				this.emy = new Enmey().initEy().move();//敌机的一个实例保存在this.emy上
			},
			width : function(){
				return this.body.offsetWidth;
			},
			height : function(){
				return this.body.offsetHeight;
			},
			left : function(val){
				if(val || val == 0){
					this.body.style.left = val + "px";
				}
				return this.body.offsetLeft;
			},
			top : function(){
				if(val || val == 0){
					this.body.style.top = val + "px";
				}
				return this.body.offsetTop
			}
		}
	}
	return GageEngine.cache
}
