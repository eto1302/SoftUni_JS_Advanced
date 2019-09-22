function Solve(strings) {
    let juices = {};
    let bottles = {};

    for(let line of strings) {
        let tokens = line.split(" => ");
        let fruit = tokens[0];
        let quantity = Number(tokens[1]);

        if(! juices.hasOwnProperty(fruit)) {
            juices[fruit] = 0;
        }

        juices[fruit] += quantity;
        if(juices[fruit] >= 1000) {
            bottles[fruit] = (juices[fruit]/1000).toFixed(0);
        }
    }

    for(let key of Object.keys(bottles)) {
        console.log(`${key} => ${bottles[key]}`);
    }
}
Solve(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549'])