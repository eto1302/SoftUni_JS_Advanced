function IsMagic(matrix) {
    let initialSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let currentSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            currentSum+=matrix[i][j];
        }
        if(initialSum == 0) initialSum = currentSum;
        if(initialSum != currentSum) return false;
    }
    for (let i = 0; i < matrix[0].length; i++) {
        let currentSum = 0;
        for (let j = 0; j < matrix.length; j++) {
            currentSum+=matrix[i][j];
        }
        if(initialSum == 0) initialSum = currentSum;
        if(initialSum != currentSum) return false;
    }
    return true;
}