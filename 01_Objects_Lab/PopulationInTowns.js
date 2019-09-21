function Solve(input){
    let towns = {};
    for (let i = 0 ; i < input.length; i++)
    {
        let params = input[i].split(' <-> ');
        let name = params[0];
        let population = Number(params[1]);
        if(!towns.hasOwnProperty(name)){
            towns[name] = 0;
        }
        towns[name] += population;
    }
   for(let element of Object.entries(towns)){
        console.log(`${element[0]} : ${element[1]}`)
   }
    
}

Solve(['Sofia <-> 1200000','Montana <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000'])