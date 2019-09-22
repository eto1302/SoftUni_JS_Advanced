function Solve(strings) {
    let map = new Map();
    for (let i = 0; i < strings.length; i++) {
        let params = strings[i].split(' | ');
        let system = params[0];
        let component = params[1];
        let subcomponent = params[2];
        if (!map.has(system)) {
            map.set(system, new Map());
        }

        if (!map.get(system).has(component)) {
            map.get(system).set(component, []);
        }

        map.get(system).get(component).push(subcomponent);
    }

    let systemsSorted = new Map(
        Array.from(map)
            .sort((a, b) => {
                return a[0] > b[0];
            })
            .sort((a, b) => {
                return b[1].size - a[1].size;
            })
    );

    for (const system of systemsSorted) {
        console.log(system[0]);

        let componentsSorted = new Map(
            Array.from(system[1])
                .sort((a, b) => {
                    return b[1].length - a[1].length;
                })
        );

        for (const component of componentsSorted) {
            console.log(`|||${component[0]}`);

            for (const subComponend of component[1]) {
                console.log(`||||||${subComponend}`);
            }
        }
    }
}

Solve(['SULS | Main Site | Home Page', 'SULS | Main Site | Login Page', 'SULS | Main Site | Register Page', 'SULS | Judge Site | Login Page', 'SULS | Judge Site | Submittion Page', 'Lambda | CoreA | A23', 'SULS | Digital Site | Login Page', 'Lambda | CoreB | B24', 'Lambda | CoreA | A24', 'Lambda | CoreA | A25', 'Lambda | CoreC | C4', 'Indice | Session | Default Storage', 'Indice | Session | Default Security'])