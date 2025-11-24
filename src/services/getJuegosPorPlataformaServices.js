import { juegos } from "../../public/data/info.js";


export function getJuegos(plataforma) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const juego = juegos.filter(j => j.plataforma === plataforma)
            resolve(juego);
        }, 1000);
    });
}