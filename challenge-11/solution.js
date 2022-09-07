export default function shouldBuyFidelity(times) {
    // ¡No olvides compartir tu solución en redes!
    const TICKET_PRICE = 12;
    const FIDELITY_CARD_PRICE = 250;
    const DISCOUNT_PERCENTAGE = 0.75;

    var normalTicket = times * TICKET_PRICE;
    var fidelity = FIDELITY_CARD_PRICE;
    for (var i = 1; i <= times; i++) {
        fidelity += TICKET_PRICE * Math.pow(DISCOUNT_PERCENTAGE, i);
    }
    return fidelity < normalTicket;
}

shouldBuyFidelity(1) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad