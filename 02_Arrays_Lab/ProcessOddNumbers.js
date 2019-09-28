function Solve(array) {
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(i % 2 != 0) result.push(array[i]);
    }
    result = result.map(x => x = x * 2).reverse();
    output = "";
    for(let element of result){
        output += element;
        output += " ";
    }
    console.log(output)
}

Solve([3, 0, 10, 4, 7, 3]);