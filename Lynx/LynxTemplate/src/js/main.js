$(document).ready(function() {
    $(document).scroll(function () {
        var nav = $(".custom-nav");
        var nav_link = $(".nav-link");
        var logo = $(".navbar-brand");
        var logo_img = $(".logo-img");
        var scroll = $(window).scrollTop();
        
        if (scroll >= 130) {
            nav.addClass('scrolled');
            logo.addClass('mylogo');
            nav_link.css("color", "#193441");
            logo.css("color", "#3E606F");
            logo_img.attr("src", "assets/images/logo-dark.png");
        } else {
            nav.removeClass('scrolled');
            logo.removeClass('mylogo');
            nav_link.css("color", "#D1DBBD");
            logo.css("color", "#D1DBBD");
            logo_img.attr("src", "assets/images/logo-light.png");
        }
        
        if (scroll >= 160) {
            $(".about").find(".row").removeClass("d-none").addClass("animated fadeInUp");
        }
        
        if (scroll >= 980) {
            $(".skills").find(".row").removeClass("d-none").addClass("animated fadeInUp");
        }
        
        if (scroll >= 1390) {
            $(".services").find(".container").removeClass("d-none").addClass("animated fadeInUp");
        }
        
        if (scroll >= 2000) {
            $(".contact").find(".container").removeClass("d-none").addClass("animated fadeInUp");
        }
	});
    
    $(function () {
    thisyear = new Date().getFullYear();
    $('.currentyear').text(thisyear);
    });
    
    var scroll = new SmoothScroll('a[href*="#"]');
});