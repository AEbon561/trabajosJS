var altura=document.querySelector("#altura");
var peso=document.querySelector("#peso");


altura.oninput=()=>{calcularIMC();}
peso.oninput=()=>{calcularIMC();}


 const calcularIMC=()=>{
    for(i=1;i<=6;i++){
     document.querySelector('#imc'+i).style.transition="2s ease all"
     document.querySelector('#imc'+i).style.zIndex="-1" 
     document.querySelector('#imc'+i).style.transform="scale(1)"
     }
     let p=parseFloat(peso.value);
     let a=parseFloat(altura.value)/100;
     document.querySelector('#np').innerHTML=peso.value;
     document.querySelector('#al').innerHTML=altura.value;
     let imc=(p/(a*a)).toFixed(2);
     document.querySelector('#imc').innerHTML='<img src="img/cargando-xd.gif" width="200px" height="200px">';
     setTimeout(()=>{      
     document.querySelector('#imc').innerHTML="<h1>"+imc+" kg/m<sup>2</sup></h1>";
     let mensaje = "";

if(imc < 18.5){
    mensaje = "Estás por debajo de tu peso ideal. Consulta con un especialista.";
}
else if(imc >= 18.5 && imc < 25){
    mensaje = "¡Estás en un peso saludable! Sigue así.";
}
else if(imc >= 25 && imc < 30){
    mensaje = "Tienes sobrepeso. Considera mejorar tu alimentación y actividad física.";
}
else if(imc >= 30 && imc < 35){
    mensaje = "Obesidad grado I. Es recomendable acudir con un especialista.";
}
else if(imc >= 35 && imc < 40){
    mensaje = "Obesidad grado II. Cuida tu salud, consulta a un profesional.";
}
else if(imc >= 40){
    mensaje = "Obesidad grado III. Atención médica urgente recomendada.";
}

document.querySelector("#mensajeIMC").innerHTML = mensaje;

     },500);
     let tipo=1;
     if(imc<18.5){tipo=1}
     if(imc>=18.5 && imc<25){tipo=2}
     if(imc>=25 && imc<30){tipo=3}
     if(imc>=30 && imc<35){tipo=4}
     if(imc>=35 && imc<40){tipo=5}
     if(imc>=40){tipo=6}
     document.querySelector('#imc'+tipo).style.zIndex="5"
     document.querySelector('#imc'+tipo).style.transform="scale(1.1)"

     let bgColor = "";

if(imc < 18.5){
    bgColor = "#17a2b8"; 
}
else if(imc >= 18.5 && imc < 25){
    bgColor = "#28a745"; 
}
else if(imc >= 25 && imc < 30){
    bgColor = "#ffc107"; 
}
else if(imc >= 30 && imc < 35){
    bgColor = "#fd7e14"; 
}
else if(imc >= 35 && imc < 40){
    bgColor = "#dc3545"; 
}
else if(imc >= 40){
    bgColor = "#6f42c1"; 
}
document.body.style.backgroundColor = bgColor;

     }
     
     

