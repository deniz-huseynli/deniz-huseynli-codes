$(document).ready(function(){
    $("h1").css({
        backgroundColor: "lightblue",
        color: "blue",
        border: "2px solid black",
    });

    $("#hideBtn").click(function(){
        $("h1").hide(1000);
    });

    $("#showBtn").click(function(){
        $("h1").show(1000);
    });

    $("#toggleBtn").click(function(){
        $("h1").toggle(1000);
    });

    $("#styleBtn").click(function(){
        $("h1").css({
            backgroundColor: "blue",
            color: "white",
            fontSize: "40px",
        });
    });
});

