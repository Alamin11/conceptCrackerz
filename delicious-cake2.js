function cakeSelector(x, y, z) {
    if (x > y && x > z) {
        return 'Jim';
    }
    else if (y > x && y > z) {
        return 'Dela';
    } else {
        return 'Chinku';
    }
}
console.log(cakeSelector(84, 99, 77));