function Solve(n, m){
    let sum = 0;
    n = Number(n);
    m = Number(m);
    for(i = n; i <= m; i++)
    {
        sum+=Number(i);
    }
    console.log(sum);
}