import { getJuegos } from "./services/getJuegosPorPlataformaServices.js";

const btnId = document.getElementById("btn-plataforma");
const out = document.getElementById("salida")
function getPlataforma(){
    const input = prompt("Dime id");
    const plataforma = input
    return plataforma
}

async function findjuegos(plataforma){
    try {
        const juegos = await getJuegos(plataforma);
            out.innerHTML = `Juegos encontrados para la plataforma "${plataforma}"<br>`
            juegos.forEach(j => {
                out.innerHTML += `- ${j.titulo}<br>`;
            });
        } catch (error) {
            out.textContent = error;
        }
}

btnId.addEventListener("click", ()=> {
        const Plataforma= getPlataforma()
        findjuegos(Plataforma)
    
})