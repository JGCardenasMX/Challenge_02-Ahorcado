//Conectamos el botón inicar juego con las funciones aleatorio y seleccionarPalabra;
var iniciarJuego = document.querySelector("#iniciar-juego");

iniciarJuego.addEventListener("click",function (event) {
    letrasPresionadas =[];
    console.log("letras presionadas: " + letrasPresionadas);
    contadorLetras = 0;
    console.log("contadorLetras: " + contadorLetras);
    erroresCometidos = []
    console.log("erroresCometidos: " + erroresCometidos);
    cuentaAciertos = 0;
    console.log("cuentaAciertos: " + cuentaAciertos);
    aciertosOptenidos =[];
    console.log("aciertosOptenidos: " + aciertosOptenidos);
    errorStatus= "";
    limpiarPantalla();
    color="black"
    baseTriangulo(color);
    var palabraSecreta = crearPalabraSecreta();
    console.log(palabraSecreta);
    arraySecreto = palabraSecreta.split("");
    guiones = calcularGuiones(arraySecreto);
    pixeles = pixelesXletra(guiones);
    pixelesEspacio = pixelesXespacio(pixeles, guiones);
    dimencionGuiones(pixeles, pixelesEspacio, guiones);
    arraySecreto = arrayPalabra(palabraSecreta);
    dibujarLetras(arraySecreto, pixeles, pixelesEspacio);
    
    
    
    //console.log(guiones);
    //console.log(pixelesEspacio);
    console.log(arraySecreto);
    return palabraSecreta;
})



// Keyboard events
iniciarJuego.addEventListener('keydown', onKeyDownHandler); //keydown es una y keypress es otra, cuidado

//Regresa un número aleatorio en base a la cantidad de palabras en el array
function aleatorio(cantidad){
    return Math.round(Math.random()*cantidad);
}

//regresa una palabra del array
function seleccionarPalabra(aleatorio) {
    return bancoDePalabras[aleatorio]
}

// funcion para seleccionar la palabra secreta entre todas las del array
function crearPalabraSecreta() {
    var cantidad = bancoDePalabras.length;
    var palabra = seleccionarPalabra(aleatorio(cantidad));
    //console.log(aleatorio(cantidad));
    //console.log(palabra);
    return palabra;
}

//Nos regresa cuantas letras (guiones) componen nuestra palabra secreta
function calcularGuiones(palabraSecreta) {
    guiones = palabraSecreta.length;
    console.log(guiones);
    return guiones;
}

// calcula cuantos pixeles por letra asignar para la creación de cada guion
function pixelesXletra(letras) {
    pixeles = Math.floor(800/letras);
    if (pixeles <= 114) {
        pixeles = Math.floor(pixeles*.9);
        //console.log("pixeles reducido por letra =" + pixeles);
        return pixeles;
    }
    else {
        pixeles = 114;
        //console.log("pixeles por letra estandar = " + pixeles);
        return pixeles;
    } 
}

// calcula cuantos pixeles abra entre guiones
function pixelesXespacio(pixeles, letras) {
    espacios = letras - 1;
    espacio = 800 - (pixeles * letras);
    pixelesEspacio = Math.floor(espacio/espacios);
    console.log("pixeles por guion =" + espacio);
    console.log("pixeles entre guiones =" + pixelesEspacio);
    return pixelesEspacio;
}

//Nos calcula la medida de cada guion y la cantidad y los crea en canvas
function dimencionGuiones(carreraX, espacioX, letras) {
    origenX = 350;
    finalX = origenX + carreraX;
    incremento = carreraX + espacioX;
    //console.log("Esto es el final del guion = " + finalX);
    //console.log("Esto es el incremento: " + incremento);
    for (let multiplicador = 0; multiplicador < letras; multiplicador++) {
        crearGuion(origenX, finalX);
        //console.log(origenX);
        //console.log(finalX);
        origenX = origenX + incremento;
        finalX = finalX + incremento;
    }
}


var letrasPresionadas =[];
var contadorLetras = 0;
var erroresCometidos = []
var cuentaAciertos = 0;
var aciertosOptenidos =[];
var errorStatus= "";


// Verifica que la letra presionada es una letra
function onKeyDownHandler(event) {
    var codigo = event.which
    
    console.log("Presionada: " + codigo);
     
    if((codigo >= 65 && codigo <= 90) || (codigo==192)){
      if (codigo==192) {
          codigo = 209          
      }
        console.log(String.fromCharCode(codigo));
        console.log("presionaste una letra");
      var letraPresionada = String.fromCharCode(codigo);
      
      //console.log("error: " + errores);
      

      if (letrasPresionadas.includes(letraPresionada)!=true) {
        letraUtilizada(letraPresionada, contadorLetras);
        var agregar = letraPresionada;
        contadorLetras = letrasPresionadas.push(agregar);
        error = verificar(letraPresionada, arraySecreto, pixeles, pixelesEspacio);
        cuentaAciertos = aciertosOptenidos.push(error.length);
        console.log("aciertos: " + aciertosOptenidos);
        sumaAciertos = contadorAciertos(aciertosOptenidos);

        if (sumaAciertos == arraySecreto.length) {
            crearVictoria();
        }
        
        //console.log(letrasPresionadas);
        //console.log("el lugar es: " + lugar);
        //console.log("las cantidad de letras en el array es: " + contadorLetras)
      }
      
    }
    else {
        console.log("no presionaste una letra");    
    }    
}
  
