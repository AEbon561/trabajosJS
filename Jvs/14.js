var totalp=0;
var btnpagar=document.querySelector("#btmpagar");
var cantidad=document.querySelector("#cantidad");
var familiar=document.querySelector("#familiar");
var grande=document.querySelector("#grande");
var individual=document.querySelector("#individual");
var jumbo=document.querySelector("#jumbo");
var especialidad=document.querySelector("#especialidad");
var alitas=document.querySelector("#alitas");
var refrescos=document.querySelector("#refrescos");
var nugget=document.querySelector("#nugget");
var total=document.querySelector("#total");

btnpagar.disabled = true; // Botón desactivado por defecto

// Listeners
cantidad.oninput=()=>{Pedido()}
familiar.onclick=()=>{Pedido(); activarBoton()}
grande.onclick=()=>{Pedido(); activarBoton()}
individual.onclick=()=>{Pedido(); activarBoton()}
jumbo.onclick=()=>{Pedido(); activarBoton()}
especialidad.onchange=()=>{Pedido()}
alitas.onclick=()=>{Pedido()}
refrescos.onclick=()=>{Pedido()}
nugget.onclick=()=>{Pedido()}

const activarBoton = () => {
    if (jumbo.checked || individual.checked || grande.checked || familiar.checked) {
        btnpagar.disabled = false;
    }
}

const Pedido=()=>{
    document.querySelector("#vcantidad").textContent=cantidad.value;
    let c=parseFloat(cantidad.value);
    let costoXtamanio=0;
    let nombreTamanio = "";

    if (jumbo.checked){ costoXtamanio=299; nombreTamanio = "JUMBO"; }
    if (individual.checked){ costoXtamanio=99; nombreTamanio = "INDIVIDUAL"; }
    if (grande.checked){ costoXtamanio=160; nombreTamanio = "GRANDE"; }
    if (familiar.checked){ costoXtamanio=210; nombreTamanio = "FAMILIAR"; }

    let porcentaje=1;
    switch (parseInt(especialidad.value)){
        case 2: porcentaje=1.1; break;
        case 3: porcentaje=1.15; break;
        case 4: porcentaje=1.20; break;
    }

    let comple=0;
    comple += (alitas.checked) ? 150 : 0;
    comple += (refrescos.checked) ? 50 : 0;
    comple += (nugget.checked) ? 100 : 0;

    totalp = (c * costoXtamanio * porcentaje) + comple;
    total.innerHTML = "TOTAL $"+totalp.toFixed(2);
}

btnpagar.onclick=()=>{
    let recibi=0;
    do {
        recibi = parseFloat(prompt("Introduce el monto recibido:"));
        if (recibi < totalp) alert("Fondos insuficientes");
    } while (recibi < totalp);

    let cambio = recibi - totalp;

    // Generar resumen
    let resumen = `Cantidad: ${cantidad.value}
Tamaño: ${jumbo.checked ? "JUMBO" : individual.checked ? "INDIVIDUAL" : grande.checked ? "GRANDE" : "FAMILIAR"}
Especialidad: ${especialidad.value} ingrediente(s)
Complementos: ${alitas.checked ? "Alitas, " : ""}${refrescos.checked ? "Refrescos, " : ""}${nugget.checked ? "Nuggets" : ""}`;

    Swal.fire({
        title: "¡Gracias por tu compra!",
        html: `<pre style="text-align:left">${resumen}</pre><br><strong>Cambio: $${cambio.toFixed(2)}</strong>`,
        icon: "success"
    });

    resetearFormulario(); // Limpia todo
}

const resetearFormulario = () => {
    cantidad.value = 1;
    document.querySelector("#vcantidad").textContent = "1";

    jumbo.checked = false;
    individual.checked = false;
    grande.checked = false;
    familiar.checked = false;

    especialidad.value = 1;

    alitas.checked = false;
    refrescos.checked = false;
    nugget.checked = false;

    total.innerHTML = "TOTAL $0.00 MXN";
    btnpagar.disabled = true;
}
