let yas = Number(prompt("Yaşını daxil et:"));
if (yas > 18){
    console.log("Sən böyüksən");
} else{
    console.log("Sən hələ balacasan");
}

let reqem = Number(prompt("Bir rəqəm daxil et:"));
if (reqem > 0){
    console.log("Müsbət rəqəmdir");
} else if (reqem < 0){
    console.log("Mənfi rəqəmdir");
} else{
    console.log("Sıfırdır");
}

let parol = prompt("Parol daxil et:");
if (parol == "12345"){
    console.log("Daxil oldun");
} else{
    console.log("Parol səhvdir");
}

let temperatur = Number(prompt("Hava temperaturu:"));
if (temperatur > 25){
    console.log("Hava istidir");
} else if (temperatur > 15 && temperatur < 25){
    console.log("Hava normaldır");
} else{
    console.log("Hava soyuqdur");
}

let eded = Number(prompt("Bir ədəd daxil et:"));
if (eded % 2 == 0){
    console.log("Cüt ədəddir");
} else{
    console.log("Tək ədəddir");
}

