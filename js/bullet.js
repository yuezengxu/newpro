function Bullet(){
	this.body = document.createElement("div");
	this.initBult = function(){
		new GageEngine().body.appendChild(this.body);
		this.body.className = "bullet";
		var mp = new MyPlane();//战斗机的实例
		this.left(mp.left() + mp.width() / 2 - this.width() / 2);//设置子弹的位置
		this.top(mp.top() - this.height());		
		return this
	}
	this.move = function(){//子弹运动的过程和敌机 有可能碰撞
		this.timer = setInterval(function(){
			this.top(this.top() - 5);
			if(this.top() <= 0){
				this.body.remove();
				clearInterval(this.timer)
			}
			if(pz(this.body,new GageEngine().emy.body)){//子弹和敌机碰撞
				new GageEngine().emy.body.className = "bullet_die";
				clearInterval(new MyPlane().timer);//子弹发射的定时器给移除掉
				
				setTimeout(function(){
					new GageEngine().emy.body.remove();
				},3000)
			}
			
			
		}.bind(this),30)
	}
	this.width = function(){
		return this.body.offsetWidth
	}
	this.height = function(){
		return this.body.offsetHeight
	}
	this.left = function(val){
		if(val || val == 0){
			this.body.style.left = val + "px"
		}
		return this.body.offsetLeft
	}
	this.top = function(val){
		if(val || val == 0){
			this.body.style.top = val + "px";
		}
		return this.body.offsetTop
	}
}
