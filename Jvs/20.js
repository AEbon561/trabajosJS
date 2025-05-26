const guardarMensaje=()=>{
    let msj=document.getElementById("mensaje").value
    localStorage.setItem("mensaje",msj)
}
const borrarMensaje=()=>{
document.getElementById("mensaje").value=""
}
const recupearMensaje=()=>{
    let mensaje=localStorage.getItem("mensaje")
    document.getElementById("mensaje").value=mensaje
}
const guardar=()=>{
    let key=document.getElementById("key").value
    let value=document.getElementById("value").value
    localStorage.setItem(key,value)

}
const borrar=()=>{
    document.getElementById("key").value=""
    document.getElementById("value").value=""

}
const borrarLS=()=>{
    localStorage.clear()
}
const recuperar=()=>{
    let key=document.getElementById("key").value
    let v=localStorage.getItem(key)
    console.log(v)
    if(v){
        document.getElementById("value").value=v
}else{
    document.getElementById("value").value="NO HAY NADA "
}
}
const AddAlumno=()=>{
    let nombre=document.getElementById("nombre").value
    let ap=document.getElementById("AP").value
    let am=document.getElementById("AM").value
    let grupo=document.getElementById("grupo").value
    let carrera=document.getElementById("carrera").value

    if(nombre.trim()==='' || ap.trim()==='' || am.trim()===''){
        Swal.fire({icon:"error",title:"oopsss..",text:"Campos vacios!!"});
         return;
     }

     let alumno={nombre,ap,am,grupo,carrera}
     localStorage.setItem("alumno",JSON.stringify(alumno));
     Swal.fire({icon:"success",title:"oopsss..",text:"Alumno guardado crrectamente"});
}
const borrarA=()=>{
    document.getElementById("nombre").value="";
    document.getElementById("AM").value="";
    document.getElementById("AP").value="";
    document.getElementById("grupo").selectedIndex=0;
    document.getElementById("carrera").selectedIndex=0;
}
const recuperarA=()=>{
    let alumno=JSON.parse(localStorage.getItem("alumno"))
    if(alumno){
        document.getElementById("nombre").value=alumno.nombre
        document.getElementById("AP").value=alumno.ap
        document.getElementById("AM").value=alumno.am
        document.getElementById("grupo").value=alumno.grupo
        document.getElementById("carrera").value=alumno.carrera
    }else{
        Swal.fire({icon:"error",title:"oopsss..",text:"Alumno no encontrado"});
    }
}
