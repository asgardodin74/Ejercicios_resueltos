/*Con las imágenes del juego de magic (anverso y reverso) haz una página que muestre
primero el reverso de la carta. Cuando se haga click en esa imagen, desaparecerá y en su
lugar aparecerá el anverso. Si hacemos click en el anverso, éste desaparecerá y aparecerá el
reverso. Así hasta que nos aburramos.*/

document.querySelector("body").style.textAlign="center";
let variable=false;//Estado false representa reverso
document.querySelector("img").src ="./reverso.png";
document.querySelector("img").style.width="20%"; 
button = document.querySelector("#btn");
button.addEventListener("click", cambiar);

// Esta es la función que va a ejecutarse en el addEventListener
function cambiar() {
  //Recojo el elemento que voy a modificar
  if(variable==true)
  {
    
    document.querySelector("img").src ="./reverso.png"; 
    document.querySelector("img").style.width="20%";
    variable=false;
  }
  else
  { 
    
    document.querySelector("img").src ="./anverso.jpg"; 
    document.querySelector("img").style.width="20%";
    variable=true;

  }

  
 
}
