$(document).ready(function(){

//Task 1
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    type: 'GET',

    headers:{
        'Content-type':'application/json; charset=UTF-8'
    },  

    success: function(myData){
        console.log(myData); 
        myData.forEach(elem =>{
            let myLi= document.createElement('li');
            myLi.innerText=elem.address.city;
            $("#task1").append("<li>"+ elem.name +" - "+elem.address.city+"</li>");
        });
    },

    error: function(error){
        console.log(error);   
    }

});

//Task 2
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos?userId=3',
    type: 'GET',

    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    },
        
    success: function(myData){
        console.log(myData); 
        myData.forEach(elem =>{
            if (elem.completed===true) {
                $("#task2").append("<li>"+elem.title+"</li>");
            }
        });
    },

    error: function(myError){
        console.error('Kodda bu xəta baş verdi: ',myError);   
    }
});


//Task 3
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'POST',

    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    },
    data: JSON.stringify({
        postId: 5,
        name: 'Dəniz',
        email: 'abc123@gmail.com',
        body: 'Şərhin mətni'
    }),
    success: function(data){
        console.log(data);
        $("#result").text("Yeni şərh uğurla əlavə olundu, Şərh ID: "+data.id);
    },
    error: function(error){
        console.error(error);
    }
});



});
