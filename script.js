

document.getElementById("about-ajax").onclick = function () {

    $("#content-wrapper").fadeOut(250, function () {

        $("#content-wrapper").load("index.html #content", function () {

            $("#content-wrapper").fadeIn(250);

        });

    });
    history.pushState("about", null, "about");

};

document.getElementById("portfolio-ajax").onclick = function () {

    $("#content-wrapper").fadeOut(250, function () {

        $("#content-wrapper").load("portfolio.html #content", function () {

            $("#content-wrapper").fadeIn(250);

        });

    });
    history.pushState("portfolio", null, "portfolio");

};

document.getElementById("contact-ajax").onclick = function () {

    $("#content-wrapper").fadeOut(250, function () {

        $("#content-wrapper").load("contact.html #content", function () {

            $("#content-wrapper").fadeIn(250);

        });

    });
    history.pushState("contact", null, "contact");

};

//window.onpopstate = function(e) {
//    
//    if (e.state != null) {
//        
//        
//        
//    }
//    
//}