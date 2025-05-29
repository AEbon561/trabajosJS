var arrayimagen=JSON.parse(localStorage.getItem("imagenes"))||[]  

const agregarImagen2 = () => {
   
    let input = document.getElementById('imagen');
    const file = input.files[0];
    
    if (!file) {
        Swal.fire({icon: "error", title: "Oops...", text: "Debes seleccionar una imagen!"});
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imageData = {
            name: file.name,
            data: e.target.result,
            date: new Date().toISOString()
        };
        
        let imagen = {
             imagen: imageData
        };
        
       
        let arrayimagen = JSON.parse(localStorage.getItem("imagenes") || "[]");
        arrayimagen.push(imagen);
        
        localStorage.setItem("imagenes", JSON.stringify(arrayimagen));
        actualizarTablaImagen();
         limpiarImagen();
        cerrarModal("exampleModal");
    };
    
    reader.readAsDataURL(file);
};


const actualizarTablaImagen=()=>{
  let tablaimagenes=document.getElementById("tablaImagen")
  let tablaHTML=``
  let index=0
  arrayimagen=JSON.parse(localStorage.getItem("imagenes"))||[]
  arrayimagen.map(p=>{
    tablaHTML+=`
    <tr>
    <td>
  ${
    p.imagen && p.imagen.data
      ? `<img src="${p.imagen.data}" width="50px" height="50px">`
      : "Sin imagen"
  } 
</td>
          <td><button class="btn btn-danger" onclick="eliminarImagen(${index})"><i class="bi bi-trash"></i></button></td>
          <td><button class="btn btn-warning" onclick="editarImagen(${index})" data-bs-toggle="modal" data-bs-target="#editImagenModal"><i class="bi bi-pencil"></i></button></td>
        </tr>
    `   
    index++   
  });    
  tablaimagenes.innerHTML=tablaHTML
}
 actualizarTablaImagen();

const eliminarImagen=(index)=>{
  const missweet = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success mx-3",
      denyButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  missweet.fire({
    title: "Estas seguro de Eliminar esta imagen??",
    showDenyButton: true,
    confirmButtonText: "Si",
    denyButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed) {
      arrayimagen.splice(index,1);
      localStorage.setItem("imagenes",JSON.stringify(arrayimagen))
      actualizarTablaImagen()
      Swal.fire("ALumnno eliminado exitosamente!", "", "success");
    } 
  });
}

const editarImagen = (index) => {
  arrayimagen = JSON.parse(localStorage.getItem("imagenes")) || [];
  let imagen = arrayimagen[index];

  if (imagen.imagen && imagen.imagen.data) {
    document.getElementById("imagenprevia").src = imagen.imagen.data;
  } else {
    document.getElementById("imagenprevia").src = "";
  }
  document.getElementById("index").value = index;
};

const guardarImagen = () => {
  let arrayimagen = JSON.parse(localStorage.getItem("imagenes")) || [];

  const index = parseInt(document.getElementById("index").value, 10);
  const archivo = document.getElementById("eimagen").files[0];

  if (!archivo) {
    localStorage.setItem("imagenes", JSON.stringify(arrayimagen));
    actualizarTablaImagen();
    return;
  }


  const lector = new FileReader();
  lector.onload = function (e) {
    const dataUrl = e.target.result;

    arrayimagen[index] = {
      imagen: {
        name: archivo.name,
        data: dataUrl
      }
    };

    localStorage.setItem("imagenes", JSON.stringify(arrayimagen));
    actualizarTablaImagen();
     cerrarModal("editImagenModal");
  };

  lector.readAsDataURL(archivo);
};

const cerrarModal=(modal)=>{
    const myModal =bootstrap.Modal.getInstance(document.getElementById(modal));
    myModal.hide(); 
      const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => backdrop.remove());
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';
}

const limpiarImagen=()=>{
  document.getElementById("nombre").value=""
  document.getElementById('imagen').value="";
}

// const agregarImagen= () => {
//    document.getElementById('imagen').addEventListener('change', function () {
//   const file = this.files[0];
//   const reader = new FileReader();

//   reader.onload = function () {
//     const base64String = reader.result;
    
//     // Guardar en localStorage
//     localStorage.setItem('imagenGuardada', base64String);
//   };
// });
// };