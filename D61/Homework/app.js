//Task 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//Task 2
let ədədlər = [];
for (let i = 1; i <=15; i++) {
    ədədlər.push(i)   
}
console.log(ədədlər);

//Task 3
let massiv = [2,4,6,8];
for (let i = 0; i < massiv.length; i++) {
    console.log(massiv[i]*3);
}

//Task 4
let cem = 0;
let i = 1;
while (i <= 10) {
    cem += i;
    i++;
}
console.log("Cəm:", cem);

//Task 5
let n = 1;
while (n <= 10) {
    console.log(n);
    n++;
}

//Task 6
let secilenEded = Number(prompt("Bir ədəd daxil edin:"));
let m = 1;

while (m <= secilenEded) {
    console.log(m);
    m++;
}

//Task 7
let reqemler = [10, 20, 30, 40, 50];
for (let i = 0; i < reqemler.length; i++) {
    console.log(reqemler[i]*2);
}

//Task 8
let hedef = 1200;
let pul = 0;
let gun = 0;

while (pul<hedef){
    pul+=15;
    gun++;
}
console.log("Gün:"+ gun);

//Task 9
let array = [14, 7, 22, 3, 10, 15];
for (let i = 0; i < array.length; i++) {
    let x = array[i];
    if (x%2===0) {
        console.log("Cüt ədəd: "+x);
    } else {
        console.log("Tək ədəd: "+x);
    }
}

//Task 10
let hədəf = 150;
let qaçılan = 0;
let gün = 0;

while (qaçılan < hədəf) {
    gün++;
    if (gün%4!==0){
        qaçılan += 10;
    }
}
console.log(gün);