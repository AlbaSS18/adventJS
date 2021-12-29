export default function canReconfigure(from, to) {
    // ¡No olvides compartir tu solución en redes!
    if (from.length != to.length) {
        return false
    }
    let letters = {};
    for (const index in from) {
        if (to.substring(0, index).includes(to[index]) && letters[from[index]] != to[index]) {
            return false;
        }
        if (letters[from[index]] && letters[from[index]] !== to[index]) return false
        letters[from[index]] = to[index];
    }
    return true;
}

/*const from = 'BAL'
const to = 'LIB'*/
console.log(canReconfigure('BAL', 'LIB')) // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

/*const from = 'CON'
const to = 'JUU'*/
console.log(canReconfigure('CON', 'JUU')) // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

/*const from = 'XBOX'
const to = 'XXBO'*/
console.log(canReconfigure('XBOX', 'XXBO')) // false
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

/*const from = 'XBOX'
const to = 'XOBX'*/
console.log(canReconfigure('XBOX', 'XOBX')) // true

/*const from = 'MMM'
const to = 'MID'*/
console.log(canReconfigure('MMM', 'MID')) // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

/*const from = 'AA'
const to = 'MID'*/
console.log(canReconfigure('AA', 'MID')) // false -> no tiene la misma longitud