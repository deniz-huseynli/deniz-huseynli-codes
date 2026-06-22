let eded1 = 15;
let eded2 = 11;
if (eded1 > 10 && eded2 > 10){
    console.log("Hər iki ədəd böyükdür!");
}

let hava = prompt("Hava:");
let temperatur = +(prompt("Temperatur:"));
if (hava == 'günəşlidir' && temperatur > 20 && temperatur < 40){
    console.log("Gəzintiyə çıxmaq olar!");
} 
else{
    console.log("Gəzintiyə çıxmaq olmaz!");
}

let eded = 8;
if (eded > 0 && eded%2 == 0){
    console.log("Bu müsbət cüt ədəddir!");
} 
else{
    console.log("Bu müsbət cüt ədəd deyil!");
}

let yas = +(prompt("Yaşını daxil et:"));
let bilet = prompt("Biletin var? (bəli/xeyr)");
if (yas > 18 && bilet == "bəli"){
    console.log("Kino zalına keçid icazəlidir");
} 
else{
    console.log("Kino zalına keçid icazəli deyil");
}

let parol = "parol123";
let tekrar = "parol123";
if (parol === tekrar && parol.length >5){
    console.log("Parol uğurla yaradıldı!");
}