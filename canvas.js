var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d"); 

pincel.fillStyle = "lightgrey";
pincel.fillRect(0,0,1200,800); 

radio = 10;
color = "black"

// crea la base triangular de la imagen del ahorcado
function baseTriangulo(color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.moveTo(200,650);
    pincel.lineTo(300,700);
    pincel.lineTo(100,700);
    pincel.lineTo(200,650);
    pincel.stroke();

}

// crea el poste
function dibujarPoste(){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.moveTo(200,650);
    pincel.lineTo(200,200);
    pincel.lineTo(350,200);
    pincel.stroke();
}

function dibujarCuerda(){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.moveTo(350,200);
    pincel.lineTo(350,250);
    pincel.stroke();
}

//crea circulos
function dibujarCabeza(){
    pincel.fillStyle=color;
    pincel.beginPath();
    pincel.arc(350,275,25,0,2*Math.PI);
    pincel.stroke();

}

function dibujarCuerpo(){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.moveTo(350,300);
    pincel.lineTo(350,400);
    pincel.stroke();
}

function dibujarPiernas(){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.moveTo(350,400);
    pincel.lineTo(325,475);
    pincel.moveTo(350,400);
    pincel.lineTo(375,475);
    pincel.stroke();
}

function dibujarBrazos(){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.moveTo(350,325);
    pincel.lineTo(325,375);
    pincel.moveTo(350,325);
    pincel.lineTo(375,375);
    pincel.stroke();
}

function dibujarOjos(){
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.moveTo(340,270);
    pincel.lineTo(330,280);
    pincel.moveTo(330,270);
    pincel.lineTo(340,280);

    pincel.moveTo(360,270);
    pincel.lineTo(350,280);
    pincel.moveTo(350,270);
    pincel.lineTo(360,280);

    pincel.stroke();
    var mensaje = "Fin del Juego!"
    var color = "red";
    final(mensaje, color);
}

//crea los guiones que indicaran la cantidad de letras
function crearGuion(origenX,finX) {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(origenX,700);
    pincel.lineTo(finX,700);
    pincel.stroke();
}

//limpiar los guiones cada vez que se presiona iniciar juego
function limpiarGuiones() {
    pincel.clearRect(350,650,1150,750);
    pincel.fillStyle = "lightgray";
    pincel.fillRect(350,650,1150,750);
}

// Dibujar letra
function dibujarletra(texto, x) {
    pincel.font="25pt Verdana";
    pincel.fillText(texto,x,675);
}

// Dibujar letra incorrecta
function dibujarUtilizada(letra, x) {
    pincel.font="25pt Verdana";
    pincel.fillText(letra,x,500);
}

// Escribir Mensaje Final
function final(mensaje, color){
    pincel.fillStyle = color;
    pincel.font="30pt Verdana";
    pincel.fillText(mensaje,700,400)
    setTimeout(jugarDenuevo, 2500); 
}

function limpiarPantalla() {
    pincel.clearRect(0,0,1200,800);
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0,0,1200,800);
}

