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
                        scrollTop: (target.offset().top - 150)
                    }, 1000);
                    return false;
                }
            }
        });
    });
//Ir arriba
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $("#go-top").fadeIn();
            } else {
                $("#go-top").fadeOut();
            }
        });
//history back	
        $('a.volver').click(function() {
            parent.history.back();
            return false;
        });
});
