//Task 1
let numbers = [14, 25, 8, -3, 19, -12, 5];
let ilkMenfi = numbers.find(num => num<0);
console.log(ilkMenfi);

//Task 2
let fruits = ["Üzüm", "Alma", "Çiyələk", "Banan", "Ərik", "Şaftalı"];
let fruitsOrder = fruits.sort((a, b) => a.localeCompare(b, 'az'));
console.log(fruitsOrder);

//Task 3
let pageCounts = [120, 450, 85, 320, 600, 210];
let pageCountsOrder = pageCounts.sort((a, b) => b-a);
console.log(pageCountsOrder);

//Task 4
let validTickets = ["VIP100", "STD205", "ECO55", "BAKU2026"];

function checkTicket(){
    let ticketCode = document.getElementById("biletKod").value;
    let ticketFound = validTickets.find(ticket=>ticket===ticketCode);

    if(ticketFound){
        alert("Bilet keçərlidir! Tədbirə daxil ola bilərsiniz.");
    } else{
        alert("Təəssüf, keçərsiz bilet kodu!");
    }
}

//Task 5
let employees = [["Leyla", 1500], ["Tural", 2200], ["Kamran", 800], ["Günel", 1900], ["Orxan", 1100]];
let employeesOrder = employees.sort((a, b) => a[1]-b[1]);
console.log(employeesOrder);

function searchEmployee() {
    let employeeName = document.getElementById("işçiAdı").value;
    let employeeFound = employees.find(e=>e[0]===employeeName);
    
    if (employeeFound){
        alert("İşçi tapıldı! Maaşı: "+employeeFound[1] +" AZN");
    } else {
        alert("Təəssüf, belə bir işçi tapılmadı.");
    }
}

//Task 6
studentGrades = [["Rauf", [80, 90, 70]], ["Ləman", [95, 100]], ["Samir", [60, 65, 70, 75]]];

let studentsGradeOrder = studentGrades.sort((a, b) =>{
    let cemA = 0;
    a[1].forEach(bal => cemA+=bal);
    let edediOrtaA = cemA/a[1].length;

    let cemB = 0;
    b[1].forEach(bal => cemB+=bal);
    let edediOrtaB = cemB/b[1].length;

    return edediOrtaB - edediOrtaA;
});
console.log(studentGrades);


