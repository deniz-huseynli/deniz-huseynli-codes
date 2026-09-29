let items = document.querySelectorAll('.item');

items.forEach((item)=>{
    let button = item.querySelector('button');

    button.addEventListener('click', ()=>{
        items.forEach((reset) =>{
            reset.style.backgroundColor = "";
            reset.style.borderColor = "";
            reset.style.width = "";
        });

        item.style.backgroundColor = "lightgreen";
        item.style.borderColor = "green";
        item.style.width = "250px";
        button.innerText = "Seçildi";
    });
});