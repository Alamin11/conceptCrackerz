function gradeGenerator(num) {
    if (num >= 80) {
        return 'A';
    }
    else if (num >= 60) {
        return 'B';
    }
    else if (num >= 50) {
        return 'C';
    }
    else if (num >= 40) {
        return 'D';
    }
    else {
        return 'F';
    }

}
console.log(gradeGenerator(89));