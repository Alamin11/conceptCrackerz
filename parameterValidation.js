function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Enter a valid number';
    } else {
        return num1 + num2;
    }

}
const sum = add(12, 56);
console.log(sum);