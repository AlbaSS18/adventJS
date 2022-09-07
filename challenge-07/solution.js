export default function contains(store, product) {
    // ¡Y no olvides compartir tu solución en redes!
    for (let key of Object.keys(store)) {
      if (
        (typeof store[key] == 'object' && contains(store[key], product)) ||
        store[key] == product
      ) {
        return true;
      }
    }
    return false;
  }