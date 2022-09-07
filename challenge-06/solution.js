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