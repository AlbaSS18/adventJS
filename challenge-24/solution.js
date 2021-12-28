export default function checkIsSameTree(treeA, treeB) {
    // ¡No olvides compartir tu solución en redes!
    if (!treeA && !treeB) {
        return true;
    }
    else if (!treeA || !treeB) {
        return false;
    }
    else {
        return treeA.value == treeB.value && checkIsSameTree(treeA.left, treeB.left) && checkIsSameTree(treeA.right, treeB.right);
    }
}

const tree = {
    value: 1,
    left: { value: 2, left: null, right: null },
    right: { value: 3, left: null, right: null }
}

checkIsSameTree(tree, tree) // true

const tree2 = {
    value: 1,
    left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
    right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true
