function Solve(array){
    let result = [];
    for(let element of array){
        if(element >= 0) result.push(element);
        else result.unshift(element);
    }
    
    for(let element of result){
        console.log(element);
    }
}

Solve([3, -2, 0, -1])