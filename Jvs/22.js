var arraycategorias=JSON.parse(localStorage.getItem("categorias"))||[]  
var arrayProductos=JSON.parse(localStorage.getItem("productos"))||[]  
var categoriasHTML=``
var btnCategorias=``

const filtrarProductos = (categoria = "Todos", texto = "") => {
  let listaProductos = document.getElementById("listaProductos");
  let listaHTML = ``;
  let arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
  //filtrar por categoria
  let productosFiltrados = arrayProductos.filter(p => {
    return (p.categoria == categoria || categoria == "Todos");
  });
  
  //filtrar por campo busquedad
  if (texto) {
    productosFiltrados = productosFiltrados.filter(p => {
      const nombreMatch = p.nombre.toLowerCase().includes(texto.toLowerCase());
     // const categoriaMatch = arraycategorias[parseInt(p.categoria)-1].categoria.toLowerCase().includes(texto.toLowerCase());
      return nombreMatch;
    });
  }
  
  //imprime lista de resultado
  productosFiltrados.forEach(p => {
    listaHTML += `
    <li class="list-group-item list-group-item-action d-flex justify-content-end align-items-start shadow my-1 rounded-2">
      <div class="ms-2 me-auto text-start">
    <div class="fw-bold">${p.nombre}</div>
${
  arraycategorias[parseInt(p.categoria) - 1]?.categoria || "Categoría no disponible"
}
      </div>
      <span class="btn  btn-dark py-2 rounded-pill mx-3 fw-bold "><i class="bi bi-cash mx-2"></i>$ ${parseFloat(p.precio).toFixed(2)}</span>
      <span class="btn  rounded-pill fw-bold px-2 ${parseInt(p.stock) >= parseInt(p.stockmin) ? 'btn-success' : 'btn-danger'}"> 
      ${parseInt(p.stock) >= parseInt(p.stockmin) ? '<i class="bi bi-arrow-up mr-2"></i>' : '<i class="bi bi-arrow-down ml-5"></i>'}${p.stock}</span>
    </li>
    `;
  });
  
  listaProductos.innerHTML = listaHTML;
}

const agregarCategoria = () => {
    let cat = document.getElementById("categoria").value;
    let input = document.getElementById('imagen');
    const file = input.files[0];
    
    if (cat.trim() === '') {
        Swal.fire({icon: "error", title: "Oops...", text: "El campo categoría está vacío!"});
        return;
    }
    
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
        
        let categoria = {
            categoria: cat,
            imagen: imageData
        };
        
        // Obtener el array existente o crear uno nuevo
        let arraycategorias = JSON.parse(localStorage.getItem("categorias") || "[]");
        arraycategorias.push(categoria);
        
        localStorage.setItem("categorias", JSON.stringify(arraycategorias));
        actualizarTablaCategoria();
        limpiarCamposCategoria();
        cerrarModal("exampleModal");
    };
    
    reader.readAsDataURL(file);
};

const actualizarTablaCategoria=()=>{
  let tablacategorias=document.getElementById("tablaCategorias")
  let tablaHTML=``
  let index=0
  arraycategorias=JSON.parse(localStorage.getItem("categorias"))||[]
  categoriasHTML=`<option value="0">Elige Categoria</option>
  btnCategorias=<div class="col"> <button class="btn btn-outline-dark w-100" onclick="filtrarProductos('Todos')">Todos</button></div>`
  arraycategorias.map(p=>{
    tablaHTML+=`
        <tr>
          <td>${p.categoria}</td>
       <td>
  ${
    p.imagen && p.imagen.data
      ? `<img src="${p.imagen.data}" width="50px" height="50px" class="rounded-5">`
      : "Sin imagen"
  }
</td>
          <td><button class="btn btn-danger" onclick="eliminarCategoria(${index})"><i class="bi bi-trash"></i></button></td>
          <td><button class="btn btn-warning" onclick="editarCategoria(${index})" data-bs-toggle="modal" data-bs-target="#editCategoriaModal"><i class="bi bi-pencil"></i></button></td>
        </tr>
    `   
    index++   
    categoriasHTML+=`<option value="${index}">${p.categoria}</option>`
    btnCategorias+=`<div class="col"> <button class="btn btn-outline-dark w-100" onclick="filtrarProductos('${index}')">${p.categoria}</button></div>`
  });    
  tablacategorias.innerHTML=tablaHTML  
  document.getElementById("ecategoria").innerHTML=categoriasHTML
  document.getElementById("epcategoria").innerHTML=categoriasHTML
  document.getElementById("btnCategorias").innerHTML=btnCategorias
  filtrarProductos();
}

const editarCategoria=(index)=>{
  arraycategorias=JSON.parse(localStorage.getItem("categorias"))||[]
  let categoria=arraycategorias[index];
  document.getElementById("ecategoria").value=categoria.categoria
  document.getElementById("index").value=index
}

