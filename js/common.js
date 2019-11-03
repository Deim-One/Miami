"use strict"

$(function() {
	//FIXED NAV, SCROLLUP
	$(window).scroll(function () {
        if ( $(window).scrollTop() > $('#nav_id').offset().top ) {
			$('#nav_id').addClass('fixedNav');
		} else {
			$('#nav_id').removeClass('fixedNav');
		}

        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });
	//MODAL BOX
	$('#call').click(function() {
		$('#black_fill').toggleClass('open');
		$('#modal_box').toggleClass('open');
	});
	
	$('#close_modal, #black_fill').click(function() {
		$('#black_fill').toggleClass('open');
		$('#modal_box').toggleClass('open');
	});
	//SCROLL
	$('.nav a[href^="#"]').click(function() {
		var target = $(this).attr('href');
		$('html, body').animate(
		    {
			    scrollTop: $(target).offset().top - 53
		    },
			500
		);
	});
	//SLIDER
	$('#slide').slick({
			    slidesToShow: 3,
			    slidesToScroll: 1,
			    autoplay: true,
			    autoplaySpeed: 2000,
				responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
	});
	//VIEW ALL GALLERY
	$('#view_all_gallery').click(function() {
		var content = '<div class="gallery_line wow fadeInUp"><div class="box_img_gallery"><img src="img/1ig.jpg" alt=""></div><div class="box_img_gallery"><img src="img/2ig.jpg" alt=""></div></div><div class="name_gallery">Marina Palms / <span class="blue">North Miami Beach, FL 33162</span></div>'
		$('#gallery_box').append(content);
		$(this).remove();
	});
});