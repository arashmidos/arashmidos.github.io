$(function () {
	'use strict';

	var width = $(window).width();
	var height = $(window).height();

	/* Preloader */
	$(window).on('load', function () {
		$(".preloader .spinner").fadeOut(function () {
			$('.preloader').fadeOut();
			$('body').addClass('ready');
		});
	});

	/* Fade animations on scroll */
	if (width > 720) {
		window.sr = ScrollReveal();
		sr.reveal('.animated');
	}

	/* Smoothscroll */
	if ($('#home-section').length) {
		$(window).on('scroll', function () {
			var scrollPos = $(window).scrollTop();
			$('.top-menu ul li a').each(function () {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.offset().top - 30 <= scrollPos) {
					$('.top-menu ul li').removeClass("active");
					currLink.closest('li').addClass("active");
				}
			});
		});
	}

	/* Top Menu */
	if ($('#home-section').length) {
		$('.top-menu ul li a').on('click', function () {
			var id = $(this).attr('href');
			var h = parseFloat($(id).offset().top);

			$('body,html').animate({
				scrollTop: h
			}, 800);

			if ($('.top-menu').hasClass('active')) {
				$('.top-menu').removeClass('active');
			}

			return false;
		});
		$('.section').on('click', '.contact-btn', function () {
			$('.top-menu li a[href="#contact-section"]').click();
			return false;
		});
	}

	/* Show/Hide Email */
	$('.page').on('click', '.email-btn', function () {
		var emailDiv = $('.st-box .st-email');
		if (emailDiv.is(':hidden')) {
			emailDiv.slideDown();
		} else {
			emailDiv.slideUp();
		}
		return false;
	});

	/* Show/Hide Phone */
	$('.page').on('click', '.phone-btn', function () {
		var phoneDiv = $('.st-box .st-phone');
		if (phoneDiv.is(':hidden')) {
			phoneDiv.slideDown();
		} else {
			phoneDiv.slideUp();
		}
		return false;
	});

	/* Open Top Menu */
	$('.page').on('click', '.menu-btn', function () {
		if ($('.top-menu').hasClass('active')) {
			$('.top-menu').removeClass('active');
		} else {
			$('.top-menu').addClass('active');
		}

		return false;
	});

	/* Fixed Top Menu on scroll */
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('.top-menu').addClass('fixed');
		}
		else {
			$('.top-menu').removeClass('fixed');
		}
	});

	/* Recommendations carousel */
	$(".reviews-carousel .owl-carousel").owlCarousel({
		items: 1,
		margin: 16,
		nav: false,
		dots: true,
		loop: true,
		autoHeight: false,
		smartSpeed: 1000,
		mouseDrag: true,
		touchDrag: true,
		autoplay: false
	});


	/* Featured carousel */
	$(".featured-carousel .owl-carousel").owlCarousel({
		responsive: {
			0: { items: 1 },
			720: { items: 2 },
			1080: { items: 3 },
		},
		margin: 16,
		nav: false,
		dots: true,
		loop: false,
		autoHeight: false,
		smartSpeed: 1000,
		mouseDrag: true,
		touchDrag: true,
		autoplay: false
	});

	/* Button hover effect */
	$('.btn_animated').on('mouseenter', '.circle', function (e) {
		if ($(this).find(".ink").length === 0) {
			$(this).prepend("<span class='ink'></span>");
		}
		var ink = $(this).find(".ink");
		ink.removeClass("animate");
		if (!ink.height() && !ink.width()) {
			var d = Math.max($(this).outerWidth(), $(this).outerHeight());
			ink.css({
				height: d,
				width: d
			});
		}
		var x = e.pageX - $(this).offset().left - ink.width() / 2;
		var y = e.pageY - $(this).offset().top - ink.height() / 2;
		ink.css({
			top: y + 'px',
			left: x + 'px'
		}).addClass("animate");
	});

	if ($('#home-section').length) {
		google.maps.event.addDomListener(window, 'load', initMap);
	}

});