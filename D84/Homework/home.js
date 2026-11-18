let xosGeldinMesaji = document.querySelector("#xosGeldinMesaji");
let cixisDüymesi = document.querySelector("#cixisDüymesi");

// 1. Aktiv istifadəçini gətiririk (RAM yaddaşından)
let aktivİstifadəçi = sessionStorage.getItem("aktivİstifadəçi");

// 2. Əgər kimsə login olmadan bu linkə giribsə (aktivİstifadəçi yoxdursa), onu geri qovuruq
if (aktivİstifadəçi === null) {
    alert("Zəhmət olmasa əvvəlcə giriş edin! Bura məxfi zonadır.");
    window.location.href = "./auth.html"; // Qeydiyyat/giriş səhifəsinə yönləndiririk
} else {
    // 3. Əgər hər şey qaydasındadırsa, adını ekrana yazdırırıq
    xosGeldinMesaji.innerText = "Xoş gəldin, " + aktivİstifadəçi + "!";
}

// 4. Çıxış düyməsi məntiqi
cixisDüymesi.addEventListener("click", () => {
    // Session yaddaşını təmizləyirik (aktiv istifadəçini silirik)
    sessionStorage.removeItem("aktivİstifadəçi");

    alert("Hesabdan uğurla çıxış etdiniz. Hələlik!");
    
    // Geri qarşılama səhifəsinə qaytarırıq
    window.location.href = "./auth.html";
});

let cehrayiBtn = document.querySelector("#cehrayiBtn");
let yasilBtn = document.querySelector("#yasilBtn");


cehrayiBtn.addEventListener("click", () => {
    document.body.style.background = "rgb(252, 228, 236)";
});

yasilBtn.addEventListener("click", () => {
    document.body.style.background = "rgb(167, 209, 171)";
});
