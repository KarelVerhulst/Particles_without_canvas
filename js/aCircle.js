var aCircle = $('#aCircle'),
	aMAX_PARTICLES = 3000,
	aCOLOURS = [ '#BCBCBF', '#FBFAFF', '#E2E1E5', '#C4C3C7', '#9E9EA1', '#E7E6EB', '#C9C8CC' ],
	aparticles = [],
	apool = [],
	aTWO_PI = 2 * Math.PI;

	function aParticle(x,y){
		this.ainit(x,y);
	}

	aParticle.prototype = {
		ainit: function( x, y){
			this.alive = true;

			this.radius = Math.floor(Math.random() * 10) + 1;
			this.wander = 0.15;
			this.theta = Math.random() * aTWO_PI
			this.drag = 0.92; 
			this.color = '#fff'
			
			this.x = x || 0.0;
			this.y = y || 0.0;

			this.vx = 0.0;
			this.vy = 0.0;
		},

		amove: function(){
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

	function asetup(){
		var i, x, y;

		for (var i = 0; i < 20; i++) {
			x = (aCircle.width() * 0.5) + Math.floor(Math.random() * 201) - 100;;
			y = (aCircle.height() * 0.5) + Math.floor(Math.random() * 201) - 100;;
			//spawn()

		}
	}
	function aspawn(x,y){
		var aparticle, atheta, aforce;

		if (aparticles.length >= aMAX_PARTICLES) {
			apool.push(aparticles.shift());
		}

		aparticle = apool.length ? apool.pop() : new aParticle();

		aparticle.ainit(x,y)

            aparticle.color = aCOLOURS[Math.floor((Math.random() * 6) + 1)];
            
            atheta = Math.floor((Math.random() * Math.PI) + 1);
            aforce = Math.floor((Math.random() * 8) + 2);

            //particle.vx = Math.floor(Math.sin( theta ) * force);
            //particle.vy = Math.floor(Math.cos( theta ) * force);

            // particle.vx = Math.floor((Math.random() * 501) - 250);
            // particle.vy = Math.floor((Math.random() * 501) - 250);

            var width = $(document).width()
            var height = $(document).height()

            aparticle.vx = Math.floor((Math.random() * (width + 1 )) - (width/2));
            aparticle.vy = Math.floor((Math.random() * (height +1 )) - (height/2));

            // particle.vx = Math.floor((Math.random() * 801) - 400);
            // particle.vy = Math.floor((Math.random() * 801) - 400);

            aparticles.push( aparticle );
	}

	function adraw(){
		
		var aparticle = "";
		for (var i = aparticles.length - 1; i >= 0 ; i--) {
			aparticle = '<span id="t_'+i+'" class="iets"></span>'
			$('#t_' + i).css({
				'background-color': aparticles[i].color,
				height: aparticles[i].radius + 'px',
				width: aparticles[i].radius +  'px',
				'border-radius': '50%',
				position: 'absolute',
				transform: 'translate('+ aparticles[i].vx + 'px,' + aparticles[i].vy + 'px)',
				transition : 'transform .43s ease ',
				
			})
			$('#t_' + i).fadeTo(600, 0)

			$('#t_' + i).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
    function(e) {

    	var id = e.currentTarget.id
    	var nr = id.split("t_")
    	aparticles.splice(nr[1],1);
         		$("#" + e.currentTarget.id).remove();
    
  	});
			aCircle.append(aparticle)
		}
		
	}

	

	var myvar = setInterval(function(){
		for ( i = 0, n = aCircle.length; i < n; i++ ) {

                touch = aCircle[i], max = Math.floor((Math.random() * 4) + 1);
                for ( j = 0; j < max; j++ ) {
                  	aspawn( 50, 50 );
                  	
                }

         }
         
            adraw()
	},50)

$(window).keypress(function(e) {
    	
    	var key = e.which;
    	
    	if (key === 13) {
    		clearInterval(myvar);
    	}
	});




