var ancho=document.getElementById("ancho");
var alto=document.getElementById("alto");
var color1=document.getElementById("colorfondo1");
var color2=document.getElementById("colorfondo2");
var radius=document.getElementById("radius")
var borde=document.getElementById("borde");
var colorBorde=document.getElementById("colorBorde");
var figura=document.getElementById("figura");

ancho.oninput=()=>{crearfigura()}
alto.oninput=()=>{crearfigura()}
color1.onchange=()=>{crearfigura()}
color2.onchange=()=>{crearfigura()}
radius.oninput=()=>{crearfigura()}
colorBorde.onchange=()=>{crearfigura()}
borde.oninput=()=>{crearfigura()}




const crearfigura=()=>{
    let anchofigura=parseInt(ancho.value);
    let altofigura=parseInt(alto.value);
    let rad=parseInt(radius.value);
    let b=parseInt(borde.value);
    let colorfondo1=color1.value;
    let colorfondo2=color2.value;
    let colorB=colorBorde.value;


    
    document.getElementById("vancho").innerHTML=anchofigura
    document.getElementById("valto").innerHTML=altofigura
    document.getElementById("vradius").innerHTML=rad
    document.getElementById("vborde").innerHTML=b

    figura.style.width=anchofigura+"px";
    figura.style.height=altofigura+"px";
    figura.style.background="radial-gradient(circle, "+colorfondo1+" 0%, "+colorfondo2+" 100%)" ;
    figura.style.borderRadius=rad+"%";
    figura.style.borderWidth=b+"px";
    figura.style.borderStyle="solid";
    figura.style.borderColor=colorB;

}