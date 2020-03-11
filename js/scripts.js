$(document).ready(function(){
	
	$('[name="phone"]').inputmask("+7(999) 999-9999");
	
	$('.top-slider').slick({
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 1500,
	  arrows: false,
	  dots: false,
	  speed: 1500,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1600,
		  settings: {
			slidesToShow: 5,
		  }
		},
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 4,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 630,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ] 
	});
	
	$('.bottom-slider').slick({
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 1500,
	  arrows: false,
	  dots: false,
	  speed: 1500,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1600,
		  settings: {
			slidesToShow: 5,
		  }
		},
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 4,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 630,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ] 
	});
	
});