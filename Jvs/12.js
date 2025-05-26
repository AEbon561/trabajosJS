var cargo = document.querySelector("#cargo");
var hora = document.querySelector("#hora");
var antiguedad = document.querySelector("#antiguedad");
var sb = document.querySelector("#sb");
var cb = document.querySelector("#cb");
var e = document.querySelector("#e");
var an = document.querySelector("#an");
var isr = document.querySelector("#isr");
var ss = document.querySelector("#ss");
var af = document.querySelector("#afore");
var s = document.querySelector("#s");
var tp = document.querySelector("#tp");
var td = document.querySelector("#td");
var sn = document.querySelector("#sn");
var sueldoxhora = 0;
var anios = 0;

cargo.onchange = () => {
    calcular();
};
hora.oninput = () => {
    calcular();
};
antiguedad.oninput = () => {
    calcular();
};

const calcular = () => {
    let h = parseFloat(hora.value);
    document.querySelector("#vhora").innerHTML = h;
    let van = parseFloat(antiguedad.value);
    document.querySelector("#vantiguedad").innerHTML = van;

   
    switch (cargo.value) {
        case "GERENTE": sueldoxhora = 300; break;
        case "EJECUTIVO": sueldoxhora = 200; break;
        case "SUPERVISOR": sueldoxhora = 150; break;
        case "AYUDANTE": sueldoxhora = 100; break;
        case "OFICINISTA": sueldoxhora = 80; break;
        case "PRACTICANTE": sueldoxhora = 50; break;
    }

   
    let vsb = 0;
    if (h > 40) {
        vsb = (40 * sueldoxhora) + ((h - 40) * sueldoxhora * 2); // Doble por las horas extras
    } else {
        vsb = h * sueldoxhora;
    }

    
    let vcb = vsb * 0.1;  
    let ce = vsb * 0.005; 
    let ant = van * 150;  
    let totalP = vsb + vcb + ce + ant; 
   
    sb.innerHTML = "$" + vsb.toFixed(2);
    cb.innerHTML = "$" + vcb.toFixed(2);
    e.innerHTML = "$" + ce.toFixed(2);
    an.innerHTML = "$" + ant.toFixed(2);
    tp.innerHTML = "$" + totalP.toFixed(2);

   
    let visr = vsb * 0.16; 
    let vs = vsb * 0.01;    
    let vaf = vsb * 0.061;  
    let vss = vsb * 0.04625; 
    let totalD = visr + vs + vaf + vss;  

    
    isr.innerHTML = "$" + visr.toFixed(2);
    ss.innerHTML = "$" + vss.toFixed(2);
    s.innerHTML = "$" + vs.toFixed(2);
    af.innerHTML = "$" + vaf.toFixed(2);
    td.innerHTML = "$" + totalD.toFixed(2);

    
    let vsn = totalP - totalD; 
    sn.innerHTML = "$" + vsn.toFixed(2);
};
