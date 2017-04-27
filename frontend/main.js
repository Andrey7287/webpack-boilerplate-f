'use strict';

/* Make jQuery available in global */
console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = $;

/* Import project styles and components */
require('script-loader!slick-carousel');
require('./modules/ymap');
import '../sass/css.scss';
import OnResize from './modules/resize';
import scrollup from './modules/scrollup';

/* Define project components and variables */
var	mobileView = window.matchMedia("(max-width: 768px)").matches,
		resizeAlign = new OnResize,
		scrollTiming = 0;

/************************
****** Mobile menu ******
*************************/

$('.c-hamburger').on('click', function(){
	$(this).toggleClass('is-active');
	$('.site-nav').slideToggle();
});


/***********************
******** SLIDER ********
************************/

$('.js-slider-1').slick({
	prevArrow: $('.js-slider-1-left'),
	nextArrow: $('.js-slider-1-right'),
	dots: true,
	appendDots: $('.js-slider-1-dots')
});

/************************
******* Scroll Up *******
*************************/

$(document).scroll(function(){

	if ( !scrollTiming ) {

		scrollTiming = setTimeout(function(){

			var scroll = $('body').scrollTop() ? $('body').scrollTop() : $('html').scrollTop();
			scroll >= 300 ? $('.scrollup').addClass('act') : $('.scrollup').removeClass('act');
			scrollTiming = 0;

		},300);

	}

});

$('.scrollup').scrollUp();
