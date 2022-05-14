function Increment(){
var num=Number(document.getElementById('number').innerHTML);
document.getElementById('number').innerHTML=num+1;
}
function Decrement(){
    var num = Number(document.getElementById('number').innerHTML);
    document.getElementById('number').innerHTML = num - 1;
}
function Reset(){
    
    document.getElementById('number').innerHTML = 0;
}
