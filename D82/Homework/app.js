$(document).ready(function(){

//Task 1
$.ajax({
    url: "https://jsonplaceholder.typicode.com/users/3",
    type: "DELETE",
    success: function(myData) {
        console.log(myData);
    },
    error: function(myError) {
        console.log("Silinmə xətası: ",myError);
    }
});

//Task 2
$.ajax({
    url: "https://jsonplaceholder.typicode.com/users/2",
    type: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    data: JSON.stringify({
        username: "Dəniz",
        email: "example123@gmail.com",
        city: "İmişli"
    }),
    success: function(myData) {
        console.log(myData);
    },
    error: function(myError) {
        console.log("Error: ",myError);
    }
});

//Task 3
$.ajax({
    url: "https://jsonplaceholder.typicode.com/users/7",
    type: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    data: JSON.stringify({
        username: "deniz_huseynli",
        email: "example@gmail.com",
        age: 15
    }),
    success: function(myData) {
        console.log(myData);
    },
    error: function(myError) {
        console.log("Error: ",myError);
    }
});

//PUT tamamilə dəyişir və sadəcə redaktə edilənləri göstərir. PATCH isə sadəcə müəyyən bir hissəsini dəyişir,qalan hissəsini eyni saxlayır və sonda hamısını birlikdə göstərir.



























































});
