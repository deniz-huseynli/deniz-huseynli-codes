let ad =prompt("Adını yaz:");

localStorage.setItem("istifadeciAdi", ad);
console.log(localStorage.getItem("istifadeciAdi"));
