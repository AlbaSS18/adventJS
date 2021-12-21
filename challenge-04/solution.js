export default function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
    let str = '';
    if (height >= 1 && height <= 100) {
        for (var i = 1; i <= height; i++) {
            const space = '_'.repeat(height - i);
            const tree = '*'.repeat(i * 2 - 1);
            str += space + tree + space + '\n';
        }
        str += ('_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + '\n').repeat(2);
    }
    return str.trim();
}

console.log(createXmasTree(5));
console.log(createXmasTree(3));