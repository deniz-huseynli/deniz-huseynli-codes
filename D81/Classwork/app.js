$(document).ready(function(){

$.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    type: 'POST',

    headers:{
        'Content-type':'application/json; charset=UTF-8'
    },

    data: JSON.stringify({
        name: 'Dəniz',
        username: 'Hüseynli',
        age: 15
    }),

    success: function(myData){
        console.log(myData);   
    },

    error: function(error){
        console.log(error);   
    },

});

$.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos?userId=1',
    type: 'GET',
    
    success: function(myData){
        console.log(myData);   
    },

    error: function(error){
        console.log(error);   
    },

});

});
