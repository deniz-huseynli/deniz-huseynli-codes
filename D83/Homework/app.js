let qeydiyyatKartı = document.querySelector("#qeydiyyatKartı");
let girişKartı = document.querySelector("#girişKartı");
let girişəKeçBtn = document.querySelector("#girişəKeçBtn");
let qeydiyyataKeçBtn = document.querySelector("#qeydiyyataKeçBtn");

girişəKeçBtn.addEventListener("click", (event)=>{
    event.preventDefault(); 
    qeydiyyatKartı.classList.add("d-none");
    girişKartı.classList.remove("d-none");
});

qeydiyyataKeçBtn.addEventListener("click", (event)=>{
    event.preventDefault(); 
    girişKartı.classList.add("d-none");
    qeydiyyatKartı.classList.remove("d-none");
});

let şifrəniGöstər = document.querySelector("#şifrəniGöstər");
let loginŞifrə = document.querySelector("#loginŞifrə");

şifrəniGöstər.addEventListener("change", (event)=>{
    if(şifrəniGöstər.checked){
        loginŞifrə.type="text";
    }
    else{
        loginŞifrə.type="password";
    }
});

let qeydiyyatFormu = document.querySelector("#qeydiyyatFormu");
let adGiriş = document.querySelector("#adGiriş");
let emailGiriş = document.querySelector("#emailGiriş");
let şifrəGiriş = document.querySelector("#şifrəGiriş");
let şifrəTəkrar = document.querySelector("#şifrəTəkrar");
let yaşGiriş = document.querySelector("#yaşGiriş");

qeydiyyatFormu.addEventListener("submit", (event)=>{
    event.preventDefault();

    if(şifrəGiriş.value!==şifrəTəkrar.value){
        alert("Xəta! Şifrələr üst-üstə düşmür!");
        return;
    }
    if(parseInt(yaşGiriş.value)<18){
        alert("Yaşınız ən az 18 olmalıdır!");
        return;
    }  

    let yeniİstifadəçi = {
        ad: adGiriş.value,
        email: emailGiriş.value,
        şifrə: şifrəGiriş.value,
        yaş: yaşGiriş.value
    };

    let users = JSON.parse(localStorage.getItem("bütünİstifadəçilər"));
});