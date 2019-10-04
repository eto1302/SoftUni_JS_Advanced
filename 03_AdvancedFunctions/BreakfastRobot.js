let robot = (function () {

    let products = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};
    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        eggs: {protein: 5, fat: 1, flavour: 1},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    function restock(microelement, quantity) {
        products[microelement] += Number(quantity);
        return 'Success';
    }

    function prepare(recipie, quantity) {
        for (let element of Object.keys(recipes[recipie])) {
            let totalQuantity = recipes[recipie][element] * quantity;
            if (products[element] < totalQuantity) {
                return `Error: not enough ${element} in stock`;
            }
        }
        for (let element of Object.keys(recipes[recipie])) {
            products[element] -= recipes[recipie][element] * Number(quantity);
        }
        return 'Success';
    }

    function report() {
        return [...Object.keys(products)]
            .map(e => e + '=' + products[e])
            .join(' ');
    }

    return function commands(input) {
        let tokens = input.split(' ');
        let commandNmae = tokens.shift();
        let args = tokens;
        switch (commandNmae) {
            case 'prepare':
                return prepare(...args);
                break;
            case 'restock':
                return restock(...args);
                break;
            default :
                return report();
                break;
        }
    }

}());

console.log(robot('restock flavour 50'));
console.log(robot('prepare lemonade 4'))