//Task 1
hecm = 0;
gun = 0;

while (hecm<100) {
    gun++;
    if (gun%3!==0) {
        hecm+=20;
    }
}
console.log("Bakı tam doldurmaq üçün lazım olan gün sayı: "+gun);

//Task 2
let faiz = 0;
let saat = 0;

while (faiz<100) {
    saat++;
    if (saat%2!==0) {
        faiz+=25;
    }
}
console.log("Batareyanın dolması üçün lazım olan saat: "+saat);

//Task 3
let banan = 0;
let gün = 0;
while (banan<80) {
    gün++;
    if (gün%5===0) {
        banan-=5;
    } else{
        banan+=10;
    }
}
console.log("Bananı toplamaq üçün lazım olan gün sayı: "+gün);

//Task 4
let hündürlük = 0;
let İlbizəLazımOlangün = 0;

while (hündürlük<30) {
    İlbizəLazımOlangün++;
    hündürlük+=3;
}
console.log("İlbizə lazım olan gün sayı: "+İlbizəLazımOlangün);

//Task 5
for (let sətir = 1; sətir <= 5; sətir++) {
    let ulduz = "";
    for (let j = 1; j <= sətir; j++) {
        ulduz += "*";
    }
    console.log(ulduz);
}

