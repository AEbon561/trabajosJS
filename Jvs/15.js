var cantidad=document.querySelector('#cant')
var valor1=document.querySelector('#valor1');
var valor2=document.querySelector('#valor2');

cantidad.oninput=()=>{CalcularDivisa()}
valor1.onchange=()=>{CalcularDivisa()}
valor2.onchange=()=>{CalcularDivisa()}


const CalcularDivisa=()=>{
    let c=parseFloat(cantidad.value)
    document.querySelector("#vcant").innerHTML=c;
    let res=0;
    let d1=valor1.value;
    let d2=valor2.value;
    if(d1=="USD" && d2=="MXN"){
       res=c*20.52;
    }else if (d1=="USD" && d2=="COP"){
        res=c*4391.84;
    }else if (d1=="USD" && d2=="EUR"){
        res=c*0.92;
    }else if (d1=="MXN" && d2=="USD"){
        res=c*0.049;
    }else if (d1=="MXN" && d2=="COP"){
        res=c*212.39;
    }else if (d1=="MXN" && d2=="EUR"){
        res=c*0.045;
    }else if (d1=="COP" && d2=="USD"){
        res=c*0.00023;
    }else if (d1=="COP" && d2=="MXN"){
        res=c*0.0047;
    }else if (d1=="COP" && d2=="EUR"){
        res=c*0.00021;
    }else if (d1=="EUR" && d2=="USD"){
        res=c*1.09;
    }else if (d1=="EUR" && d2=="MXN"){
        res=c*22.41;
    }else if (d1=="EUR" && d2=="COP"){
        res=c*4791.88;
    }else{
        res=c;
    }
    document.querySelector('#res').innerHTML='<img src="img/cargando-xd.gif" width="200px" height="200px">';
    setTimeout(() => {
         document.querySelector('#res').innerHTML=`${c} ${d1} <br>${res.toFixed(5)} ${d2}`
    }, 500);
   
}
