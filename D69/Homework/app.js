let tbody = document.querySelector("tbody");

function addProduct() {
    let inputlar=document.querySelectorAll("input");
    let sətir=document.createElement("tr");

    let kod=document.createElement("td");
    kod.innerText="HQA775";

    let ad=document.createElement("td");
    ad.innerText=inputlar[0].value;

    let qiymət=document.createElement("td");
    qiymət.innerText=inputlar[1].value + " ədəd";

    let şəkil=document.createElement("td");
    şəkil.innerHTML=`<img src="${inputlar[2].value}" alt="Foto" class="foto">`;

    sətir.append(kod,ad,qiymət,şəkil);
    tbody.append(sətir);

    inputlar[0].value = "";
    inputlar[1].value = "";
    inputlar[2].value = "";
}
