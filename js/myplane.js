function MyPlane(){
	if(!MyPlane.cache){
		MyPlane.cache = {
			body : document.createElement("div"),//战斗机
			init : function(){
				new GageEngine().body.appendChild(this.body);//把战斗机添加到main里
				this.body.className = "my-warplain";
				this.left((new GageEngine().width() - this.width())/2);//战斗机放到left中间
				this.top(new GageEngine().height() - this.height());//战斗机放在底部
				this.fire();//发射子弹开火
				//this.move();
			    return this;//实例返出去
				
			},
			move : function(){//让战斗机在main中移动
				new GageEngine().body.onmousemove = function(e){
					var e = e || window.event;
					var x = e.pageX - new GageEngine().left() - this.width()/2;
					var maxL = new GageEngine().width() - this.width();
					x = x < 0 ? 0 : x > maxL ? maxL : x;
					this.left(x)
				}.bind(this)
			},
			fire: function(){//开火
				//console.log(1)
				this.timer = setInterval(function(){
					new Bullet().initBult().move();
				}.bind(this),new GageEngine().level)
				
			},
			width : function(){
				return this.body.offsetWidth
			},
			height : function(){
				return this.body.offsetHeight
			},
			left : function(val){
				if(val || val == 0){
					this.body.style.left = val + "px"
				}
				return this.body.offsetLeft
			},
			top : function(val){
				if(val || val == 0){
					this.body.style.top = val + "px"
				}
				return this.body.offsetTop
			}
		}
	}
	return MyPlane.cache
}
