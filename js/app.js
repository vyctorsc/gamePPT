 //Funcion Aleatoria para determinado rango que se elija
 function numAleatorio(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min))
}

function eligirOpcion(opcion) {
    let result = " "
    if(opcion == 1){
        result = "Piedra 🪨"
    } else if(opcion == 2){
        result = "Papel 🧻"
    } else if(opcion == 3){
        result = "Tijera ✂️"
    } else {
        result = "opcion no valida"
    }
    return result
}
// Inicializando Variables
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3){
    //Eleccion Aleatoria de pc atraves de funcion numAleatoria
    pc = numAleatorio(1, 3)
    //Eleccion de jugador por teclado
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    alert("PC elige: " + eligirOpcion(pc))
    alert("Jugador elige: " + eligirOpcion(jugador))
    //Combate
    if (pc == jugador) {
        alert("EMPATE")
    } else if(jugador == 1 && pc == 3){
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if(jugador == 2 && pc == 1){
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if(jugador == 3 && pc == 2){
        alert("GANASTE")
        triunfos = triunfos + 1
    } else {
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces")