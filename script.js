document.getElementById("button-portfolio").onclick = function () {
    
    $("#content-container").load("portfolio.html");
    history.pushState(null, null, "portfolio");
    
};

document.getElementById("button-about").onclick = function () {
    
    $("#content-container").load("index.html");
    history.pushState(null, null, "about");
    
};

document.getElementById("button-contact").onclick = function () {
    
    $("#content-container").load("contact.html");
    history.pushState(null, null, "contact");
    
};