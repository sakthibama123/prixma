
$(document).ready(function () {
	$(".hero-slider").owlCarousel({
	  loop: true,
	  autoplay: true,
	  autoplayTimeout: 5000,
	  responsive: {
		0: {
		  items: 1
		},
		600: {
		  items: 1
		},
		1000: {
		  items: 1
		}
	  }
	});
  });