//Task 1
let scores = [45, 60, 80, 30, 95];
for (let el of scores) {
  console.log(el+10);
}

//Task 2
for (let i = 1; i <= 10; i++) {
    if(i%2===0){
        continue;
    }
    console.log(i);
}

//Task 3
let fruits = ["Alma", "Banan", "Qarpız", "Gilas", "Yemiş"];
for (let element of fruits) {
    if (element==="Qarpız"||element==="Yemiş"){
        continue;
    }
    console.log(element);
}

//Task 4
let prices = [15, 25, 40, 0, 50, 80];
for (let price of prices) {
    if(price===0){
    console.log("Xətalı qiymət tapıldı, proses dayandırıldı!");
    break;
}
  console.log(price);
}