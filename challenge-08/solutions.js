export default function maxProfit(prices) {
    // ¡Y no olvides compartir tu solución en redes!
    let arrayBuy = prices.slice(0, prices.length - 1);
    let indexValueOf = prices.indexOf(Math.min(...arrayBuy));
    let arraySold = prices.slice(indexValueOf + 1, prices.length);
    return Math.max(...arraySold) - Math.min(...arrayBuy) <= 0
        ? -1
        : Math.max(...arraySold) - Math.min(...arrayBuy);
}



const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) // -> -1 (no hay ganancia posible)
    