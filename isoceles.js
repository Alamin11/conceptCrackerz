function isIsoceles(side1, side2, side3) {
    if (side1 === side2 && side1 === side3) {
        return 'No'
    }
    else if (side1 === side2 || side1 === side3 || side1 === side3) {
        return 'Yes';
    } else {
        return 'No';
    }

}
console.log(isIsoceles(9, 8, 9));