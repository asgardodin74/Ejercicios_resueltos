/*Crea un aplicación que nos convierta una cantidad de euros introducida por teclado a otra
moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como parámetros, la
cantidad de euros y la moneda a pasar que será un string , este no devolverá ningún valor,
mostrará un mensaje indicando el cambio.
a. 0.86 libras es un 1 €
b. 1.28611 $ es un 1 €
c. 129.852 yenes es un 1 €*/

function conversorMoneda(euros,moneda)
{
    let resultado;
    let string;
    switch(moneda)
    {

        case "dolares":
            resultado=1.28611*euros;
            string="dolares";

        case "yenes":
            resultado=129.852*euros;
            string="yenes";

        case "libras":
            resultado=0.86*euros;
            string="libras";
        



    }
    alert("RESULTADO ES: "+resultado+string);

    
}
let dinero=prompt("INTRODUCE CANTIDAD DE DINERO");
let cambio=prompt("Introduce moneda dolares,yenes,libras")
conversorMoneda(dinero,cambio);