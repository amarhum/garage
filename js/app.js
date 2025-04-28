(function($, document, window){


	
	$(document).ready(function(){

		// hero-slider
		$(".hero-slider").flexslider({
			controlNav: true,
			directionNav: false,
			animation: "fade"
		});

		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});
		$(".mobile-navigation").append($(".main-navigation .menu").clone());


		// Changing background image using data-attribute
		$("[data-bg-image]").each(function(){
			var image = $(this).data("bg-image");
			$(this).css("background-image", "url("+image+")");
		});

		// Changing background color using data-attribute
		$("[data-bg-color]").each(function(){
			var color = $(this).data("bg-color");
			$(this).css("background-color", color );
		});

		var $container = $('.filterable-items');

		$container.imagesLoaded(function(){
		    $container.isotope({
		        filter: '*',
		        layoutMode: 'fitRows',
		        animationOptions: {
		            duration: 750,
		            easing: 'linear',
		            queue: false
		        }
		    });

		});
	    $('.filterable-nav a').click(function(e){
	    	e.preventDefault();
	        $('.filterable-nav .current').removeClass('current');
	        $(this).addClass('current');

	        var selector = $(this).attr('data-filter');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });
	    $('.mobile-filter').change(function(){

	        var selector = $(this).val();
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                duration: 750,
	                easing: 'linear',
	                queue: false
	            }
	         });
	         return false;
	    });

	    initLightbox({
	    	selector : '.filterable-item a',
	    	overlay: true,
	    	closeButton: true,
	    	arrow: true
	    });

		$('.map').gmap3({
			map: {
				options: {
					maxZoom: 14 
				}  
			},
			marker:{
				address: "40 Sibley St, Detroit",
				options: {
					icon: new google.maps.MarkerImage(
						"images/map-marker.png",
						new google.maps.Size(43, 53, "px", "px")
					)
				}
			}
		},
		"autofit" );

	});

	$(window).load(function(){

	});


	document.addEventListener("DOMContentLoaded", function () {
		
		const location = [-6.895021, 106.809950]; 

		const map = L.map("map").setView(location, 15);

		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(map);

		L.marker(location)
			.addTo(map)
			.bindPopup("<b>Sirkon Garage</b><br>Jl. Raya No. 123, Bandung")
			.openPopup();
	});
	document.addEventListener("DOMContentLoaded", function () {
		
		const location = [-6.895021, 106.809950]; 

		const map = L.map("map2").setView(location, 15);

		L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		}).addTo(map);

		L.marker(location)
			.addTo(map)
			.bindPopup("<b>Sirkon Garage</b><br>Jl. Raya No. 123, Bandung")
			.openPopup();
	});

})(jQuery, document, window);