//Task 1
let təvəllüd = new Date("2011-01-11");
let tarix = new Date();
let yaş = tarix.getFullYear()-təvəllüd.getFullYear();

document.getElementById("yasi").innerText="Mənim yaşım:"+ yaş;

//Task 2
let saniyə = 0;
let spanSaniyə = document.getElementById("saniyə");

function timer(){
    saniyə++; 
    document.getElementById("saniyə").innerText=saniyə;
}
setInterval(timer, 1000);