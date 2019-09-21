function Solve(input) {
    let products = [];
    for (let i = 0; i < input.length; i++) {
        let params = input[i].split(' | ');
        let Town = params[0];
        let Product = params[1];
        let Price = Number(params[2]);

        let data = {
            Town: Town,
            ProductName: Product,
            ProductPrice: Price
        };
        if(products.filter(x => x.ProductName == Product && x.Town == Town).length != 0)
        {
            products.filter(x => x.ProductName == Product)[0].ProductPrice = Price;
            products.filter(x => x.ProductName == Product)[0].Town = Town; 
        }
        else if (products.filter(x => x.ProductName == Product).length == 0) {
            products.push(data);
        }

        else {
            if (Price < products.filter(x => x.ProductName == Product)[0].ProductPrice) {
                products.filter(x => x.ProductName == Product)[0].ProductPrice = Price;
                products.filter(x => x.ProductName == Product)[0].Town = Town;
            }
        }

    }

    for(let i = 0 ; i < products.length; i++){
        console.log(`${products[i].ProductName} -> ${products[i].ProductPrice} (${products[i].Town})`)
    }
}

Solve(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000']);