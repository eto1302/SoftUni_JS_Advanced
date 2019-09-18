function Solve(input) {
    let upper = input.toUpperCase();
    let words = extract();
    words = words.filter(e => e != '');
    return words.join(', ');

    function extract() {
        return upper.split(/\W+/);
    }
}

console.log(Solve('Hi, how are you?'));