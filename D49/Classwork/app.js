let ad = prompt("Adınız:");
console.log("Salam, " + ad + "!");

let reqem1 = prompt("1-ci rəqəm:");
let reqem2 = prompt("2-ci rəqəm:");
let cem = Number(reqem1) + Number(reqem2);
console.log("Cəm: " + cem);

let il = prompt("Doğum ili:");
let indi = 2026;
let yas = indi - Number(il);
console.log("Yaş: " + yas);

let say = 50;
let string = String(say);
console.log(string);

let eded1 = prompt("1-ci ədəd:");
let eded2 = prompt("2-ci ədəd:");
let eded3 = prompt("3-cü ədəd:");
let orta = (Number(eded1) + Number(eded2) + Number(eded3)) / 3;
console.log("Ədədi orta: " + orta);