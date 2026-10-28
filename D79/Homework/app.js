$(document).ready(function(){

//1.qutu
let toggleEdilib = false;

$("#toggleButton").click(function() {
    if (!toggleEdilib) {
        $("#toggleText").hide();
        $("#toggleButton").text("SHOW");
        toggleEdilib = true;
    } else{
        $("#toggleText").show();
        $("#toggleButton").text("HIDE");
        toggleEdilib = false;
    }
});

//2.qutu
let fadeEdilib = false;

$("#fadeOutButton").click(function() {
    $("#fadeOutText").fadeToggle(500, function() {
        if (!fadeEdilib) {
            $("#fadeOutButton").text("FADE IN");
            fadeEdilib = true;
        } else {
            $("#fadeOutButton").text("FADE OUT");
            fadeEdilib = false;
        }
    });
});

//3.qutu
let solgunlasib = false;

$("#fadeToButton").click(function(){
    if (!solgunlasib) {
        $("#fadeToText").fadeTo(500, 0.25,function(){
            $("#fadeToButton").text("FADE IN");
        });
        solgunlasib = true;
    } else{
        $("#fadeToText").fadeTo("slow", 1.0,function(){
            $("#fadeToButton").text("FADE TO 25%");
        });
        solgunlasib = false;
    }
});

//4.qutu
let slideEdilib = false;

$("#slideButton").click(function() {
    if (!slideEdilib){
        $("#slideText").slideDown(500, function() {
            $("#slideButton").text("SLIDE DOWN");
        });
        slideEdilib = true;
    } else{
        $("#slideText").slideUp(500, function() {
            $("#slideButton").text("SLIDE UP");
        });
        slideEdilib = false;
    }
});



});