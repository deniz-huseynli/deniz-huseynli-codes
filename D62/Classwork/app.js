//Task 1
for (let i = 1; i <=50; i++) {
    if (i%5===0) {
        console.log(i);    
    }
}

//Task 2
let batareya = 0;
while (batareya<=100) {
    console.log("Batareya: " + batareya);
    batareya+=10;
}

//Task 3
let qiymetler = [100, 200, 50, 80];
for (let i = 0; i < qiymetler.length; i++) {
    let = yeniQiymet = qiymetler[i]*0.9;
    console.log(yeniQiymet);
}

//Task 4
let velosiped = 350;
let hərGünYığılan = 20;
let pul = 0;
let gun = 0;

while (pul<velosiped) {
    pul+=hərGünYığılan;
    gun++; 
}
console.log("Gün sayı: " + gun);

//Task 5
let ballar = [45, 80, 32, 90, 65, 50];

for (let i = 0; i < ballar.length; i++) {
    let bal = ballar[i];
    if (bal>=50) {
        console.log("Keçdi: " + bal);
    } else{
        console.log("Kəsildi: " + bal);
    }
    
}
