export default function fixFiles(files) {
    // ¡No olvides compartir tu solución en redes!
    const arrayIndexed = [];
    files.forEach((file, index) => {
        const filtered = files.slice(0,index).filter(v => v === file);
        const fileAdd = filtered.length === 0 ? file : `${file}(${filtered.length})`;
        arrayIndexed.push(fileAdd);
    });
    return arrayIndexed;
}

export default function fixFilesWithMap(files) {
    // ¡No olvides compartir tu solución en redes!
    return files.map((file, index) => {
        const filtered = files.slice(0,index).filter(v => v === file);
        return filtered.length === 0 ? file : `${file}(${filtered.length})`
    })
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']