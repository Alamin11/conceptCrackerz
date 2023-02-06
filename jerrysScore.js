function calculateScore(scores) {
    let rounds = scores.length;
    let finalScore = 0;
    for (let i = 0; i < rounds; i++) {
        finalScore += scores[i];
    }
    return finalScore;
}
console.log(calculateScore([20, 13, 37]));