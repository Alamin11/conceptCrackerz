
function calculateAverage(arrOfMarks) {
    let total = 0;
    let length = arrOfMarks.length;
    for (let i = 0; i < length; i++) {
        total += arrOfMarks[i];
    }
    let average = parseFloat((total / length).toFixed(2));
    return average;


}
console.log(calculateAverage([75.25, 65, 80, 35.45, 99.50]));