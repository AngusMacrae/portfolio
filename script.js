function showPage(newPage) {
    
    $("#content-wrapper").fadeOut(250, function () {

        $("#content-wrapper").load(newPage + ".html #content", function () {

            $("#content-wrapper").fadeIn(250);

        });

    });
    
    history.pushState(newPage, null, newPage);
    
}

$("#about-nav").click(function(e) {
    
    e.preventDefault();
    showPage("about");
//    $(".nav-link").toggleClass("active-page")
    $("#about-nav").addClass("active-page");
    $("#portfolio-nav").removeClass("active-page");
    $("#contact-nav").removeClass("active-page");
    
});

$("#portfolio-nav").click(function(e) {
    
    e.preventDefault();
    showPage("portfolio");
    $("#about-nav").removeClass("active-page");
    $("#portfolio-nav").addClass("active-page");
    $("#contact-nav").removeClass("active-page");
    
});

$("#contact-nav").click(function(e) {
    
    e.preventDefault();
    showPage("contact");
    $("#about-nav").removeClass("active-page");
    $("#portfolio-nav").removeClass("active-page");
    $("#contact-nav").addClass("active-page");
    
});

window.onpopstate = function(e) {
    
    if (e.state != null) {
        
        showPage(e.state);
        
    }
    
}