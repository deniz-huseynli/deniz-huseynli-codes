let məhsullarEkranı = document.querySelector("#məhsullarEkranı");
let əlavəEtEkranı = document.querySelector("#əlavəEtEkranı");
let əlavəEtBtn = document.querySelector("#əlavəEtBtn");
let səbətEkranı = document.querySelector("#səbətEkranı");
let məhsullarBtn = document.querySelector("#məhsullarBtn");
let səbətBtn = document.querySelector("#səbətBtn");


let məhsulFormu = document.querySelector("#məhsulFormu");
let məhsulAdıGiriş = document.querySelector("#məhsulAdıGiriş");
let məhsulQiymətiGiriş = document.querySelector("#məhsulQiymətiGiriş");
let məhsulŞəkilGiriş = document.querySelector("#məhsulŞəkilGiriş");
let şəkilÖnBaxış = document.querySelector("#şəkilÖnBaxış");


let məhsullarQutusu = document.querySelector("#məhsullarQutusu");
let boşMəhsulMesajı = document.querySelector("#boşMəhsulMesajı");
let səbətSayı = document.querySelector("#səbətSayı");
let səbətQutusu = document.querySelector("#səbətQutusu");
let ümumiMəbləğ = document.querySelector("#ümumiMəbləğ");
let səbətiTamTəmizləBtn = document.querySelector("#səbətiTamTəmizləBtn");
let sifarişBtn = document.querySelector("#sifarişBtn");

function ekranıGöstər(aktivEkran){

məhsullarEkranı.classList.add("d-none");
əlavəEtEkranı.classList.add("d-none");
səbətEkranı.classList.add("d-none");

aktivEkran.classList.remove("d-none");

}

məhsullarBtn.addEventListener("click",()=> {
    ekranıGöstər(məhsullarEkranı);
});

əlavəEtBtn.addEventListener("click",()=> {
    ekranıGöstər(əlavəEtEkranı);
});

səbətBtn.addEventListener("click",()=> {
    ekranıGöstər(səbətEkranı);
    səbətiGöstər();
});

məhsulŞəkilGiriş.addEventListener("input",()=> {
    if(məhsulŞəkilGiriş.value.trim()!== "") {
        şəkilÖnBaxış.src = məhsulŞəkilGiriş.value;
        şəkilÖnBaxış.style.display = "block";
    } else{
        şəkilÖnBaxış.style.display = "none";
    }
});

let məhsullarSiyahısı = JSON.parse(localStorage.getItem("mehsullarSiyahisi")) || [];
let səbətSiyahısı = JSON.parse(localStorage.getItem("sebetSiyahisi")) || [];


məhsulFormu.addEventListener("submit",(event)=> {
    event.preventDefault();

    let yeniMəhsul = {
        ad: məhsulAdıGiriş.value.trim(),
        qiymət: Number(məhsulQiymətiGiriş.value),
        şəkil: məhsulŞəkilGiriş.value.trim()
    };

    məhsullarSiyahısı.push(yeniMəhsul);
    localStorage.setItem("mehsullarSiyahisi", JSON.stringify(məhsullarSiyahısı));

    alert("Məhsul əlavə edildi!");

    məhsulFormu.reset();
    şəkilÖnBaxış.style.display = "none";

    məhsullarıGöstər();
    ekranıGöstər(məhsullarEkranı);
});

 function məhsullarıGöstər() {
    məhsullarQutusu.innerHTML = "";

    if (məhsullarSiyahısı.length === 0) {
        boşMəhsulMesajı.classList.remove("d-none");
        return;
    } else {
        boşMəhsulMesajı.classList.add("d-none");

        for (let i = 0; i < məhsullarSiyahısı.length; i++) {
            let məhsul = məhsullarSiyahısı[i];
        
            let kartHTML = `
                <div class="card shadow-sm məhsul-kartı">
                <img src="${məhsul.şəkil}" class="məhsul-şəkli" alt="${məhsul.ad}">
                <div class="card-body d-flex flex-column justify-content-between">
                <div>
                <h5 class="card-title fw-bold">${məhsul.ad}</h5>
                <p class="card-text text-success fw-bold fs-5">${məhsul.qiymət} ₼</p>
                </div>
                <button onclick="səbətəƏlavəEt(${i},this)" class="btn btn-primary w-100 mt-2">
                <i class="fa-solid fa-cart-plus"></i> Səbətə Əlavə Et
                </button>
                </div>
                </div>
                `;
                məhsullarQutusu.innerHTML+=kartHTML;
        }  

    }
 
}
məhsullarıGöstər();