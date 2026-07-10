//Task 1
let elementler = ["A", "B"];
elementler.unshift("X", "Y");
elementler.push("Z", "W");
console.log(elementler);

//Task 2
let ballar = [45, 80, 55, 90, 72, 30];
ballar.forEach(bal => {
    console.log("Bal: ",bal);
});

//Task 3
let mehsullar = ["Köynək", "Şalvar", "Papaq"];
let kohneQiymetler = [10, 20, 30];
let yeniQiymetler = kohneQiymetler.map(qiymet => qiymet*3);
console.log(yeniQiymetler); 

//Task 4
let diller = ["İngilis", "Fransız", "Alman"];
diller.unshift("Rus");
console.log(diller);

//Task 5
let fenler = ["Fizika", "Riyaziyyat", "İngilis dili"];
let silinenFenn = fenler.shift();
console.log("Silinən element:",silinenFenn);

//Task 6
let meyveler = ["Alma", "Armud", "Banan"];
meyveler.push("Üzüm", "Nar");
meyveler.pop();
console.log(meyveler);

//Task 7
let reqemler = [2, 3, 4, 5, 6];
reqemler.unshift(0, 1);
reqemler.shift();
console.log(reqemler);

//Task 8
let meyvələr = ["banan", "çiyələk", "portağal"];
meyvələr.forEach(meyvə => {
    console.log(meyvə.toUpperCase());
});

//Task 9
let cutEdedler = [4, 6, 8, 10, 12];
cutEdedler.push(14, 16);
cutEdedler.pop();
cutEdedler.shift();
cutEdedler.unshift(2);
console.log(cutEdedler);

//Task 10
let rengler = ["Çəhrayı", "Sarı", "Mavi"];
rengler.push("Yaşıl");
rengler.shift(); 
rengler.forEach(reng => {
    console.log(reng);
});
