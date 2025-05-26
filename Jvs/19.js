var btnadd=document.getElementById("btnadd");
var arrayAlumnos=[];
btnadd.onclick=()=>{
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
    arrayAlumnos.push(alumno);
   actualizartabla()
limpiarcampos()
    }

const editarAlumno=(index)=>{
    let alumno=arrayAlumnos[index];
   document.getElementById("enombre").value=alumno.nombre
   document.getElementById("eAP").value=alumno.ap
   document.getElementById("eAM").value=alumno.am
   document.getElementById("egrupo").value=alumno.grupo
   document.getElementById("ecarrera").value=alumno.carrera
   document.getElementById("index").value=index
}
const guardarAlumno = () => {
    let nombre = document.getElementById("enombre").value;
    let ap = document.getElementById("eAP").value;
    let am = document.getElementById("eAM").value;
    let grupo = document.getElementById("egrupo").value;
    let carrera = document.getElementById("ecarrera").value;
    let index = parseInt(document.getElementById("index").value);

    if (nombre.trim() === '' || ap.trim() === '' || am.trim() === '') {
        Swal.fire({ icon: "error", title: "Oops...", text: "Campos vacíos!" });
        return;
    }

    let alumno = { nombre, ap, am, grupo, carrera };
    arrayAlumnos[index] = alumno;

    actualizartabla(); 
    limpiarcampos();  
}


const limpiarcampos=()=>{
    document.getElementById("nombre").value="";
    document.getElementById("AM").value="";
    document.getElementById("AP").value="";
    document.getElementById("grupo").selectedIndex=0;
    document.getElementById("carrera").selectedIndex=0;
}
console.log("Índice para editar:", index); // debe mostrar un número válido
const actualizartabla=()=>{
    let tablaAL=document.getElementById("tablaalumnos")
   let tablaHTML=``
   let index=0
arrayAlumnos.map(a=>{
    tablaHTML+=`
    <tr>
     <td>${a.nombre.toUpperCase()}</td>
     <td>${a.ap.toUpperCase()}</td>
     <td>${a.am.toUpperCase()}</td>
     <td>${a.grupo.toUpperCase()}</td>
     <td>${a.carrera.toUpperCase()}</td>
     <td><button class="btn btn-danger" onclick="EliminarAlumno(${index})" >Del</button></td>
     <td><button class="btn btn-primary" onclick="editarAlumno(${index})" float-end my-3 data-bs-toggle="modal" data-bs-target="#editaralumno">Edit</button></td>
     </tr>
    `
    index++
});
tablaAL.innerHTML=tablaHTML
}

const EliminarAlumno=(index)=>{
    const missweet= Swal.mixin({
        customClass:{
            confirmButton:"btn btn-success mx-3",
            denyButton:"btn btn-danger", 
        },
        buttonsStyling:false
    });

missweet.fire({
    title: "Estas seguro de eliminar este alumno?",
    showDenyButton: true,
    confirmButtonText: "Si",
    denyButtonText: "no"
  }).then((result) => {
    
    if (result.isConfirmed) {
      arrayAlumnos.splice(index,1);
      actualizartabla()
      Swal.fire("Alumno eliminado exitosamente","","success");
    } 
  });
}