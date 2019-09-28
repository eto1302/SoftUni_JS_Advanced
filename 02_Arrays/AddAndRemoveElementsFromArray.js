function AddOrRemoveElement(commands){
    let array = [];
    for(let i = 1; i <= commands.length; i++){
        if(commands[i - 1] == 'add') array.push(i);
        if(commands[i - 1] == 'remove') array.pop();
    }
    if(array.length == 0) console.log('Empty');
    else for(let element of array){
        console.log(element);
    }
}