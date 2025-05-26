var filas=document.querySelector('#filas');
var columnas=document.querySelector('#columnas');
var color1=document.querySelector('#color1');
var color2=document.querySelector('#color2');
var texto=document.querySelector('#contenido');

filas.oninput=()=>{creartabla()}
columnas.oninput=()=>{creartabla()}
color1.oninput=()=>{creartabla()}
color2.oninput=()=>{creartabla()}
texto.onkeyup=()=>{creartabla()}

const creartabla=()=>{
    var tabla=document.querySelector('#soytabla');
    document.querySelector('#vfilas').innerHTML=filas.value
    document.querySelector('#vcolumnas').innerHTML=columnas.value
    var c1=color1.value;
    var c2=color2.value;
    var f=filas.value;
    var c=columnas.value;
    var tablaHTML=""
    for (var i=0; i<f; i++){
        tablaHTML+=-(i%2==0)?"<tr style='background:"+c1+"'>":"<tr style='background:"+c2+"'>"
        for ( var j=1;j<=c;j++){
            tablaHTML+="<td>"+texto.value+"</td>"
        }
        tablaHTML+="</tr>"
    }
    tabla.innerHTML=tablaHTML

}