//Task 1
let movsum=prompt("İlin fəslini daxil edin:");

sessionStorage.setItem("fəsil", movsum);
console.log(sessionStorage.getItem("fəsil"));

//Task 2
let kitablar = ["Qrin Qeyblz malikanəsinin qızı Anni", "Harry Potter", "Medusa'nın Ölü Kumları"];
localStorage.setItem("kitablarim", JSON.stringify(kitablar));
let kitablar2 = JSON.parse(localStorage.getItem("kitablarim"));

kitablar2.forEach((kitab)=>{
    console.log(kitab);
});

//Task 3
let ad = localStorage.getItem("istifadeci");
if (ad===null){
    let ad2 = prompt("Adınızı daxil edin:");
    localStorage.setItem("istifadeci", ad2);
    console.log("Xoş gəldin yenidən, "+ad+"!");
} else if (ad!==null){
    console.log("Xoş gəldin yenidən, "+ad+"!");
}