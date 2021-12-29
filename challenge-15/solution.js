
export default function checkSledJump(heights) {
    // ¡No olvides compartir tu solución en redes!
    let isUp = true;
    let changes = 0;
    heights.forEach((height,index) => {
        if(isUp && height >= heights[index+1]){
            changes++;
            isUp = false;
        }
        else if(!isUp && height <= heights[index+1]){
            changes++;
            isUp = true;
        }
    });
    return changes == 1;
}

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!