// Crea un array con la palabra secreta y hace las letras MAYUSCULAS
function arrayPalabra(palabraSecreta) {
    var palabraSecretaMayu = palabraSecreta;
    palabraSecretaMayu = palabraSecretaMayu.toUpperCase();
    var arraySecreto = [...palabraSecretaMayu]
    return arraySecreto;
}

// Dibuja las letras de la palabra secreta sobre los guiones
function dibujarLetras(arraySecreto, carreraX, espacioX) {
    origenX = 350;
    centroX = ((origenX + (carreraX/2))-13); //se tomo trece ya que la letra es de 26 puntos y la mitad es 13
    incremento = carreraX + espacioX;
    for (let index = 0; index < arraySecreto.length; index++) {
        const letraDibujada = arraySecreto[index];
        //dibujarletra(letraDibujada, centroX,)
        centroX = centroX + incremento;
    }
    
}

// Dibujar las letras incorrectas
function letraUtilizada(letra, ubicador) {
    x = 350 + (30 * ubicador);
    dibujarUtilizada(letra, x);
    
}



// Verifica que la letra este en la palabra
function verificar(letra, arraySecreto, carreraX, espacioX, errores) {
    var indices = [];
    var element = letra;
    
    var origenX = 350;
    var centroX = ((origenX + (carreraX/2))-13); //se tomo trece ya que la letra es de 26 puntos y la mitad es 13
    var incremento = carreraX + espacioX;
    var idx = arraySecreto.indexOf(element);

    console.log("este es el idx: " + idx);

    

    while (idx != -1) {
        indices.push(idx);
        idx = arraySecreto.indexOf(element, idx + 1); 
        console.log("indices: " + indices.length);
        
    }

    indices.forEach(element => {
        ubicacion = element;
        //console.log("la ubicacion es: " + ubicacion)
        x = (centroX + (incremento * ubicacion));
        //console.log("este es x: " + x);
        dibujarletra(letra, x);
        //console.log("este es el elemento: " + element)
        //console.log("error actual: " + errorStatus);

    });
    
    if (indices.length == []) {
        errorStatus=true;
        errores = erroresCometidos.push(errorStatus)
        console.log("erroresCometidos: " + erroresCometidos.length);
        crearAhorcado(erroresCometidos);
    }
    return indices;
    
}


// Contar aciertos
function contadorAciertos(aciertosOptenidos) {
    const arrayAciertos = aciertosOptenidos;
    let sum = 0;

    for (let i = 0; i < arrayAciertos.length; i++) {
        sum += arrayAciertos[i];
    }

    console.log("aciertos totales: " + sum);

    return sum;
    
}

// Dibuja el ahorcado
function crearAhorcado(erroresCometidos){
    if (erroresCometidos.length == 1) {
        dibujarPoste();
    };
    if (erroresCometidos.length == 2) {
        dibujarCuerda();
    };
    if (erroresCometidos.length == 3) {
        dibujarCabeza();
    };
    if (erroresCometidos.length == 4) {
        dibujarCuerpo();
    };
    if (erroresCometidos.length == 5) {
        dibujarPiernas();
    };
    if (erroresCometidos.length == 6) {
        dibujarBrazos();
    };
    if (erroresCometidos.length == 7) {
        dibujarOjos();
    };
    
};

// Envia el mensjae de victoria
function crearVictoria() {
    mensaje = "Ganastes \nFelicidades!";
    final(mensaje, "green");
};

function jugarDenuevo(){
    var mensaje;
    var opcion = confirm("¿Quieres jugar de nuevo?");
    if (opcion == true) {
        iniciarJuego.click();
	} else {
	    alert("Gracias por jugar!!");
	}
}

// prepara el juego nuevamente una vez se gane o pierda
function reiniciar() {
    letrasPresionadas =[];
    console.log("letras presionadas: " + letrasPresionadas);
    contadorLetras = 0;
    console.log("contadorLetras: " + contadorLetras);
    erroresCometidos = []
    console.log("erroresCometidos: " + erroresCometidos);
    cuentaAciertos = 0;
    console.log("cuentaAciertos: " + cuentaAciertos);
    aciertosOptenidos =[];
    console.log("aciertosOptenidos: " + aciertosOptenidos);
    errorStatus= "";
    limpiarPantalla();
}

