export default function decodeNumber(symbols) {
    // ¡No olvides compartir tu solución en redes!
    const symbols_values_json = {
        '.': 1,
        ',': 5,
        ':': 10,
        ';': 50,
        '!': 100,
    };

    const arrayChar = symbols.split('');
    let suma = 0;
    arrayChar.forEach((char, index) => {
        const nextElement = symbols_values_json[arrayChar[index + 1]];
        suma += nextElement > symbols_values_json[char] ? -symbols_values_json[char] : symbols_values_json[char];
    });
    return suma;
}