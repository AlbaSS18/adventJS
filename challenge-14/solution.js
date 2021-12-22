export default function missingReindeer(ids) {
    // ¡No olvides compartir tu solución en redes!
    ids.sort((a, b) => a - b);

    const find = ids.find((element, index) => element != index);

    return !find ? ids[ids.length - 1] + 1 : find - 1;
}

missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0]) // -> 1 (¡es el último el que falta!)
