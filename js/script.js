$(function(){
	$('.rev_slider').slick({
		infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
   dots: true,
   variableWidth: true,
   responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        variableWidth: false
      }
    },
    {
    	breakpoint: 1000,
      settings: {
      	slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
		variableWidth: false
      }
    }
  ]
	})
})