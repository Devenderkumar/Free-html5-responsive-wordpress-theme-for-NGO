/*
##################################################

# Project Name  : AAWC | Save A Child’s Future
# Author : Og web Solutions
#url: https://www.ogwebsolutions.com
 
##################################################
*/
$(document).ready(function(e) {
		

    /*Mobile menu*/
    $('.menuBox').after(function() {
        return $('<div id="dedicated-mobile"><a class="trigger" href="#">Navigation<span></span></a></div>');
    });
    $('.menuBox ul').clone().attr('id', 'dedicated-mobilemenu').removeAttr('class').hide().appendTo('#dedicated-mobile');
    $('#dedicated-mobile a.trigger').addClass('close');
    $('#dedicated-mobile a.trigger').click(function(e) {
        e.preventDefault();
        $this = $(this);
        if ($this.hasClass('close')) {
            $this.removeClass('close').addClass('open');
            $this.parent().find('#dedicated-mobilemenu').slideDown();
        } else {
            $this.removeClass('open').addClass('close');
            $this.parent().find('#dedicated-mobilemenu').slideUp();
        }
    });
    /**  News Slider  */
    $('.mainslider').owlCarousel({
        loop: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin: 0,
        nav: true,
        smartSpeed: 2000,
        autoplay: true,
        responsive: {
            0: {
                items: 1,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3
            }
        }
    })
	 
    $(document).on("scroll", onScroll);
    //smoothscroll
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");
 
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
        }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.headerSec').addClass("sticky");
        } else {
            $('.headerSec').removeClass("sticky");
        }
		
		if ($(this).scrollTop() > 300) {
            $('#toplink').addClass("show");
        } else {
            $('#toplink').removeClass("show");
        }
    });
	    $('#toplink').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
});
		
    /**
     * contact form
     */
    $(document).on("focus", "input, textarea", function() {
        $(this).parent('div,.contact-form li').find('label').addClass('up');
    });

    $(document).on("blur", "input, textarea", function() {
        if ($(this).val() == "") {
            $(this).parent('div,.contact-form li').find('label').removeClass('up');
        }

    });
    /**
     * pretty Photo lightbox
     */

    $("a[rel^='prettyPhoto']").prettyPhoto();
});

function onScroll(event) {
    var scrollPos = $(document).scrollTop()+50;
    $('#dedicated-mobile a.trigger').removeClass('open').addClass('close');
    $('#dedicated-mobile ul#dedicated-mobilemenu').slideUp();
    $('.menuBox a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menuBox a').removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
	
}