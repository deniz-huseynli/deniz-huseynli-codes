let myH1 = document.querySelector('h1');

myH1.addEventListener('click', () => {
    if (myH1.style.color!=="lightblue"){
        myH1.innerText = "Başlıq dəyişdi";
        myH1.style.color = "lightblue";
    } else{
        myH1.innerText = "Başlığı dəyişdir";
        myH1.style.color = "black";
    }
});