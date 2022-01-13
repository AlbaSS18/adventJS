export default function sumPairs(numbers, result) {
    // ¡Y no olvides compartir tu solución en redes!
    for (var i = 0; i < numbers.length; i++) {
        const firstNumber = numbers[i];
        for (var j = i + 1; j < numbers.length; j++) {
            const secondNumber = numbers[j];
            if (firstNumber + secondNumber == result) {
                return [firstNumber, secondNumber];
            }
        }
    }
    return null;
}

sumPairs([3, 5, 7, 2], 10) // [3, 7]
sumPairs([-3, -2, 7, -5], 10) // null
sumPairs([2, 2, 3, 1], 4) // [2, 2]
sumPairs([6, 7, 1, 2], 8) // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6) // [1, 5]