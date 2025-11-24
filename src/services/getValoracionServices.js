import { valoraciones } from "../../public/data/info.js";


export function getValoracion(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const valoracion = valoraciones.find(v => v.id === id)
            if (valoracion) {
                resolve(valoracion);
            } else {
                reject(`No hay Valoraciones con id ${id}`);
            }
        }, 900);
    });
}
    