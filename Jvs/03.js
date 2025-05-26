var btnS=document.querySelector('#btnS');
var btnR=document.querySelector('#btnR');
var btnMu=document.querySelector('#btnMu');
var btnDv=document.querySelector('#btnDv');

btnS.onclick=()=>{
    var num1=parseInt(document.querySelector('#num1').value);
    var num2=parseInt(document.querySelector('#num2').value);
    var Resu=num1+num2;  
    document.querySelector('#Resu').innerHTML=Resu;
}

btnR.onclick=()=>{
    var num1=parseInt(document.querySelector('#num1').value);
    var num2=parseInt(document.querySelector('#num2').value);
    var Resu=num1-num2;  
    document.querySelector('#Resu').innerHTML=Resu;
}   

btnMu.onclick=()=>{ 
    var num1=parseInt(document.querySelector('#num1').value);
    var num2=parseInt(document.querySelector('#num2').value);
    var Resu=num1*num2;  
    document.querySelector('#Resu').innerHTML=Resu;
}

btnDv.onclick=()=>{
    var num1=parseInt(document.querySelector('#num1').value);
    var num2=parseInt(document.querySelector('#num2').value);
    if(num2!=0){
        var Resu=num1/num2;  
        document.querySelector('#Resu').innerHTML=Resu; 
    }else{
        alert("No se puede dividir por 0");
    }
}   