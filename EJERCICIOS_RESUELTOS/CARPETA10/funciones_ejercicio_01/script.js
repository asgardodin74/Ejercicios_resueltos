/* Escribe una función que escriba “Hola” tantas veces
    como el número que le pasamos de parámetro.
    Llámala dos veces, primero con 5 y después con 3. */

    function escribir(veces)
    {

        for(let i=0;i<veces;i=i+1)
        {
            console.log(i+"Hola");
        }

    }

    escribir(5);
    escribir(3);
