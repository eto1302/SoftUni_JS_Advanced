function solve() {
    let expressionOutput = document.getElementById('expressionOutput');
    let resultOutput = document.getElementById('resultOutput');

    let currentResult = 0;
    let currentOperation = null;

    Array.from(document
        .querySelectorAll('button'))
        .map(x => x.addEventListener('click', function ClickedButton(e) {
            let buttonValue = e.target.value;
            if (buttonValue === 'Clear') {
                expressionOutput.innerHTML = '';
                resultOutput.innerHTML = '';
            }
            else if (buttonValue === '=') {
                let pattern = /^(\d+(.\d+)?) (\+|-|\*|\/) (\d+(.\d+)?)$/;
                let match = pattern.exec(expressionOutput.innerHTML);

                if (match) {
                    let leftOperand = +match[1];
                    let operator = match[3];
                    let rightOperand = +match[4];
                    let result;

                    switch (operator) {
                        case '+':
                            result = leftOperand + rightOperand;
                            break;

                        case '-':
                            result = leftOperand - rightOperand;
                            break;

                        case '*':
                            result = leftOperand * rightOperand;
                            break;

                        case '/':
                            result = leftOperand / rightOperand;
                            break;
                    }

                    resultOutput.innerHTML = result;
                } else {
                    resultOutput.innerHTML = 'NaN';
                }
            }
            else {
                if (buttonValue === '/' || buttonValue === '-' || buttonValue === '*' || buttonValue === '+') {
                    expressionOutput.innerHTML += ` ${buttonValue} `;
                } else {
                    expressionOutput.innerHTML += buttonValue;
                }
            }

        }));
}
