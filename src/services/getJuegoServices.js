import { juegos } from "../../public/data/info.js"


export function getJuego(id) {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const juego = juegos.find(j => j.id === id)
            if (juego) {
                resolve(juego);
            } else {
                reject(`No hay juego con id ${id}`);
            }
        }, 800);
    })
    return promesa
    
}
