function solve(fruit, weight, money){
    let weightInKg = weight/1000;
    let TotalPrice = weightInKg*money;
    console.log(`I need $${TotalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}