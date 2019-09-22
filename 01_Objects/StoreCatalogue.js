function Solve(strings){
    let map = new Map();
    for(let i = 0 ; i < strings.length; i++){
        let params = String(strings[i]).split(' : ');
        let name = params[0];
        let price = Number(params[1]);
        
        map.set(name, price);
    }

    let currentLetter = '';
    for(let product of Array.from(map.keys()).sort()){
        if(product[0] != currentLetter)
        {
            currentLetter = product[0];
            console.log(currentLetter);
        }
        console.log(`  ${product}: ${map.get(product)}`);
    }
}

Solve(['Appricot : 20.4','Fridge : 1500','TV : 1499','Deodorant : 10','Boiler : 300','Apple : 1.25','Anti-Bug Spray : 15','T-Shirt : 10'])