const guardarCategoria=()=>{   
  let cat=document.getElementById("ecategoria").value
  let index=document.getElementById("index").value
 
  if(cat.trim()===''){
    Swal.fire({icon: "success",title: "Oops...",text: "Campos vacios!!"});
    return;
    }
  let categoria={categoria:cat}
  arraycategorias[index]=categoria
  localStorage.setItem("categorias",JSON.stringify(arraycategorias))
  actualizarTablaCategoria()
  limpiarCamposCategoria() 
  cerrarModal("editCategoriaModal")
}

const eliminarCategoria=(index)=>{
  const missweet = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success mx-3",
      denyButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  missweet.fire({
    title: "Estas seguro de Eliminar este categoria??",
    showDenyButton: true,
    confirmButtonText: "Si",
    denyButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed) {
      arraycategorias.splice(index,1);
      localStorage.setItem("categorias",JSON.stringify(arraycategorias))
      actualizarTablaCategoria()
      Swal.fire("ALumnno eliminado exitosamente!", "", "success");
    } 
  });
}

const limpiarCamposCategoria=()=>{
  document.getElementById("categoria").value=""
}
actualizarTablaCategoria()

const cerrarModal=(modal)=>{
    const myModal =bootstrap.Modal.getInstance(document.getElementById(modal));
    myModal.hide(); 
      const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(backdrop => backdrop.remove());
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0';
}

const agregarProducto=()=>{
  let nombre=document.getElementById("nombre").value
  let categoria=document.getElementById("pcategoria").value
  let stock=document.getElementById("stock").value
  let precio=document.getElementById("precio").value
  let stockmin=document.getElementById("stockmin").value
 
    if(categoria.trim()==="0" || nombre.trim()===''|| stock.trim()===''||precio.trim()==''||stockmin===''){
        Swal.fire({icon: "success",title: "Oops...",text: "Campos vacios!!"});
        return;
    }
    let producto={nombre,categoria,stock,precio,stockmin}
    arrayProductos.push(producto);
    localStorage.setItem("productos",JSON.stringify(arrayProductos))
    actualizarTablaProducto()
    limpiarCamposProducto()  
    cerrarModal("addProductoModal")
}

const actualizarTablaProducto=()=>{
  let tablaProductos=document.getElementById("tablaProductos")
  let tablaHTML=``
  let index=0
  arrayProductos=JSON.parse(localStorage.getItem("productos"))||[]
  arrayProductos.map(p=>{
    tablaHTML+=`
        <tr>
          <td>${p.nombre}</td>
          <td>${arraycategorias[parseInt(p.categoria)-1].categoria}</td>
          <td>${p.stock}</td>
          <td>$ ${parseFloat(p.precio).toFixed(2)}</td>
          <td>${p.stockmin}</td>
          <td>          
            <button class="btn btn-danger" onclick="eliminarProducto(${index})">
              <i class="bi bi-trash"></i>
            </button>
            <button class="btn btn-warning" onclick="editarProducto(${index})" data-bs-toggle="modal" data-bs-target="#editProductoModal">
              <i class="bi bi-pencil"></i>
            </button>
          </td>
        </tr>
    `   
    index++   
  });    
  tablaProductos.innerHTML=tablaHTML
  filtrarProductos();
}
actualizarTablaProducto()

const limpiarCamposProducto=()=>{
  document.getElementById("nombre").value=""
  document.getElementById("pcategoria").value=0
  document.getElementById("stock").value=""
  document.getElementById("precio").value=""
  document.getElementById("stockmin").value=""
}

const eliminarProducto=(index)=>{
    const missweet = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success mx-3",
      denyButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  missweet.fire({
    title: "Estas seguro de Eliminar este producto??",
    showDenyButton: true,
    confirmButtonText: "Si",
    denyButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed) {
      arrayProductos.splice(index,1);
      localStorage.setItem("productos",JSON.stringify(arrayProductos))
      actualizarTablaProducto()
      Swal.fire("Producto eliminado correctamente!", "", "success");
    } 
  });
}

const editarProducto=(index)=>{
  arrayProductos=JSON.parse(localStorage.getItem("productos"))||[]
  let producto=arrayProductos[index];
  document.getElementById("enombre").value=producto.nombre
  document.getElementById("epcategoria").value=producto.categoria
  document.getElementById("estock").value=producto.stock
  document.getElementById("eprecio").value=producto.precio
  document.getElementById("estockmin").value=producto.stockmin
  document.getElementById("pindex").value=index
}

const guardarProducto=()=>{   
   let nombre=document.getElementById("enombre").value
  let categoria=document.getElementById("epcategoria").value
  let stock=document.getElementById("estock").value
  let precio=document.getElementById("eprecio").value
  let stockmin=document.getElementById("estockmin").value
  let index=document.getElementById("pindex").value
 
    if(categoria.trim()==="0" || nombre.trim()===''|| stock.trim()===''||precio.trim()==''||stockmin===''){
        Swal.fire({icon: "success",title: "Oops...",text: "Campos vacios!!"});
        return;
    }
    let producto={nombre,categoria,stock,precio,stockmin}
    arrayProductos[index]=producto
    localStorage.setItem("productos",JSON.stringify(arrayProductos))
    actualizarTablaProducto()
    limpiarCamposProducto()  
    cerrarModal("editProductoModal")
}


filtrarProductos();