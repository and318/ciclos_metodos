function tarea() {
    var select = parseInt(prompt("Ingrese un numero del 1 al 5"));

    switch (select) {
        case 1:
            var valorNumero = prompt("Ingrese un número del 1 al 100");
            for (let i = 0; i <= valorNumero; i++) {
                console.log(i);
            };
            location.reload(); 
            break;
        case 2:
            do {
                var colorCaballo = prompt("¿De qué color es el caballo blanco de Napoleón?");
                var color = colorCaballo.toLowerCase();

            } while (color !== "blanco");
            location.reload(); 
            break;
        case 3:
            var notaMatematica = parseInt(prompt("Ingrese su promedio de matemáticas"));
            var notaFisica = parseInt(prompt("Ingrese su promedio de física"));
            var notaCiencia = parseInt(prompt("Ingrese su promedio de ciencias"));
            var promedio = (notaMatematica + notaFisica + notaCiencia) / 3;
            var promedioEntero = Math.round(promedio);
            alert("Su promedio es: " + promedioEntero);
            location.reload(); 
            break;
        case 4:
            var frutas = [];

            do {
                frutas.push(prompt("Ingrese el nombre de una fruta"));

            } while (frutas.length <= 2);

            var apple;

            for (manzana of frutas) {
                if (manzana != "manzana") {
                    console.log(manzana);
                } else {
                    continue
                }
            };
            location.reload(); 
            break;
        case 5:
            var nombre = prompt("Escribe tu nombre");
            nombre = nombre.toLocaleLowerCase();
            var vocal = [];
            var consonante = [];
            var letras;

            for (letras of nombre) {
                if (letras == "a" || letras == "e" || letras == "i" || letras == "o" || letras == "u") {
                    vocal.push(letras);
                } else {
                    consonante.push(letras);
                }
            };
            alert("Tu nombre tiene " + consonante.length + " consonantes y " + vocal.length + " vocales.");
            location.reload(); 
            break;
        default:
            alert("Ingresó un numero inválido");
            location.reload(); 
            break;
    }

}




