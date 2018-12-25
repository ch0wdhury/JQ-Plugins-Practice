$('.counter').counterUp({
    delay: 1,
    time: 10000
});

  $(".counts").tiltedpage_scroll({
    sectionContainer: "> div",     // In case you don't want to use <section> tag, you can define your won CSS selector here
    angle: 50,                         // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
    opacity: true,                     // You can toggle the opacity effect with this option. The default value is true
    scale: true,                       // You can toggle the scaling effect here as well. The default value is true.
    outAnimation: true                 // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
  });
	$("#appearance1").roundSlider({
	    radius: 80,
	    width: 14,
	    handleSize: "24,12",
	    handleShape: "square",
	    sliderType: "min-range",
	    value: 30
	});

	$("#appearance7").roundSlider({
	    radius: 80,
	    width: 8,
	    handleSize: "+16",
	    handleShape: "dot",
	    sliderType: "min-range",
	    value: 45
	});
	$("#appearance2").roundSlider({
	    radius: 80,
	    width: 14,
	    handleSize: "+8",
	    handleShape: "dot",
	    sliderType: "min-range",
	    value: 60
	});

	$("#appearance3").roundSlider({
	    radius: 80,
	    width: 9,
	    handleSize: "+8",
	    sliderType: "min-range",
	    value: 80
	});
	new WOW().init();

	$('.slick_slide').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	});

	$('.owl-carousel').owlCarousel();