
let letter = 'e';

function vowelCheck(letter) {
    let lowerLetter = letter.toLowerCase();
    if (lowerLetter === 'a' || lowerLetter === 'e' || lowerLetter === 'i' || lowerLetter === 'a' || lowerLetter === 'o') {
        return 'VOWEL';
    } else {
        return 'CONSONANT';
    }
    // Using ternary operator
    // return (lowerLetter === 'a' || lowerLetter === 'e' || lowerLetter === 'i' || lowerLetter === 'a' || lowerLetter === 'o') ? 'VOWEL' : 'CONSONANT';
}

console.log(vowelCheck(letter));