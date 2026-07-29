//Task 1
let nums = [-2,-1,1,2,3,4];
let newNums = [];

for (const num of nums) {
    if (num>0 && num%2===0) {
        newNums.push(num);
    }
}
console.log(newNums);

//Task 2
let cem = 0;
let i = 1;

while (i<=100) {
    if (i>50) {
        break;
    }
    cem+=i;
    i++;
}
console.log(cem);

//Task 3
const adlar = ["Salam", "mənim", "adım", "Dənizdir"];
let cumle = "";

for (const ad of adlar) {
  cumle+=ad + " ";
}
console.log(cumle);


//Task 4
let heyvanlar = ["pişik", "it", "dovşan"];

for (const heyvan of heyvanlar) {
    console.log(heyvan.toUpperCase());
}

//Task 5
let names = ["Aylin", "Vəli", "Əli", "Aytən"];

for (const name of names) {
    if (name==="Əli"){
        break;
    }
    console.log(name);
}

//Task 6
for (let n = 0; n <= 5; n++) {
    if (n===3){
        continue;
    }
    console.log(n);
}

//Task 7
for (let n = 1; n <= 10; n++) {
    if (n===7){
        break;
    }
    console.log(n);
}


