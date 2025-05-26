texto=document.querySelector('#texto')
traduccion=document.querySelector('#traduccion')

texto.onkeyup=()=>{
 frase=texto.value
   frase=frase.replaceAll('a','afa');
   frase=frase.replaceAll('e','efe');
   frase=frase.replaceAll('i','ifi');
   frase=frase.replaceAll('o','ofo');
   frase=frase.replaceAll('u','ufu');
   traduccion.innerHTML=frase.toUpperCase();
}