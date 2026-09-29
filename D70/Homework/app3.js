let secretButton = document.querySelector('button');
let correctAnswer = "1234";

secretButton.addEventListener('click', ()=>{
    let userAnswer = prompt("Şifrə:");
    
    if (userAnswer===correctAnswer) {
        window.location.href='secret.html';
    } else{
        alert("Yanlış şifrə!");
    }
});