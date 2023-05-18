$(document).ready(function(){
    $("p").click(function(){
        $("body").addClass("background-color");
    });
    $("button#respond").click(function(){
        $("ul").prepend("<li>I'm great, thanks for asking!</li>");
    });
    // CAT VS DOG
    $("button#meow").click(function(){
        $("ul#bark").removeClass();
        $("ul#meow").prepend("<li>Meow meow</li>");
        $("ul#bark").prepend("<li>Bark bark</li>");
        $("img").addClass(".cat").fadeIn();
    }); 
    $("button#bark").click(function(){
        $("ul#meow").removeClass();
        $("ul#bark").append("<li>Bark bark</li>");
        $("ul#meow").append("<li>Meow meow</li>");
        $("img").addClass(".cat").fadeIn();

    });
});