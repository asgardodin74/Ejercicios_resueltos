/*2. Crea un html con un párrafo y un botón. El párrafo tendrá dentro la frase “la variable está en
false”. Cuando hagamos click en el botón, el valor de la variable cambiará a true y el párrafo
tendrá dentro la frase “la variable está en true”.*/


document.querySelector("body").style.textAlign="center";
//Selecciono el boton
let variable=false;
button = document.querySelector("#btn");
button.addEventListener("click", cambiar);

// Esta es la función que va a ejecutarse en el addEventListener
function cambiar() {
  //Recojo el elemento que voy a modificar
  if(variable==true)
  {
    
    p = document.querySelector("#num");
    p.innerHTML = "La variable esta a false";
    variable=false;
  }
  else
  { 
    
    p = document.querySelector("#num");
    p.innerHTML = "La variable esta a true";
    variable=true;

  }
 
}
