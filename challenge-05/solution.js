export default function daysToXmas(date) {
    // ¡Y no olvides compartir tu solución en redes!
    const dateChristmas = new Date('Dec 25, 2021');
    return Math.ceil(
      (dateChristmas.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );
  }