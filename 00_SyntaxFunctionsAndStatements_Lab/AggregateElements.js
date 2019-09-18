function Solve(params){
    aggregate(params, 0, (a,b) => a+b);
    aggregate(params, 0, (a,b) => a + 1/b);
    aggregate(params, '', (a,b) => a+b);

    function aggregate(elements, initValue, func){
        let val = initValue;
        for(i = 0 ; i < elements.length; i++){
            val = func(val, elements[i]);
        }
        console.log(val);
    }
}
