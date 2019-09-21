function Solve(input){
    let towns = [];
    for(let i = 0 ; i < input.length; i++){
        let town = {};
        let params = String(input[i]).split(' -> ');
        let townName = params[0];
        let product = params[1];
        let salesAmount = Number(params[2].split(':')[0]);
        let pricePerUnit = Number(params[2].split(':')[1]);
        town = {
            'Name' : townName,
            'Product' : product,
            'TotalIncome' : salesAmount*pricePerUnit 
        };
        towns.push(town);
    }

    let name = '';
    for (let town of towns) {
        
        if (name !== town.Name) {
            console.log(`Town - ${town.Name}`);
            console.log(`$$$${town.Product} : ${town.TotalIncome}`);
        } else {
            console.log(`$$$${town.Product} : ${town.TotalIncome}`);
        }

        name = town.Name;
    }

}

Solve(['Sofia -> Laptops HP -> 200 : 2000','Sofia -> Raspberry -> 200000 : 1500','Sofia -> Audi Q7 -> 200 : 100000','Montana -> Portokals -> 200000 : 1','Montana -> Qgodas -> 20000 : 0.2','Montana -> Chereshas -> 1000 : 0.3']);