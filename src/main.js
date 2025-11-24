import { getJuego } from "./services/getJuegoServices.js";

const btnId = document.getElementById("btn-id");
const out = document.getElementById("salida")
function getID(){
    const input = prompt("Dime id");
    const id = Number(input)
    return id
}

function findjuego(id){
    getJuego(id)
    .then((juego) => {
        out.innerHTML = `Juego encontrado: 
        <br> -ID: ${juego.id}
        <br> -Titulo: ${juego.titulo}
        <br> -Plataforma: ${juego.plataforma}`;
       
    })
    .catch((error) => {
        out.textContent = error;
    });
}

btnId.addEventListener("click", ()=> {
        const id= getID()
        findjuego(id)
    
})