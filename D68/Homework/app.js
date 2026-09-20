let correct=0;

let myH1=document.querySelector("h1");

let question1=prompt("Sual 1: Azərbaycanın paytaxtı hansı şəhərdir?");
if (question1==="Bakı"){
    correct++;
}

let question2=prompt("Sual 2: Əlifbanın ilk hərfi hansıdır?");
if (question2==="A"){
    correct++;
}

let question3=prompt("Sual 3: Bir ildə neçə ay var?");
if (question3==="12"){
    correct++;
}

document.getElementById("result").innerText="Düzgün cavabların sayı: "+correct +" /3";

if (correct===3){
    document.body.style.backgroundColor="green";
} else {
    document.body.style.backgroundColor="red";
}

