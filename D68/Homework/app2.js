function changeMode(){
    let body = document.querySelector("body");
    let h1 = document.querySelector("h1");
    body.classList.toggle("dark-mode");
    h1.classList.toggle("dark-mode");
}