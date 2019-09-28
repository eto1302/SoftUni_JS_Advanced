function PrintArray(params) {
    let array = params.slice(0, params.length - 1);
    let delimiter = params[params.length - 1];
    let result = "";
    console.log(array.join(delimiter))
}

PrintArray(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
)