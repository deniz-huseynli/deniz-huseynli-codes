$(document).ready(function(){
    $("h1").css({
        backgroundColor: "blue",
        color: "white",
        border: "2px solid black",
    });

    $("#toggleButton").click(function(){
        $("h1").toggle(1000)
    });
});