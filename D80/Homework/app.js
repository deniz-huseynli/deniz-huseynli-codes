// Task 1
$(document).ready(function(){
    console.log($("h2").text());
    $("h2").text("Hello");
});

// Task 2
$("#myButton").click(function(){
    $("span").text($("input").val());
});

// Task 3
$("#emptyBtn").click(function(){
    $("#task3").empty();
});



