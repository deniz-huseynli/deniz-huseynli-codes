let myForm = document.querySelector('form');

myForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("Səhifə yeniləndi");
    
});

let inputs = document.querySelectorAll('input');

inputs.forEach((element)=>{
    element.addEventListener('input',()=>{
        if(element.checkValidity()&&element.value.length>0){
            element.nextElementSibling.style.color='green';
        }else{
            element.nextElementSibling.style.color='red';
        }
    })
})