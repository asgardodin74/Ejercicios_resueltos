/*Escribe un programa que pida al usuario dos números. Usa esos 2 números en una función
que divide el primero por el segundo y devuelve el resultado. Muestra el resultado que
devuelve la función en un alert. Después vuelve a pedir los números y hacer todo otra vez
hasta que el usuario introduzca un 0 como segundo número.*/
function mayor(numero1,numero2)
{
    let resultado=numero1/numero2;
    

    if(numero1>numero2)
    {
        return true;
    }
    else
    {
        return false;
    };
}

let valor1=prompt("INTRODUCE 1º VALOR: ");
let valor2=prompt("INTRODUCE 2º VALOR ");
if(mayor(valor1,valor2)==true)
{
    console.log("EL PRIMER NÚMERO ES MÁS GRANDE");
}
else
{
    console.log("EL PRIMER VALOR NO ES MÁS GRANDE");

}

