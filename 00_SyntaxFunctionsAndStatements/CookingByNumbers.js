function Solve(params){
    let number = Number(params[0]);
    for(i = 1 ; i < 6; i++)
    {
        let command = params[i];
        if(command == 'chop') number = number / 2;
        else if(command == 'dice') number = Math.sqrt(number);
        else if(command == 'spice') number++;
        else if(command == 'bake') number = number * 3;
        else if(command == 'fillet') number = number * 0.8;
        console.log(number);
    }
}
