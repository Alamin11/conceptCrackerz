function smallestElement(numbers) {
    const numOfElements = numbers.length;
    let smallest = numbers[0];
    for (let i = 0; i < numOfElements; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    return smallest;
}
console.log(smallestElement([1, 2, 35, 74]));