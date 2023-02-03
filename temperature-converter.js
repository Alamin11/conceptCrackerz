function tempConverter(temp) {
    let tempInCelcius = (temp - 32) / 1.8;
    return parseFloat(tempInCelcius.toFixed(2));
}

console.log(tempConverter(50));