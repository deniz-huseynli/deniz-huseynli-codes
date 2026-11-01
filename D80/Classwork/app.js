$(document).ready(function(){
    console.log($("#p1").text());
    $("#p1").text("Salam dünya")
    console.log($("#p1").text());
    console.log($("#task1").html());

});

//Task 2
$("#myButton").click(function(){
    alert($("input").val());
});

$("input").val("Adını yaz")

//Task 3
$("#removeBtn").click(function(){
    $("#task3").remove();
});

$("#emptyBtn").click(function(){
    $("#task3").empty();
});