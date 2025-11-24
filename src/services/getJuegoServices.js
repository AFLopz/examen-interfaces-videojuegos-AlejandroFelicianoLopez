import { juegos } from "../public/data/info.js";


export function getJuego(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const juego = juegos.find(j => j.id === id)?.nombre
            if (juego) {
                resolve(juego);
            } else {
                reject(`No hay juego con id ${id}`);
            }
        }, 800);
    });
}
