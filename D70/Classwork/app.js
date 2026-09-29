let myH1 = document.querySelector('h1');
let myButton=document.querySelector('button');

myButton.addEventListener('click', ()=>{
    myH1.innerText="Hello world";
    myH1.style.color = "purple";
});


