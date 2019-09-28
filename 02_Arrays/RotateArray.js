function RotateArray(params){
    let array = params.slice(0, params.length - 1);
    let rotations = params[params.length - 1];
    rotations = rotations % array.length;
    for(let i = 0 ; i < rotations; i++){
        array.unshift(array[array.length - 1]);
        array = array.slice(0, array.length - 1);
    }
    console.log(array.join(" "));
}