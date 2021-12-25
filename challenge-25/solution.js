export default function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    // Por favor, comparte en las redes qué te ha parecido! 🚀
    var position, indexArray;
    game.forEach((array, index) => {
        if (array.indexOf('m') != -1) {
            position = array.indexOf('m');
            indexArray = index;
        }
    });

    var element;
    if (direction == 'up' && game[indexArray - 1]) {
        element = game[indexArray - 1][position];
    } else if (direction == 'down' && game[indexArray + 1]) {
        element = game[indexArray + 1][position];
    } else if (direction == 'right' && game[indexArray][position + 1]) {
        element = game[indexArray][position + 1];
    } else if (direction == 'left' && game[indexArray][position - 1]) {
        element = game[indexArray][position - 1];
    }

    return element === '*';
}

const room = [
    [' ', ' ', ' '],
    [' ', ' ', 'm'],
    [' ', ' ', '*']
]

canMouseEat('up', room)   // false
canMouseEat('down', room)   // true
canMouseEat('right', room)   // false
canMouseEat('left', room)   // false

const room2 = [
    ['*', ' ', ' ', ' '],
    [' ', 'm', '*', ' '],
    [' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '*']
]

canMouseEat('up', room2)   // false
canMouseEat('down', room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left', room2)   // false