var circle = $('#circle');
	var MAX_PARTICLES = 2580;
	var COLOURS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];
	var particles = []
	var pool = []
	var TWO_PI = 2 * Math.PI

	$(document).mousemove(function(e){
		var x = e.pageX,
			y = e.pageY;

		circle.css('top', (y - 15) + "px")
		circle.css('left', (x - 15) + "px")

		// test
		var particle, theta, force, touch, max, i,j,n;

		// for ( i = 0, n = circle.length; i < n; i++ ) {

  //               touch = circle[i], 
                max = Math.floor((Math.random() * 5) + 1);
             
                for ( j = 0; j < max; j++ ) {
                  	spawn( x, y );
                }

         //}
         	
            draw()
		
	})	


	function setup(){
		var i, x, y;

		for (var i = 0; i < 20; i++) {
			x = (circle.width() * 0.5) + Math.floor(Math.random() * 201) - 100;;
			y = (circle.height() * 0.5) + Math.floor(Math.random() * 201) - 100;;
			//spawn()

		}
	}
	function spawn(x,y){
		var particle, theta, force;

		if (particles.length >= MAX_PARTICLES) {
			pool.push(particles.shift());
		}

		particle = pool.length ? pool.pop() : new Particle();

		particle.init(x,y)

            particle.color = COLOURS[Math.floor((Math.random() * 6) + 1)];
            
            theta = Math.floor((Math.random() * Math.PI) + 1);
            force = Math.floor((Math.random() * 8) + 2);

            //particle.vx = Math.floor(Math.sin( theta ) * force);
            //particle.vy = Math.floor(Math.cos( theta ) * force);

            // particle.vx = Math.floor((Math.random() * 501) - 250);
            // particle.vy = Math.floor((Math.random() * 501) - 250);

            var width = $(document).width()
            var height = $(document).height()

            particle.vx = Math.floor((Math.random() * (width + 1 )) - (width/2));
            particle.vy = Math.floor((Math.random() * (height +1 )) - (height/2));

            // particle.vx = Math.floor((Math.random() * 801) - 400);
            // particle.vy = Math.floor((Math.random() * 801) - 400);

            particles.push( particle );
	}

	function draw(){
		
		var particle = "";
		for (var i = particles.length - 1; i >= 0 ; i--) {
			particle = '<span id="p_'+i+'" class="test"></span>'
			$('#p_' + i).css({
				'background-color': particles[i].color,
				height: particles[i].radius + 'px',
				width: particles[i].radius +  'px',
				'border-radius': '50%',
				position: 'absolute',
				transform: 'translate('+ particles[i].vx + 'px,' + particles[i].vy + 'px)',
				transition : 'transform .43s ease ',
				
			})
			$('#p_' + i).fadeTo(600, 0)

			$('#p_' + i).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
    function(e) {

    	var id = e.currentTarget.id
    	var nr = id.split("p_")
    	particles.splice(nr[1],1);
         		$("#" + e.currentTarget.id).remove();
    
  	});
			$('#circle').append(particle)
		}
		
	}

	document.addEventListener('touchmove', function(e) {
    	e.preventDefault();
    	var touch = e.touches[0];
    
		var x = touch.pageX,
			y = touch.pageY;

		circle.css('top', (y - 15) + "px")
		circle.css('left', (x - 15) + "px")


		for ( i = 0, n = circle.length; i < n; i++ ) {

                touch = circle[i], max = Math.floor((Math.random() * 4) + 1);
                for ( j = 0; j < max; j++ ) {
                  	spawn( x, y );
                  	
                }

         }
         
            draw()

}, false);