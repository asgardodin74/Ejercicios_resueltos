/*Pide por prompt un número. Recójelo en una variable. Pinta un párrafo en el html en el que
inicialmente se mostrará ese valor, y un botón debajo. El botón ejecutará una función que
recibirá ese número como argumento y lo sumará al número inicial.*/

let valorstring=prompt("INGRESA UN VALOR: ");
let valorint=parseInt(valorstring);
document.querySelector("body").style.textAlign="center";
//Selecciono el boton
button = document.querySelector("#btn");

button.addEventListener("click", function () {
    sumatorio(valorint);
    
});

// Esta es la función que va a ejecutarse en el addEventListener
function sumatorio(valor) {
  //Recojo el elemento que voy a modificar
  p = document.querySelector("#num");
  p.innerHTML = parseInt(p.innerHTML) + valor;
}