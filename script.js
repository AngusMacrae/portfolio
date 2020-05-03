function showPage(newPage, push = true) {
    
    $("#content-wrapper").fadeOut(200, function () {

        $("#content-wrapper").load(newPage + ".html #content", function () {

            $("#content-wrapper").fadeIn(200);

        });

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

window.onpopstate = function(e) {
    
    if (e.state == null) {
    
        showPage("about", false);
        
    } else {
        
        showPage(e.state, false);
        
    }
    
}