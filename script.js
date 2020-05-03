function showPage(newPage, push = true) {
    
    $("#content-wrapper").fadeOut(250, function () {

        $("#content-wrapper").load(newPage + ".html #content", function () {

            $("#content-wrapper").fadeIn(250);

        });

    });
    
    if (push) {
        
        history.pushState(newPage, null, newPage);
        
    }

    $("#about-nav").removeClass("active-page");
    $("#portfolio-nav").removeClass("active-page");
    $("#contact-nav").removeClass("active-page");
    $("#" + newPage +"-nav").addClass("active-page");
    
}

$("#about-nav").click(function(e) {
    
    e.preventDefault();
    showPage("about");
    
});

$("#portfolio-nav").click(function(e) {
    
    e.preventDefault();
    showPage("portfolio");
    
});

$("#contact-nav").click(function(e) {
    
    e.preventDefault();
    showPage("contact");
    
});

window.onpopstate = function(e) {
    
    if (e.state != null) {
        
        showPage(e.state, false);
        
    }
    
}