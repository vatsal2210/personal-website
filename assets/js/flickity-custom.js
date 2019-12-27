$(document).ready(function () {


	/* ======= Flickity plugin ======= */
	// Ref: https://flickity.metafizzy.co/
	var $carousel = $('.testimonials').flickity({
		adaptiveHeight: true,
		wrapAround: true,
		autoPlay: 3000, //3 sec
		cellSelector: '.testimonial-item',
		arrowShape: {
			x0: 10,
			x1: 60,
			y1: 50,
			x2: 65,
			y2: 45,
			x3: 20
		}
	});
});