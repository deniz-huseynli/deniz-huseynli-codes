let janrGiris = document.querySelector("#janrGiris");
let biletSayi = document.querySelector("#biletSayi");
let filmAfişa = document.querySelector("#filmAfişa");
let filmElaveEt = document.querySelector("#filmElaveEt");
let tableBody = document.querySelector("#tableBody");
let filmAfişaÖnBaxiş = document.querySelector("#filmAfişaOnBaxiş");

//Şəkil
filmAfişa.addEventListener('input', function () {
    if (filmAfişa.value!== ""){
        filmAfişaÖnBaxiş.src=filmAfişa.value;
        filmAfişaÖnBaxiş.style.display="block";
    } else {
        filmAfişaÖnBaxiş.style.display="none";
    }
})

//Cədvələ əlavə etmək
filmElaveEt.addEventListener('click', function(){

let janr = janrGiris.value;
let say = biletSayi.value;
let sekilUnvani = filmAfişa.value;


if(janr==="" || say==="" || sekilUnvani=== ""){
    alert("Zəhmət olmasa, bütün xanaları doldurun!");
    return;
}


let yaradilankod = "KOD-"+Math.floor(Math.random()*900+100);

let yeniSətir = "<tr>";
yeniSətir+="<td>"+yaradilankod+"</td>";
yeniSətir+="<td>"+janr+"</td>";
yeniSətir+="<td>"+say+"</td>";
yeniSətir+="<td><img src='"+sekilUnvani+"' class='sekil' alt='Şəkil'></td>";
yeniSətir+="<td><button onclick='if(confirm(\"Silmək istədiyinizə əminsiniz?\"))this.parentElement.parentElement.remove()' class='btn btn-danger'>Sil</button></td>";

tableBody.innerHTML+=yeniSətir;


janrGiris.value="";
biletSayi.value="";
filmAfişa.value="";
filmAfişaÖnBaxiş.style.display="none";

});