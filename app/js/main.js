$(function () {

	if ($('.home-slider').length) {
		$('.home-slider').slick({
			autoplay: true,
			autoplaySpeed: 7000,
			speed: 600,
			verticalSwiping: true,
			vertical: true,
			arrows: false,
			dots: true,
		});

	}



	if ($('.slider-promo__items').length) {
		$('.slider-promo__items').slick({
			infinite: true,
			slidesToShow: 4,
			// autoplay: true,
			autoplaySpeed: 7000,
			swipeToSlide: true,
			appendArrows: $('.slider-promo__arrow-box'),
			prevArrow: '<div class="slider-promo__arrow-left"><i class="fas fa-arrow-left"></i></div>',
			nextArrow: '<div class="slider-promo__arrow-right"><i class="fas fa-arrow-right"></i></div>',
		});
	}

	if ($('.slider-testimonials-top').length) {
		$('.slider-testimonials-top').slick({
			arrows: false,
			draggable: false,
			fade: true,
			adaptiveHeight: true,
		});
	}

	if ($('.slider-testimonials-authors').length) {
		$('.slider-testimonials-authors').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			focusOnSelect: true,
			swipeToSlide: true,
			asNavFor: '.slider-testimonials-top',
		});
	}

	if ($('.twitter-box-slider').length) {
		$('.twitter-box-slider').slick({
			verticalSwiping: true,
			fade: true,
			appendArrows: $('.twitter-slider-arrows'),
			prevArrow: '<div class="arrow-up"><i class="fas fa-arrow-up"></i></div>',
			nextArrow: '<div class="arrow-down"><i class="fas fa-arrow-down"></i></div>'
		});
	}

	if ($('.video-icon-open').length) {
		$('.video-icon-open').magnificPopup({
			type: 'iframe',

		});
	}

	// $('.parent-container').magnificPopup({
	// 	delegate: 'a', // child items selector, by clicking on it popup will open
	// 	type: 'image'
	// 	// other options
	// });

	if ($('.gallery-box').length) {
		$('.gallery-box').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function (item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	}

});