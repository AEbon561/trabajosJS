var num=document.querySelector("#num");
var vnum=document.querySelector("#vnum");
var res=document.querySelector("#res");
num.oninput=()=>{
    res.innerHTML="<img src='Img/load.gif' width='200px' height='200px' class='m-auto'>";
    setTimeout(()=>{
        let n=parseInt(num.value);
        let TablaH="";
        vnum.innerHTML=n;
        let raiz=Math.sqrt(n);
        TablaH+=raiz;
        res.innerHTML=raiz.toFixed(2);
    },1000);

    setTimeout(()=>{

    },1000);
} 