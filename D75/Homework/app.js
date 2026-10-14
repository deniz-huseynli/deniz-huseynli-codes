let myForm = document.querySelector('form');
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

//Cədvəl
let username = document.querySelector("#username");
let userage = document.querySelector("#userage");
let tableBody = document.querySelector("#tableBody");

myForm.addEventListener('submit',(event)=>{
    event.preventDefault(); 
});

submit.addEventListener('click', function(){
let usernameValue = username.value;
let userageValue = userage.value;

if (!username.checkValidity()||!userage.checkValidity()){
        alert("Zəhmət olmasa, bütün xanaları doldurun!");
        return;
    }

let index = Math.floor(Math.random()*900+100);

let yeniSətir = "<tr>";
yeniSətir+="<td>"+usernameValue+"</td>";
yeniSətir+="<td>"+userageValue+"</td>";
yeniSətir+="<td>"+index+"</td>";
yeniSətir+="<td><button onclick='if(confirm(\"Silmək istədiyinizə əminsiniz?\"))this.parentElement.parentElement.remove()' class='btn btn-danger'>Sil</button></td>";
yeniSətir += "</tr>";

tableBody.innerHTML+=yeniSətir;

username.value="";
userage.value="";

});