var Sli=document.querySelector('#Slider');
Sli.oninput=()=>{
    var value=Sli.value;
    document.getElementById('Result').innerHTML=value;
}