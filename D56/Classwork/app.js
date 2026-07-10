//Task 1
let planetlər = ["Merkuri", "Venera"];
planetlər.push("Yer");
console.log(planetlər); 

//Task 2
let rənglər = ["Qırmızı", "Yaşıl", "Mavi"];
rənglər.pop();
console.log(rənglər);

//Task 3
let ədədlər = [2,4,6,8,10];
ədədlər.forEach(ədəd => {
    console.log("Dəyərlər: ", ədəd);
});

//Task 4 
let rəqəmlər = [1, 2, 3, 4, 5];
let cəm = 0;
rəqəmlər.forEach(rəqəm => {
    cəm +=rəqəm;
});
console.log("Ədədlərin cəmi: ", cəm);