let temperatur = prompt("Hava temperaturu:");
if (temperatur<0){
    console.log("Hava şaxtalıdır");
} else {
    console.log("Hava mülayimdir");
}

let color = prompt("Rəng adı daxil et:");
if (color !== ""){
    console.log("Seçdiyiniz rəng: " +color);
} else{
    console.log("Heç bir rəng yazmadınız!");
}

let bal = prompt("Ballarınız:");
if (bal >=50){
    console.log("İmtahandan keçdiniz 🎉");
} else{
    console.log("Kəsildiniz ❌");
}

let password = prompt("Parolu daxil edin:");
if (password =="qwerty"){
    console.log("Giriş uğurludur");
} else{
    console.log("Şifrə səhvdir");
}

let deyer = prompt("Bir rəqəm daxil edin:");
if (deyer === 5){ 
    console.log("Tam olaraq 5 daxil etdiniz");
} else if (deyer == 5){
    console.log("Dəyər 5-dir, amma tipi fərqlidir");
} else{
    console.log("Tamamilə fərqli bir şeydir");
}

let seher = prompt("Şəhər:");
let yas = prompt("Yaşınız:");
if (seher=="Bakı"&& yas>16){
    console.log("Tədbirə dəvətlisiniz!");
} else{
    console.log("Şərtlər ödənmir");
}

let meyvə = prompt("Meyvə adı daxil et:");
if (meyvə == "Alma"||meyvə == "Armud"){
    console.log("Bu meyvə bağımızda var");
} else{
    console.log("Bu meyvə bizdə yoxdur");
}

let kupon = prompt("Kupon kodunu daxil edin:");
let qiymet = prompt("Məhsulun qiymətini daxil edin:");
if (kupon == "ENDİRİM"&& qiymet>100){
    console.log("20% endirim tətbiq olundu");
} else{
    console.log("Endirim mümkün olmadı");
}

let gun = prompt("Həftənin günü:");
(gun == "Şənbə"||gun == "Bazar")?console.log("İstirahət günü ☕"):(gun == "")?console.log("Gün daxil edilməyib 🗓️"):console.log("İş günüdür 💻");

let pul = prompt("Balansınızdakı pul:");
(pul>=50)?console.log("Balans kifayətdir ✅"):(pul =="0"||pul =="")?console.log("Balansınız tamamilə boşdur ⛔"):console.log("Balans azdır, artırın ⚠️");