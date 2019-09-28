function FindAllElementsWithEvenPosition(array){
    let result = '';
    for(let i = 0 ; i < array.length; i++){
        if(i%2 == 0)result += array[i];
        else result += ' ';
    }
    console.log(result);
}