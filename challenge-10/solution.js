export default function getCoins(change) {
    // ¡No olvides compartir tu solución en redes!
    let coins = [50, 20, 10, 5, 2, 1];
    let result = change;
    let coinsChange = Array(coins.length).fill(0);

    for (let index = 0; index < coins.length; index++) {
        let numberOfCoinsNecessary = Math.floor(result / coins[index]);
        if (numberOfCoinsNecessary > 0) {
            coinsChange.splice(index, 1, numberOfCoinsNecessary);
            result = result % coins[index] // el resto de la divisón ==> result - (coins[index] * numberOfCoinsNecessary);
        }
    }

    return coinsChange.reverse();
}

getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos