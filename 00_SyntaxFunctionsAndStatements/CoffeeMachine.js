function Solve(params){
    let total = 0;
    for(i = 0; i < params.length; i++){
        let order = String(params[i]).split(', ');
        let sum = 0;
        let coins = Number(order[0]);
        let drink = String(order[1]);
        if(drink == 'coffee'){
            if(String(order[2]) == 'caffeine') sum = 0.80;
            else sum = 0.90;
            if(String(order[3]) == 'milk') 
                {sum += 0.1;if(Number(order[4])!=0)sum +=0.10;}
            else{
                if(Number(order[3])!=0)sum +=0.10;
            }
        }
        else{
            sum+=0.80;
            if(String(order[2]) == 'milk') sum += 0.10;
            if(Number(order[3])!=0)sum +=0.10;
        }
        
        if(coins >= sum){console.log(`You ordered ${drink}. Price: $${sum.toFixed(2)} Change: $${(coins-sum).toFixed(2)}`);total += sum;}
        else console.log(`Not enough money for ${drink}. Need $${(sum-coins).toFixed(2)} more.`);
        
    }
    console.log(`Income Report: $${total.toFixed(2)}`);

}

Solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);