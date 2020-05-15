$(document).ready(function(){

    $("#portfolio-preload").load("portfolio.html #content");
    $("#contact-preload").load("contact.html #content");
    $("#about-preload").load("about.html #content");
    // enable buttons

});

function showPage(newPage, push = true) {
    
    let toPgStr = "#" + newPage + "-preload";
    
    $("#content-wrapper").fadeOut(200, function () {

        $("#content-wrapper").html($(toPgStr).html());
        $("#content-wrapper").fadeIn(200);

    });
    
    if (push) {
        
        history.pushState(newPage, null, newPage);
        
    }

    $(".nav-link").removeClass("active-page");
    $("#" + newPage +"-nav").addClass("active-page");
    
}

$(".nav-link").click(function(e) {
    
    e.preventDefault();
    showPage($(this).attr("id").slice(0,-4));
    
});

$("#about-me-contact-me-button").click(function(e) {
    
    e.preventDefault();
    showPage("contact");
    
});

$("#about-me-portfolio-button").click(function(e) {
    
    e.preventDefault();
    showPage("portfolio");
    
});

window.onpopstate = function(e) {
    
    if (e.state == null) {
    
        showPage("about", false);
        
    } else {
        
        showPage(e.state, false);
        
    }
    
}