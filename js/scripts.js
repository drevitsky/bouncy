


		$(document).ready(function(){
		


var isotope = $('.grid').isotope({
		itemSelector: '.grid__item',
		percentPosition:true,
		horizontalOrder: true
	});
// $('.grid').masonry({
// 			columnWidth: '.grid__sizer',
// 			percentPosition:true,
// 			//gutter: '.gutter__sizer',
// 			horizontalOrder: true
// 		})

	$('.menu__link').on('click', function(e){
				e.preventDefault();
				$('.menu__item').removeClass('active');
				$(this).parent().addClass('active');
				console.log(this);
				
				var filter =$(this).attr('data-filter');
				console.log(filter);
				filter = filter == '*' ? filter : '.' + filter;
				console.log(filter);
				isotope.isotope({filter :filter })
			})

			$('.slider').slick({
	dots:true,
	infinite: false,
	arrows:false,
	infinite: true,
	autoplay:true,
	autoplaySpeed: 4000,
	easing:'swing'
});

		});





		// var map;
		// var marker;
		// var image = 'favicon.png';
		// var infoWindow;
		// function initMap(){
		// 	var myMarker = {lat: 47.1013689, lng: 37.5483022};
		// 	map = new google.maps.Map(document.getElementById('map'),
		// 	 {center: {
		// 		lat: 47.1013689,
		// 		 lng: 37.5483022
		// 		},
  //         zoom: 16 })
		// 	marker = new google.maps.Marker({
  //         position: myMarker,
  //         map: map,
  //         title: 'Hello World!',

  //         icon: image
  //       });
		// 	infoWindow = new google.maps.InfoWindow({
		// 		content:'<h3>Продам Гараж!!!!</h3>'
		// 	})
		// 	marker.addListener('click', function() {
  //         infoWindow.open(map, marker);
  //       });
		// }


