// JavaScript Document

// $$ PLUGINS Y FUNCIONES
$(document).ready(function() {
//Smooth scroll
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: (target.offset().top-0)
                    }, 1000);
                    return false;
                }
            }
        });
    });
//Clase toda la pantalla 100% de alto
    $('.fullheight').height($(window).height());
//Ir arriba
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#ir-arriba").fadeIn();
        } else {
            $("#ir-arriba").fadeOut();
        }
    });
//history back	
$('a.volver').click(function(){
        parent.history.back();
        return false;
    });	
});
//Collapse
    $('dl dd').hide();
    $('dl dt').click(function() {
        if ($(this).hasClass('activo')) {
            $(this).removeClass('activo');
            $(this).next().slideUp();
        } else {
            $('dl dt').removeClass('activo');
            $(this).addClass('activo');
            $('dl dd').slideUp();
            $(this).next().slideDown();
        }
    });
//Tabs
    $(".tabs li").click(function() {
        $(".tabs li").removeClass('active');
        $(this).addClass("active");
        $(".tab_content").hide();
        var selected_tab = $(this).find("a").attr("href");
        $(selected_tab).fadeIn();
        return false;
    });
// Caption
    $('.standard').hover(
        function() {
            $(this).find('.caption').show();
        },
        function() {
            $(this).find('.caption').hide();
        }
    );
    $('.fade').hover(
        function() {
            $(this).find('.caption').fadeIn(250);
        },
        function() {
            $(this).find('.caption').fadeOut(250);
        }
    );
    $('.slide').hover(
        function() {
            $(this).find('.caption').slideDown(250);
        },
        function() {
            $(this).find('.caption').slideUp(250);
        }
    );
});