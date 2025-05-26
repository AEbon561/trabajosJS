var cantidad = document.querySelector('#cant');
var valor1 = document.querySelector('#valor1');
var valor2 = document.querySelector('#valor2');

cantidad.oninput = () => { CalcularDivisa(); };
valor1.onchange = () => { CalcularDivisa(); };
valor2.onchange = () => { CalcularDivisa(); };

const CalcularDivisa = () => {
    let c = parseFloat(cantidad.value);
    document.querySelector("#vcant").innerHTML = c;
    let res = 0;
    let d1 = valor1.value;
    let d2 = valor2.value;

  
    if (d1 == "c" && d2 == "f") {
        res = (c * 9 / 5) + 32;
    }
    else if (d1 == "c" && d2 == "k") {
        res = c + 273.15;
    }
    else if (d1 == "f" && d2 == "c") {
        res = (c - 32) * 5 / 9;
    }
    else if (d1 == "f" && d2 == "k") {
        res = ((c - 32) * 5 / 9) + 273.15;
    }
    else if (d1 == "k" && d2 == "c") {
        res = c - 273.15;
    }
    else if (d1 == "k" && d2 == "f") {
        res = ((c - 273.15) * 9 / 5) + 32;
    } else {
        res = c; 
    }

    document.querySelector('#res').innerHTML = '<img src="img/cargando-xd.gif" width="200px" height="200px">';
    setTimeout(() => {
        document.querySelector('#res').innerHTML = `${c} ${d1.toUpperCase()} <br> ${res.toFixed(2)} ${d2.toUpperCase()}`;
    }, 500);
};
