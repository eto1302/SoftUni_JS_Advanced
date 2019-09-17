function Solve(a){
let flag = true;
let digits = String(a).split("");
let first = digits[0];
digits.forEach(function(element){
    if(element != first)
    {
        flag = false;
    }
});
console.log(flag);
let sum = digits.map(Number).reduce((acc,curr) => acc+curr);
console.log(sum);
}
