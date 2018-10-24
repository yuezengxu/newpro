function Enmey(){
	this.body = document.createElement("div");
	this.initEy = function(){
		new GageEngine().body.appendChild(this.body);
		this.body.className = "enemy-small";
		this.left(rand(0,new GageEngine().width() - this.width()));
		this.top(0);
		return this 
	}
	this.move = function(){
		this.timer = setInterval(function(){
			this.top(this.top() + 5);
			if(this.top() > new GageEngine().height() ){
				this.body.remove();
				clearInterval(this.timer)
			}
		}.bind(this),30)
		return this;
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
			this.body.style.top = val + "px"
		}
		return this.body.offsetTop
	}
}
