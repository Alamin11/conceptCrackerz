function findMax(numbers) {
    if (numbers[0] > numbers[1] && numbers[0] > numbers[2]) {
        return numbers[0];
    }
    else if (numbers[1] > numbers[0] && numbers[1] > numbers[2]) {
        return numbers[1];
    } else {
        return numbers[2];
    }
}
const maxNum = findMax([55, 10, 95]);
console.log(maxNum);