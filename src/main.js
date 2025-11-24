import { getJuego } from "./services/getJuegoServices.js";
import { getValoracion } from "./services/getValoracionServices.js";
const btnId = document.getElementById("btn-id-valoracion");
const out = document.getElementById("salida")
function getID() {
    const input = prompt("Dime id");
    const id = Number(input)
    return id
}

function findjuego(id) {
    Promise.all([getJuego(id), getValoracion(id)])
        .then(([juego, valoracion]) => {
            out.innerHTML = `Juego y valoración: 
            <br> -${juego.titulo} (${juego.plataforma})
            <br> -Puntuacion: ${valoracion.puntuacion}`;
        })
        .catch((error) => {
            out.textContent = error;
        });
}

btnId.addEventListener("click", () => {
    const id = getID()
    findjuego(id)

})