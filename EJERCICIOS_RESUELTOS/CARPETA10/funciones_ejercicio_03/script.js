/*Escribe un programa que pida al usuario dos números. Usa esos 2 números en una función
que divide el primero por el segundo y devuelve el resultado. Muestra el resultado que
devuelve la función en un alert. Después vuelve a pedir los números y hacer todo otra vez
hasta que el usuario introduzca un 0 como segundo número.*/
function division(numero1,numero2)
{
    let resultado=numero1/numero2;
    alert("RESULTADO ES: "+resultado);

    
}

let valor1,valor2=0;
do
{   
    valor1=prompt("INTRODUCE 1º VALOR: ");
    valor2=prompt("INTRODUCE 2º VALOR ");
    division(valor1,valor2);
}
while(valor2!=0);









