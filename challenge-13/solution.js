export default function wrapGifts(gifts) {
    var array = [];
    if (gifts.length != 0) {
        array.push('*'.repeat(gifts[0].length + 2));
        gifts.forEach((gift) => {
            array.push(`*${gift}*`);
        });
        array.push('*'.repeat(gifts[0].length + 2));
    }
    return array;
}

wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
