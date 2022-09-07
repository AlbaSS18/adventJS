export default function pangram(letter) {
    // ¡No olvides compartir tu solución en redes!
    let wordSet = new Set(letter.toLowerCase().replace(/\s/g, '').normalize('NFKD').replace(/[^\w]/g, ''));

    return wordSet.size == 26 && letter.toLowerCase().includes('ñ');
}

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false