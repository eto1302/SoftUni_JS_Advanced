function FindBiggestElement(nestedArrays){
    let maxn = Number.NEGATIVE_INFINITY;
    for(let i = 0 ; i < nestedArrays.length; i++){
        for(let j = 0 ; j < nestedArrays[i].length; j++){
            if(nestedArrays[i][j] > maxn) maxn = nestedArrays[i][j];
        }
    }
    console.log(maxn);
}

FindBiggestElement([[3, 5, 7, 12],    [-1, 4, 33, 2],    [8, 3, 0, 4]]   )