function Solve(input){
    let towns = {};
    for (let i = 0 ; i < input.length; i+=2)
    {
        let name = input[i];
        let income = Number(input[i+1]);
        if(!towns.hasOwnProperty(name)){
            towns[name] = 0;
        }
        towns[name] += income;
    }
    console.log(JSON.stringify(towns));
}
Solve(['Sofia','20','Varna','3','Sofia','5','Varna','4']);