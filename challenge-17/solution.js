export default function countPackages(carriers, carrierID) {
    // ¡No olvides compartir tu solución en redes!
    const carrier = carriers.find((work) => work[0] == carrierID);
    var packages = carrier[1];
    if (!carrier[2].length == 0) {
        carrier[2].forEach((team) => {
            packages += countPackages(carriers, team);
        });
    }

    return packages;
}

const carriers = [
    ['dapelu', 5, ['midu', 'jelowing']],
    ['midu', 2, []],
    ['jelowing', 2, []]
]

countPackages(carriers, 'dapelu') // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
    ['lolivier', 8, ['camila', 'jesuspoleo']],
    ['camila', 5, ['sergiomartinez', 'conchaasensio']],
    ['jesuspoleo', 4, []],
    ['sergiomartinez', 4, []],
    ['conchaasensio', 3, ['facundocapua', 'faviola']],
    ['facundocapua', 2, []],
    ['faviola', 1, []]
]

countPackages(carriers2, 'camila') // 15
  // 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15