function Play(params) {
    matrix = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let placed = 0;
    let isXTurn = true;
    for (let i = 0; i < params.length; i++) {
        let x = params[i].split(" ")[0];
        let y = params[i].split(" ")[1];
        if (isXTurn) {
            if (Place(x, y, 'X'))
                isXTurn = !isXTurn;
        }
        else {
            if (Place(x, y, 'O'))
                isXTurn = !isXTurn;
        }
        if (WhoWon() == 'X') {
            console.log('Player X wins!');
            break;
        }
        if (WhoWon() == 'O') {
            console.log('Player O wins!');
            break;
        }
        if (IsGameOver()) { console.log("The game ended! Nobody wins :("); break; }

    }
    PrintMatrix();


    function Place(x, y, symbol) {
        if (matrix[x][y] != 'X' && matrix[x][y] != 'O') { matrix[x][y] = symbol; placed++; return true; }
        else {
            console.log("This place is already taken. Please choose another!");
            return false;
        }

    }

    function PrintMatrix() {
        console.log(matrix[0].join('\t'));
        console.log(matrix[1].join('\t'));
        console.log(matrix[2].join('\t'));
    }

    function WhoWon() {
        if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2] && (matrix[2][2] == 'X' || matrix[2][2]=='O'))
            return matrix[0][0];
        if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0] && (matrix[2][0] == 'X' || matrix[2][0]=='O'))
            return matrix[0][2];
        if (matrix[0][0] == matrix[0][1] && matrix[0][1] == matrix[0][2] && (matrix[0][2] == 'X' || matrix[0][2]=='O'))
            return matrix[0][2];
        if (matrix[1][0] == matrix[1][1] && matrix[1][1] == matrix[1][2] && (matrix[1][2] == 'X' || matrix[1][2]=='O'))
            return matrix[0][2];
        if (matrix[2][0] == matrix[2][1] && matrix[2][1] == matrix[2][2] && (matrix[2][2] == 'X' || matrix[2][2]=='O'))
            return matrix[0][2];
        if (matrix[0][0] == matrix[1][0] && matrix[1][0] == matrix[2][0] && (matrix[2][0] == 'X' || matrix[2][0]=='O'))
            return matrix[0][2];
        if (matrix[0][1] == matrix[1][1] && matrix[1][1] == matrix[2][1] && (matrix[2][1] == 'X' || matrix[2][1]=='O'))
            return matrix[0][2];
        if (matrix[0][2] == matrix[1][2] && matrix[1][2] == matrix[2][2] && (matrix[2][2] == 'X' || matrix[2][2]=='O'))
            return matrix[0][2];
    }
    function IsGameOver(){
        return placed == 9;
    }
}
