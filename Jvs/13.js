var dia=document.querySelector("#dia")
var mes=document.querySelector("#mes")

dia.oninput=()=>{CalcularSigno()}

mes.onchange=()=>{CalcularSigno()}

const descripciones = {
    "CAPRICORNIO": "Responsable, disciplinado y muy trabajador.",
    "ACUARIO": "Original, independiente y humanitario.",
    "PICIS": "Compasivo, intuitivo y sensible.",
    "ARIES": "Valiente, entusiasta y seguro.",
    "TAURO": "Confiable, paciente y persistente.",
    "GEMINIS": "Versátil, curioso y comunicador nato.",
    "CANCER": "Emocional, protector y empático.",
    "LEO": "Creativo, apasionado y líder natural.",
    "VIRGO": "Analítico, perfeccionista y práctico.",
    "LIBRA": "Diplomático, encantador y amante del equilibrio.",
    "ESCORPIO": "Intenso, misterioso y apasionado.",
    "SAGITARIO": "Aventurero, optimista y amante de la libertad."
};

const compatibilidades = {
    "CAPRICORNIO": { nombre: "TAURO", img: "img/tauro.jpg", desc: "Comparten ambiciones y estabilidad emocional." },
    "ACUARIO": { nombre: "GEMINIS", img: "img/geminis.jpg", desc: "Conectan intelectualmente y adoran la libertad." },
    "PICIS": { nombre: "CANCER", img: "img/cancer.jpg", desc: "Sensibles, soñadores y conectados emocionalmente." },
    "ARIES": { nombre: "LEO", img: "img/leo.jpg", desc: "Pasionales, seguros y líderes por naturaleza." },
    "TAURO": { nombre: "VIRGO", img: "img/virgo.jpg", desc: "Estables, prácticos y leales." },
    "GEMINIS": { nombre: "LIBRA", img: "img/libra.jpg", desc: "Divertidos, comunicativos y sociales." },
    "CANCER": { nombre: "PICIS", img: "img/picis.jpg", desc: "Comprensivos, emocionales y hogareños." },
    "LEO": { nombre: "ARIES", img: "img/aries.jpg", desc: "Valientes, fuertes y apasionados." },
    "VIRGO": { nombre: "TAURO", img: "img/tauro.jpg", desc: "Conectan en lo práctico y emocional." },
    "LIBRA": { nombre: "GEMINIS", img: "img/geminis.jpg", desc: "Creativos, armónicos y sociables." },
    "ESCORPIO": { nombre: "CANCER", img: "img/cancer.jpg", desc: "Intensidad emocional con empatía." },
    "SAGITARIO": { nombre: "ACUARIO", img: "img/acuario.jpg", desc: "Exploradores y amantes de la libertad." }
};

const CalcularSigno=()=>{
    document.querySelector('#fodozodiaco').style.transition="2s ease all"
    document.querySelector('#fodozodiaco').style.zIndex="-2" 
    document.querySelector('#fodozodiaco').style.transform="scale(1)"
    meses=["ENERO","FEBRERO","MARZO","ABRIL","MAYO","JUNIO","JULIO","AGOSTO","SEPTIEMBRE","OCTUBRE","NOVIEMBRE","DICIEMBRE"]
    document.querySelector('#vdia').textContent=dia.value
    document.querySelector('#fecha').textContent=dia.value+" DE "+meses[mes.value-1];
    let s="";
    switch(parseInt(mes.value)){
        case 1: 
        s=(dia.value<=19)?"img/capricornio.jpg":"img/acuario.jpg";
        if (dia.value<=19){
            document.querySelector('#sig').textContent="CAPRICORNIO";
        }else{
            document.querySelector('#sig').textContent="ACUARIO";
        }
        break;
        case 2:
             s=(dia.value<=18)?"img/acuario.jpg":"img/picis.jpg";
             if (dia.value<=18){
                document.querySelector('#sig').textContent="ACUARIO";
            }else{
                document.querySelector('#sig').textContent="PICIS";
            }
        break;
        case 3: 
        s=(dia.value<=20)?"img/picis.jpg":"img/aries.jpg";
        if (dia.value<=20){
            document.querySelector('#sig').textContent="PICIS";
        }else{
            document.querySelector('#sig').textContent="ARIES";
        }
        break;
        case 4:
        s=(dia.value<=19)?"img/aries.jpg":"img/tauro.jpg";
        if (dia.value<=19){
            document.querySelector('#sig').textContent="ARIES";
        }else{
            document.querySelector('#sig').textContent="TAURO";
        }
        break;
        case 5: 
        s=(dia.value<=20)?"img/tauro.jpg":"img/geminis.jpg";
        if (dia.value<=20){
            document.querySelector('#sig').textContent="TAURO";
        }else{
            document.querySelector('#sig').textContent="GEMINIS";
        }
        break;
        case 6: 
        s=(dia.value<=20)?"img/geminis.jpg":"img/cancer.jpg";
        if (dia.value<=20){
            document.querySelector('#sig').textContent="GEMINIS";
        }else{
            document.querySelector('#sig').textContent="CANCER";
        }
        break;
        case 7: 
        s=(dia.value<=22)?"img/cancer.jpg":"img/leo.jpg";
        if (dia.value<=22){
            document.querySelector('#sig').textContent="CANCER";
        }else{
            document.querySelector('#sig').textContent="LEO";
        }
        break;
        case 8: 
        s=(dia.value<=22)?"img/leo.jpg":"img/virgo.jpg";
        if (dia.value<=22){
            document.querySelector('#sig').textContent="LEO";
        }else{
            document.querySelector('#sig').textContent="VIRGO";
        }
        break;
        case 9: 
        s=(dia.value<=22)?"img/virgo.jpg":"img/libra.jpg";
        if (dia.value<=22){
            document.querySelector('#sig').textContent="VIRGO";
        }else{
            document.querySelector('#sig').textContent="LIBRA";
        }
        break;
        case 10: 
        s=(dia.value<=22)?"img/libra.jpg":"img/escorpio.jpg";
        if (dia.value<=22){
            document.querySelector('#sig').textContent="LIBRA";
        }else{
            document.querySelector('#sig').textContent="ESCORPIO";
        }
        break;
        case 11: 
        s=(dia.value<=21)?"img/escorpio.jpg":"img/sagitario.jpg";
        if (dia.value<=22){
            document.querySelector('#sig').textContent="ESCORPIO";
        }else{
            document.querySelector('#sig').textContent="LIBRA";
        }
        break;
        case 12: 
        s=(dia.value<=21)?"img/sagitario.jpg":"img/capricornio.jpg";
        if (dia.value<=22){
            document.querySelector('#sig').textContent="SAGITARIO";
        }else{
            document.querySelector('#sig').textContent="CAPRICORNIO";
        }
        break;
    }
    let signo = document.querySelector('#sig').textContent;

    
    document.querySelector('#descripcion').textContent = descripciones[signo];
    
    
    document.querySelector('#compatibleNombre').textContent = compatibilidades[signo].nombre;
    document.querySelector('#compatibleImg').src = compatibilidades[signo].img;
    document.querySelector('#compatibleDesc').textContent = compatibilidades[signo].desc;
    setTimeout(() => {
    document.querySelector('#fodozodiaco').src=s;
    document.querySelector('#fodozodiaco').style.Zindex="5"
    document.querySelector('#fodozodiaco').style.transform="scale(1.1)"
}, 500);
}