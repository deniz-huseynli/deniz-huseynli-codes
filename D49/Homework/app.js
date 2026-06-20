let soyad = prompt("Soyadınız:");
console.log(soyad+" müəllim");

let seher = prompt("Yaşadığınız şəhər:");
console.log("Siz "+seher+ " şəhərində yaşayırsınız.");

let reng = prompt("Ən sevdiyiniz rəng:");
console.log(reng+" rəngi həqiqətən çox gözəldir!");

let eded1 = prompt("1-ci ədəd:");
let eded2 = prompt("2-ci ədəd:");
let ferq = Number(eded1) - Number(eded2);
console.log("Ədədlərin fərqi: "+ferq);

let en = +(prompt("Düzbucaqlının eni:"));
let uzunluq = +(prompt("Düzbucaqlının uzunluğu:"));
console.log("Düzbucaqlının sahəsi: "+(en*uzunluq));

let bolunen = (prompt("Bölünən:"));
let bolen = (prompt("Bölən:"));
console.log("Qalıq: "+(Number(bolunen)% Number(bolen)));

let yas = +(prompt("İndiki yaşınız:"));
console.log("Təqaüdə çıxmağınıza qalan il: "+(65-yas));

let dogumİli = +(prompt("Doğulduğunuz ili daxil edin:"));
console.log("Məktəbi bitirmə ili: "+(dogumİli+17));

let il = Number(prompt("İl yazın:"));
let esr = Math.floor(il/100)+1;
console.log("Əsr: "+esr);

let sistemAciqdir = true;
let string = String(sistemAciqdir);
console.log("Özü: "+string);
console.log("Tipi: "+typeof string);

let mehsulQiymeti = "150";
let yeniQiymeti = Number(mehsulQiymeti) +20;
console.log("Yeni qiymət: "+ yeniQiymeti);

let gun = "25";
let gun2 = Number(gun);
console.log("Gün: "+gun2);

let teref1 = (prompt("1-ci tərəf:"));
let teref2 = (prompt("2-ci tərəf:"));
let teref3 = (prompt("3-cü tərəf:"));
console.log("Perimetr: " +(Number(teref1) + Number(teref2) + Number(teref3)));

let mehsul1 = +(prompt("1-ci məhsulun qiyməti:"));
let mehsul2 = +(prompt("2-ci məhsulun qiyməti:"));
let mehsul3 = +(prompt("3-cü məhsulun qiyməti:"));
console.log("Ümumi qiymət: "+(mehsul1 + mehsul2 + mehsul3));

let riyaziyyat = +(prompt("Riyaziyyat balı:"));
let fizika = +(prompt("Fizika balı:"));
let informatika = +(prompt("İnformatika balı:"));
let ortalama = (riyaziyyat + fizika + informatika)/3;
console.log("Ortalama bal: "+ortalama);


