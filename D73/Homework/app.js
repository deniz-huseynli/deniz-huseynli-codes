let kateqoriyaGiris = document.querySelector("#kateqoriyaGiris");
let sayGiris = document.querySelector("#sayGiris");
let sekilLinkGiris = document.querySelector("#sekilLinkGiris");
let elaveEtDuyme = document.querySelector("#elaveEtDuyme");
let cedvelGovdesi = document.querySelector("#cedvelGovdesi");
let sekilOnBaxis = document.querySelector("#sekilOnBaxis");

//Şəkil
sekilLinkGiris.addEventListener('input', function () {
    if (sekilLinkGiris.value!== ""){
        sekilOnBaxis.src=sekilLinkGiris.value;
        sekilOnBaxis.style.display="block";
    } else {
        sekilOnBaxis.style.display="none";
    }
})

//Cədvələ əlavə etmək
elaveEtDuyme.addEventListener('click', function(){

let kateqoriya = kateqoriyaGiris.value;
let say = sayGiris.value;
let sekilUnvani = sekilLinkGiris.value;


if(kateqoriya==="" || say==="" || sekilUnvani=== ""){
    alert("Zəhmət olmasa, bütün xanaları doldurun!");
    return;
}


let yaradilankod = "KOD-"+Math.floor(Math.random()*900+100);

let yeniSətir = "<tr>";
yeniSətir+="<td>"+yaradilankod+"</td>";
yeniSətir+="<td>"+kateqoriya+"</td>";
yeniSətir+="<td>"+say+"</td>";
yeniSətir+="<td><img src='"+sekilUnvani+"' class='sekil' alt='Şəkil'></td>";
yeniSətir+="<td><button onclick='if(confirm(\"Silmək istədiyinizə əminsiniz?\"))this.parentElement.parentElement.remove()' class='btn btn-danger'>Sil</button></td>";

cedvelGovdesi.innerHTML+=yeniSətir;


kateqoriyaGiris.value="";
sayGiris.value="";
sekilLinkGiris.value="";
sekilOnBaxis.style.display="none";

});