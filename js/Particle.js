function Particle(x,y){
	this.init(x,y);
}

Particle.prototype = {
		init: function( x, y){
			this.alive = true;

			this.radius = Math.floor(Math.random() * 50) + 10;
			this.wander = 0.15;
			this.theta = Math.random() * (2 * Math.PI);
			this.drag = 0.92; 
			this.color = '#fff'
			
			this.x = x || 0.0;
			this.y = y || 0.0;

			this.vx = 0.0;
			this.vy = 0.0;
		},

		move: function(){
			this.x += this.vx;
			this.y += this.vy;

			this.vx *= this.drag;
			this.vy *= this.drag;

			this.theta += Math.floor(Math.random() * 11) - 5;
			this.vx += Math.sin(this.theta) * 0.1;
			this.vy += Math.cos(this.theta) * 0.1;

			this.radius *= 0.96;
			this.alive = this.radius > 0.5

		}
}

function GrayParticle(x,y){
	this.init(x,y);
}

GrayParticle.prototype = {
		init: function( x, y){
			this.alive = true;

			this.radius = Math.floor(Math.random() * 10) + 1;
			this.wander = 0.15;
			this.theta = Math.random() * (2 * Math.PI);
			this.drag = 0.92; 
			this.color = '#fff'
			
			this.x = x || 0.0;
			this.y = y || 0.0;

			this.vx = 0.0;
			this.vy = 0.0;
		},

		move: function(){
			this.x += this.vx;
			this.y += this.vy;

			this.vx *= this.drag;
			this.vy *= this.drag;

			this.theta += Math.floor(Math.random() * 11) - 5;
			this.vx += Math.sin(this.theta) * 0.1;
			this.vy += Math.cos(this.theta) * 0.1;

			this.radius *= 0.96;
			this.alive = this.radius > 0.5

		}
}