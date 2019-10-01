function result(initialNumber){
    let initial = initialNumber;

    return function(number){
        return initialNumber + number;
    }
}
