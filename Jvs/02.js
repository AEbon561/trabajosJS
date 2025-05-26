const Suma=()=>{
    try{
        let num1 = parseInt(prompt("Numero 1:"));
        let num2 = parseInt(prompt("Numero 2:"));
        let resultado = num1 + num2;
        alert("La suma es: " + resultado);  
    }catch(e){
        alert("Error: Introuce un numero valido");
    }
}
const Resta=()=>{
    try{
        let num1 = parseInt(prompt("Numero 1:"));
        let num2 = parseInt(prompt("Numero 2:"));
        let resultado = num1 - num2;
        alert("La resta es: " + resultado);  
    }catch(e){
        alert("Error: Introuce un numero valido");
    }
}
const Multi=()=>{  
    try{
        let num1 = parseInt(prompt("Numero 1:"));
        let num2 = parseInt(prompt("Numero 2:"));
        let resultado = num1 * num2;
        alert("La multiplicacion es: " + resultado);  
    }catch(e){
        alert("Error: Introuce un numero valido");
    }
}   
const Divi=()=>{
    try{
        let num1 = parseInt(prompt("Numero 1:"));
        let num2 = parseInt(prompt("Numero 2:"));
        if(num2 == 0){
            throw new Error("No se puede dividir por 0");
        }
        let resultado = num1 / num2;
        alert("La division es: " + resultado);  
    }catch(e){
        alert("Error: " + e.message);
    }
}