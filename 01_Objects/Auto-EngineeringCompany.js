function Solve(strings) {
    let cars = [];
    let brands = [];
    for (let i = 0; i < strings.length; i++) {
        let params = strings[i].split(' | ');
        let brand = params[0];
        let model = params[1];
        let producedCars = Number(params[2]);
        let car = {
            Brand: brand,
            Model: model,
            producedCars: producedCars
        }
        if (!brands.includes(brand)) brands.push(brand);
        if (cars.filter(c => c.Model == model && c.Brand == brand).length == 0)cars.push(car);
        else{
            cars.filter(c => c.Model == model && c.Brand == brand)[0].producedCars+=producedCars;
        }
    }

    for (let brand of brands) {
        console.log(brand);
        for (let car of cars.filter(c => c.Brand == brand)) {
            console.log(`###${car.Model} -> ${car.producedCars}`);
        }
    }
}