//Task 1
let numbers = [7, 11, 15, 8, 19, 22, 3];
let ilkCüt = numbers.find(num => num%2===0);
console.log(ilkCüt);

//Task 2
let cities = ["Şəki", "Bakı", "Gəncə", "Sumqayıt", "Lənkəran", "Özbəkistan"];
let citiesOrder = cities.sort((a, b) => a.localeCompare(b, 'az'));
console.log(citiesOrder);

//Task 3
let ages = [12, 15, 17, 21, 14, 30, 10];
let ilkBöyük = ages.find(age => age>=18);
console.log(ilkBöyük);

//Task 4
let servicePrices = [250, 15, 80, 1200, 45, 90, 5];
let servicePricesOrder = servicePrices.sort((a, b)=> a-b);
console.log(servicePricesOrder);

//Task 5
let words = ["kitab", "kompüter", "ev", "proqramlaşdırma", "dəftər"];
let wordsOrder = words.sort((a, b)=> a.length-b.length);
console.log(wordsOrder);

//Task 6
let activePromos = ["SUMMER20", "NEWYEAR", "XEZRI10", "BAKU2026"];
function check(){
    let kod = document.getElementById("promoKod").value;
    let kodTapıldı=activePromos.find(promo=> promo===kod);
    if(kodTapıldı){
        alert("Promokod qəbul olundu!");
    } else{
        alert("Belə bir promokod yoxdur!");
    }
}

//Task 7
let students = [["Aysel", 75], ["Kənan", 92], ["Nigar", 45], ["Emin", 88], ["Fərid", 60]];
let studentOrder = students.sort((a, b)=> b[1]-a[1]);
console.log(studentOrder);

function searchStudent(){
    let ad = document.getElementById("studentSearch").value;
    let studentFound = students.find(student=> student[0]===ad);

    if(studentFound){
        alert("Tələbə tapıldı: Balı: " + studentFound[1]);
    } else{
        alert("Təəssüf, belə bir tələbə tapılmadı.");
    }
}

//Task 8
let users = [["Ayan", [10, 20, 30]], ["Murad", [50, 40]], ["Nəzrin", [5, 10, 15, 20]]];

let usersOrder = users.sort((a, b) =>{
    let sumA = 0;
    a[1].forEach(score=> sumA+=score);

    let sumB = 0;
    b[1].forEach(score=> sumB+=score);

    return sumB - sumA;
});
console.log(usersOrder);


//Task 9
let activePins = ["1111", "5555", "9876", "1234"];

function checkPin(){
    let pin = document.getElementById("pinKod").value;
    let pinFound = activePins.find(p=>p===pin);

    if(pinFound){
        alert("Giriş uğurludur!");
    } else{
        alert("Yalnış pin-kod!");
    }
}

//Task 10
let products = [["Telefon", 1200], ["Noutbuk", 2500], ["Qulaqlıq", 150], ["Klaviatura", 80], ["Siçan", 45]];

let productsOrder=products.sort((a, b)=> a[1]-b[1]);
console.log(productsOrder);

function searchProduct(){
    let name = document.getElementById("productName").value;
    let productFound = products.find(p=> p[0]===name);     
    
    if (productFound){
        alert("Məhsul tapıldı! Qiyməti: "+productFound[1] +" AZN");
    } else {
        alert("Təəssüf, belə bir məhsul tapılmadı.");
    }
}
