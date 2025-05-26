document.addEventListener("DOMContentLoaded", () => {
    const btnCuadro = document.getElementById("btnCuadro");
    const btnRec = document.getElementById("btnRec");
    const btnTri = document.getElementById("btnTri");
    const btnCirculo = document.getElementById("btnCirculo");
    const btnRombo = document.getElementById("btnRombo");
    const btnPentagono = document.getElementById("btnPentagono");
    const rombo = document.getElementById("rombo");
    const pentagono = document.getElementById("pentagono");


    const cuadro = document.getElementById("cuadro");
    const rectangulo = document.getElementById("rectangulo");
    const triangulo = document.getElementById("triangulo");
    const circulo = document.getElementById("circulo");

    const diagMayorSlider = document.getElementById("dMayorRombo");
    const diagMenorSlider = document.getElementById("dMenorRombo");
    const vdiagMayor = document.getElementById("vdMayorRombo");
    const vdiagMenor = document.getElementById("vdMenorRombo");

    const ladoPentSlider = document.getElementById("ladoPentagono");
    const apotemaSlider = document.getElementById("apotemaPentagono");
    const vladoPent = document.getElementById("vladoPentagono");
    const vapotema = document.getElementById("vapotemaPentagono");


    const ladoSlider = document.getElementById("lado");
    const vlado = document.getElementById("vlado");

    const baseSlider = document.getElementById("base");
    const alturaSlider = document.getElementById("altura");
    const vbase = document.getElementById("vbase");
    const valtura = document.getElementById("valtura");

    const baseTriSlider = document.getElementById("baseTri");
    const alturaTriSlider = document.getElementById("alturaTri");
    const vbaseTri = document.getElementById("vbaseTri");
    const valturaTri = document.getElementById("valturaTri");

    const radioSlider = document.getElementById("radio");
    const vradio = document.getElementById("vradio");

    const shapeDisplay = document.createElement("div");
    shapeDisplay.style.margin = "0 auto";
    shapeDisplay.style.position = "relative";
    shapeDisplay.style.backgroundColor = "blue";
    shapeDisplay.style.display = "block";
    shapeDisplay.style.maxWidth = "300px";
    shapeDisplay.style.maxHeight = "300px";

    const areaText = document.createElement("p");
    areaText.style.position = "absolute";
    areaText.style.top = "50%";
    areaText.style.left = "50%";
    areaText.style.transform = "translate(-50%, -50%)";
    areaText.style.color = "white";
    areaText.style.fontSize = "1.5em";
    areaText.style.margin = "0";
    areaText.textContent = "Área";
    shapeDisplay.appendChild(areaText);

    const moveShapeDisplay = (parent) => {
        const target = parent.querySelector(".col:last-child");
        if (target) {
            target.innerHTML = "";
            target.appendChild(shapeDisplay);
        }
    };

    const calculateSize = (dimension) => {
        const maxSize = 300;
        const scaleFactor = 100;
        return Math.min((dimension / scaleFactor) * maxSize, maxSize);
    };

    const showFigure = (figure) => {
        cuadro.style.display = "none";
        rectangulo.style.display = "none";
        triangulo.style.display = "none";
        circulo.style.display = "none";
        rombo.style.display = "none";
        pentagono.style.display = "none";
    
        switch (figure) {
            case "cuadro":
                cuadro.style.display = "block";
                moveShapeDisplay(cuadro);
                shapeDisplay.style.borderRadius = "0";
                shapeDisplay.style.clipPath = "none";
                break;
            case "rectangulo":
                rectangulo.style.display = "block";
                moveShapeDisplay(rectangulo);
                shapeDisplay.style.borderRadius = "0";
                shapeDisplay.style.clipPath = "none";
                break;
            case "triangulo":
                triangulo.style.display = "block";
                moveShapeDisplay(triangulo);
                shapeDisplay.style.borderRadius = "0";
                shapeDisplay.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
                break;
            case "circulo":
                circulo.style.display = "block";
                moveShapeDisplay(circulo);
                shapeDisplay.style.borderRadius = "50%";
                shapeDisplay.style.clipPath = "none";
                break;
            case "rombo":
                rombo.style.display = "block";
                moveShapeDisplay(rombo);
                shapeDisplay.style.borderRadius = "0";
                shapeDisplay.style.clipPath = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"; 
                break;
            case "pentagono":
                pentagono.style.display = "block";
                moveShapeDisplay(pentagono);
                shapeDisplay.style.borderRadius = "0";
                shapeDisplay.style.clipPath = "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"; 
                break;
        }
    };
    
    btnCuadro.addEventListener("click", () => showFigure("cuadro"));
    btnRec.addEventListener("click", () => showFigure("rectangulo"));
    btnTri.addEventListener("click", () => showFigure("triangulo"));
    btnCirculo.addEventListener("click", () => showFigure("circulo"));
    btnRombo.addEventListener("click", () => showFigure("rombo"));
    btnPentagono.addEventListener("click", () => showFigure("pentagono"));

    ladoSlider.addEventListener("input", () => {
        const lado = parseInt(ladoSlider.value);
        vlado.textContent = lado;
        const area = lado ** 2;
        areaText.textContent = `${area} m²`; 
        const size = calculateSize(lado);
        shapeDisplay.style.width = `${size}px`;
        shapeDisplay.style.height = `${size}px`;
    });

    baseSlider.addEventListener("input", () => {
        const base = parseInt(baseSlider.value);
        const altura = parseInt(alturaSlider.value);
        vbase.textContent = base;
        valtura.textContent = altura;
        const area = base * altura;
        areaText.textContent = `${area} m²`; 
        const width = calculateSize(base);
        const height = calculateSize(altura);
        shapeDisplay.style.width = `${width}px`;
        shapeDisplay.style.height = `${height}px`;
    });

    alturaSlider.addEventListener("input", () => {
        const base = parseInt(baseSlider.value);
        const altura = parseInt(alturaSlider.value);
        vbase.textContent = base;
        valtura.textContent = altura;
        const area = base * altura;
        areaText.textContent = `${area} m²`; 
        const width = calculateSize(base);
        const height = calculateSize(altura);
        shapeDisplay.style.width = `${width}px`;
        shapeDisplay.style.height = `${height}px`;
    });

    baseTriSlider.addEventListener("input", () => {
        const base = parseInt(baseTriSlider.value);
        const altura = parseInt(alturaTriSlider.value);
        vbaseTri.textContent = base;
        valturaTri.textContent = altura;
        const area = (base * altura) / 2;
        areaText.textContent = `${area} m²`;
        const width = calculateSize(base);
        const height = calculateSize(altura);
        shapeDisplay.style.width = `${width}px`;
        shapeDisplay.style.height = `${height}px`;
        shapeDisplay.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)"; 
    });

    alturaTriSlider.addEventListener("input", () => {
        const base = parseInt(baseTriSlider.value);
        const altura = parseInt(alturaTriSlider.value);
        vbaseTri.textContent = base;
        valturaTri.textContent = altura;
        const area = (base * altura) / 2;
        areaText.textContent = `${area} m²`; 
        const width = calculateSize(base);
        const height = calculateSize(altura);
        shapeDisplay.style.width = `${width}px`;
        shapeDisplay.style.height = `${height}px`;
        shapeDisplay.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)"; 
    });

    radioSlider.addEventListener("input", () => {
        const radio = parseInt(radioSlider.value);
        vradio.textContent = radio;
        const area = Math.PI * radio ** 2;
        areaText.textContent = `${area.toFixed(1)} m²`; 
        const size = calculateSize(radio);
        shapeDisplay.style.width = `${size}px`;
        shapeDisplay.style.height = `${size}px`;
        shapeDisplay.style.borderRadius = "50%"; 
    });
    diagMayorSlider.addEventListener("input", () => {
        const diagMayor = parseInt(diagMayorSlider.value);
        const diagMenor = parseInt(diagMenorSlider.value);
        vdiagMayor.textContent = diagMayor;
        vdiagMenor.textContent = diagMenor;
        const area = (diagMayor * diagMenor) / 2;
        areaText.textContent = `${area.toFixed(2)} m²`; 
        const size = calculateSize(Math.max(diagMayor, diagMenor));
        shapeDisplay.style.width = `${size}px`;
        shapeDisplay.style.height = `${size}px`;
        shapeDisplay.style.clipPath = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"; 
    });
    
    diagMenorSlider.addEventListener("input", () => {
        const diagMayor = parseInt(diagMayorSlider.value);
        const diagMenor = parseInt(diagMenorSlider.value);
        vdiagMayor.textContent = diagMayor;
        vdiagMenor.textContent = diagMenor;
        const area = (diagMayor * diagMenor) / 2;
        areaText.textContent = `${area.toFixed(2)} m²`; 
        const size = calculateSize(Math.max(diagMayor, diagMenor));
        shapeDisplay.style.width = `${size}px`;
        shapeDisplay.style.height = `${size}px`;
        shapeDisplay.style.clipPath = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"; 
    });
    
    ladoPentSlider.addEventListener("input", () => {
        const lado = parseInt(ladoPentSlider.value);
        const apotema = parseInt(apotemaSlider.value);
        vladoPent.textContent = lado;
        vapotema.textContent = apotema;
        const area = (5 * lado * apotema) / 2;
        areaText.textContent = `${area.toFixed(2)} m²`; 
        const size = calculateSize(lado + apotema);
        shapeDisplay.style.width = `${size}px`;
        shapeDisplay.style.height = `${size}px`;
        shapeDisplay.style.clipPath = "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"; 
    });
    
    apotemaSlider.addEventListener("input", () => {
        const lado = parseInt(ladoPentSlider.value);
        const apotema = parseInt(apotemaSlider.value);
        vladoPent.textContent = lado;
        vapotema.textContent = apotema;
        const area = (5 * lado * apotema) / 2;
        areaText.textContent = `${area.toFixed(2)} m²`;
        const size = calculateSize(lado + apotema);
        shapeDisplay.style.width = `${size}px`;
        shapeDisplay.style.height = `${size}px`;
        shapeDisplay.style.clipPath = "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";
    });
    
});