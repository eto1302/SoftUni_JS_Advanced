function solve() {
    createSelectMenuOptions();

    document
        .querySelector("#container > button")
        .addEventListener("click", convert);

    function convert() {
        let number = Number(document.getElementById('input').value);
        let result;


        if (document.getElementById('selectMenuTo').value == 'binary') {
            document.getElementById('result').value = (number >>> 0).toString(2);
        }
        if (document.getElementById('selectMenuTo').value == 'hexadecimal') {
            document.getElementById('result').value = number.toString(16).toUpperCase();
        }


    }

    function createSelectMenuOptions() {
        let binaryOption = document.createElement('option');
        binaryOption.textContent = 'Binary';
        binaryOption.value = 'binary';

        let hexadecimalOption = document.createElement('option');
        hexadecimalOption.textContent = 'Hexadecimal';
        hexadecimalOption.value = 'hexadecimal';

        document.getElementById('selectMenuTo').appendChild(binaryOption);
        document.getElementById('selectMenuTo').appendChild(hexadecimalOption);
    }
}

