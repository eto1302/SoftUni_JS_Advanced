function ReturnEveryNthElement(params){
    let step = params[params.length -1];
    let array = params.slice(0, params.length - 1);
    for(let i = 0 ; i < array.length; i++){
        if(i%step == 0) console.log(array[i]);
    }
}

ReturnEveryNthElement(['5', '20', '31', '4', '20', '2'])