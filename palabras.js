const bancoDePalabras = [
    "Profesor",
    "Velo",
    "Casco",
    "Tijeras",
    "Aceite",
    "Yunta",
    "Tarta",
    "Derecha",
    "Embajador",
    "Tostar",
    "Flecha",
    "Tarjetas",
    "Sufrir",
    "Madurez",
    "Donde",
    "Cajonera",
    "Cosa",
    "Lamer",
    "Descifrar",
    "Espumar",
    "Postre",
    "Bocadillo",
    "Tornillo",
    "Leer",
    "Pastar",
    "Mantel",
    "Novio",
    "Colectivo",
    "Collar",
    "Cicatrizar",
    "Cambio",
    "Trasplantar",
    "Uniforme",
    "Fracturar",
    "Electricidad",
    "Rotor",
    "Velorio",
    "Persona",
    "Chicos",
    "Apellido",
    "Cometa",
    "Cabalgar",
    "Escalera",
    "Promedio",
    "Carnicero",
    "Nadar",
    "Pesa",
    "Bestia",
    "Hemisferios",
    "Pato",
    "Vidrio",
    "Denso",
    "Acupuntura",
    "Pintarse",
    "Desayuno",
    "Fiesta",
    "Pera",
    "Minar",
    "Nariz",
    "Raya",
    "Clavo",
    "Suegro",
    "Manta",
    "Ahogar",
    "Cejas",
    "Conflicto",
    "Pararse",
    "Tumba",
    "Envasado",
    "Cuchillo",
    "República",
    "Adivino",
    "Francia",
    "Seis",
    "Anchoa",
    "Minorista",
    "Mono",
    "Hiedra",
    "Manejar",
    "Escribir",
    "Tapizar",
    "Tango",
    "Adelgazar",
    "Obelisco",
    "Malo",
    "Pastel",
    "Abanderado",
    "Venecia",
    "Fugarse",
    "Historieta",
    "Divorciado",
    "Adhesivo",
    "Mantel",
    "Azotar",
    "Caracol",
    "Vuelta",
    "Balizas",
    "Aspiradora",
    "Caños",
    "Espiga",
]

// Conectamos el boton agregar palabra
var botonAgregar = document.querySelector("#nueva-palabra");

botonAgregar.addEventListener("click", function(event){
    event.preventDefault();

    var palabraNueva = document.querySelector("#input-nueva-palabra");
    console.log("se agrego: " + palabraNueva.value);
    agregarPalabra(palabraNueva.value);
})

function agregarPalabra(palabraNueva) {
    nuevaPalabra = bancoDePalabras.push(palabraNueva);
    alert(palabraNueva + " agregada!");
}