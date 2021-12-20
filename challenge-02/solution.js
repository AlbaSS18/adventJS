function listGifts(letter) {
    // ¡Tú puedes!
    let whitespaces = /\s+/;
    console.log(letter.replace(/\s+_\S+/g, ''));
    const arrayGift = letter.split(whitespaces).map(gift => gift.trim()).filter(gift => gift !== '' && !gift.startsWith('_'));
    
    return arrayGift.reduce((obj, item) => {
        obj[item] = (obj[item] || 0) + 1;
        return obj;
    },{});
}

const carta = 'bici             coche balón _playstation bici coche peluche';

const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/