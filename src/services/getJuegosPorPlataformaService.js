import { juegos } from "../public/data/info.js";


export function getJuego(plataforma) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const juego = juegos.filter(j => j.plataforma === plataforma)
            resolve(juego);
        }, 1000);
    });
}