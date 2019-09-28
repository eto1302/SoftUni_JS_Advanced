function Fibonacci(n, k){
    n = Number(n);
    k = Number(k);
    let result = [];
    result.push(1);
    for(let i = 0; i < n - 1; i++){
        let currentSum = 0;
        for(let j = i; j > i - k; j--)
        {
            currentSum += Number(result[j]);
            if(j == 0) break;
        }
        result.push(Number(currentSum));
    }
    for(let element of result)
    {
        console.log(element);
    }
}

Fibonacci(8 , 2)