let saldo = 10000;
let house = "house.jpg"
let nohouse = "nohouse.png"
function gambling1(){
    a = Math.floor(Math.random() * 100000) + 1;
    if(a==69){
        saldo=saldo+1
    }else{
        saldo = saldo - 100;
    }
    document.getElementById("saldo").innerHTML = "twoje saldo: " + saldo;
    if(saldo <= 0 ){
        document.getElementById("housee").src = nohouse;
    }
}
function gambling2(){
    a = Math.floor(Math.random() * 100000) + 1;
    if(a==69){
        saldo=saldo+1;
    }else{
        saldo = saldo - 50;
    }
    document.getElementById("saldo").innerHTML = "twoje saldo: " + saldo;
    if(saldo <= 0 ){
        document.getElementById("housee").src = nohouse;
    }
}
function gambling3(){
    a = Math.floor(Math.random() * 100000) + 1;
    if(a==69){
        saldo=saldo+1;
    }else{
        saldo = saldo - 10;
    }
    document.getElementById("saldo").innerHTML = "twoje saldo: " + saldo;
    if(saldo <= 0 ){
        document.getElementById("housee").src = nohouse;
    }
}