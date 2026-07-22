//Task 1
let reqemler = [2, 4, 6, 8, 10];
let hasil = reqemler.reduce((a, b)=> a*b);
console.log(hasil);

//Task 2 
let reqemler2 = [-10, -5, -2, -8];
let hamisiMenfi = reqemler2.every(num=> num<0);
console.log(hamisiMenfi);

//Task 3
let qutu = [1, 2, 3, 4, 5];
let qutuKopyası = [...qutu].reverse();
console.log("Yeni:", qutuKopyası);
console.log("Orijinal:", qutu);

//Task 4
let soz = "Kompüter";
let yeniSoz = soz.split("").join(" ");
console.log(yeniSoz);

//Task 5
let sifre = "98765";
let tersSifre = sifre.split("").reverse().join(""); 
let enKicik = Math.min(...tersSifre);
console.log(enKicik);




