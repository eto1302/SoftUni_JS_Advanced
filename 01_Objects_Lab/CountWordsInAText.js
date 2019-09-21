function Solve(input) {
    let strings = {};
    input = String(input).replace(/[^a-zA-Z ]/g, " ")
    input = String(input).split(' ');
    for (let i = 0; i < input.length; i ++) {
        
        let word = input[i];
        if(word == '') continue;
        if (!strings.hasOwnProperty(word)) {
            strings[word] = 0;
        }
        strings[word]++;
    }
    console.log(JSON.stringify(strings));
}


Solve(['Far too slow, you re far too slow.']);