

$(document).ready(function(){

	// Start BURGER
	$('.nav_burger').click(function(event) {
	$('.nav_burger, .links').toggleClass('active');
	$('body').toggleClass('lock');
	// End BURGER


	// Start BUTTON
	$('#play-video').on('click', function(e){
  		e.preventDefault();
  		$('#video-overlay').addClass('open');
  		$("#video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
});

	$('.video-overlay, .video-overlay-close').on('click', function(e){
  		e.preventDefault();
  		close_video();
});

	$(document).keyup(function(e){
  		if(e.keyCode === 27) { close_video(); }
});

	function close_video() {
  		$('.video-overlay.open').removeClass('open').find('iframe').remove();
};
	// End BUTTON


	});

    // Start Anchors
  $(".links_block a").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top; 
        $('body,html').animate({scrollTop: top - 100}, 0);
    });


    $(".hero-link a").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 100}, 0);
    });

     $(".gallery_info a").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 100}, 0);
    });

  // End anchors



	// Start hero SLIDER
$('#gallery').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  appendArrows: $('.arrows'),
  centerMode: true,
  responsive: [
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 1
      }
  }
  ]
    });
	// End hero SLIDER


	// Start testimony SLIDER
$('#testimony-slider').slick({
  slidesToShow: 2.05,
  slidesToScroll: 1,
  dots: false,
  infinity: true,
  arrows: true,
  nextArrow: $('.next1'),
  prevArrow: $('.prev1'),
  appendArrows: $('.testimony-arrows'),
  centerMode: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1.1
      }
  },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
  }
  ]
    });

});
	// End testimony SLIDER



	// Start COLLAGE
    $(".collage-left div").on("click", function(event) {
            event.preventDefault();
            let activeLink = $(this).attr("data-name");

            $(".collage-left div.active").removeClass("active");
            $(".barber-info.active").removeClass("active");
            $(this).addClass("active");
            $(activeLink).addClass("active");
        });

    $(".collage-right div").on("click", function(event) {
            event.preventDefault();
            let activeLink = $(this).attr("data-name");

            $(".collage-right div.active").removeClass("active");
            $(".barber-info.active").removeClass("active");

            $(this).addClass("active");
            $(activeLink).addClass("active");
        });
 	// End COLLAGE	



   



