//Task 1
function topla(a,b){
    return a+b;
}
console.log(topla(3,4));

//Task 2
function kvadrat(ədəd){
    return ədəd*ədəd;
}
console.log(kvadrat(5));

//Task 3
function yoxla(yaş){
    if (yaş>=18){
        return "Giriş icazəlidir";
    } else{
        return "Giriş qadağandır";
    }
}
let yaş = +prompt("Yaşınızı daxil edin:");
console.log(yoxla(yaş));

//Task 4
function cutTek(eded){
    if (eded%2===0){
        return "Cüt";
    } else{
        return "Tək";
    }
}
console.log(cutTek(8));

//Task 5
function edediOrta(a,b,c){
    return (a+b+c)/3;
}
console.log(edediOrta(10,20,30));

//Task 6
function ededYoxla(eded){
  if (eded>0){
    return "Müsbət";
  } else if (eded<0){
    return "Mənfi";
  } else{
    return "Sıfır";
  }
}
let eded = +prompt("Ədədi daxil edin:");
console.log(ededYoxla(eded));