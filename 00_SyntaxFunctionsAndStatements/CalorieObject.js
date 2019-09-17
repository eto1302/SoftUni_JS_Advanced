function Solve(input){
    
    let arr = {};
    for(i = 0; i <input.length; i+=2){
        let food = input[i];
        let calories = Number(input[i + 1]);

        arr[food] = calories;

    }
    console.log(arr);
}
