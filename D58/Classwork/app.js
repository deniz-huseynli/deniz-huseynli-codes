//Task 1
let numbers = [12, 5, 8, -3, 19, -8, 2];
let ilkMenfi = numbers.find(num => num<0);
console.log(ilkMenfi);

//Task 2
let books = ["Xəmsə", "Kitabi-Dədə Qorqud", "Azərbaycan nağılları", "Ölüb gedənlər", "Cırtdan"];
let booksOrder = books.sort((a, b) => a.localeCompare(b,'az'));
console.log(booksOrder);

//Task 3
let prices = [45, 120, 8, 99, 350, 15, 75];
let böyükdənKiçiyə= prices.sort((b, a) => b-a);
console.log(böyükdənKiçiyə);