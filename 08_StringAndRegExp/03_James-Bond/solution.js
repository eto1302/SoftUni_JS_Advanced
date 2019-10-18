function solve() {
    function decodeMessage(encoded) {
        while (encoded.indexOf('!') !== -1) {
            encoded = encoded.replace('!', '1')
        }

        while (encoded.indexOf('%') !== -1) {
            encoded = encoded.replace('%', '2')
        }

        while (encoded.indexOf('#') !== -1) {
            encoded = encoded.replace('#', '3')
        }

        while (encoded.indexOf('$') !== -1) {
            encoded = encoded.replace('$', '4')
        }

        return encoded.toLowerCase()
    }


    let array = JSON.parse(document.getElementById('array').value);
    let result = document.getElementById('result');

    let regex = new RegExp(`(\\s|^)(${array[0]}\\s+)([A-Z!#$%]{8,})(\\.|,|\\s|$)`, 'gi');

    for (let i = 1; i < array.length; i++) {
        let element = array[i];
        let match = regex.exec(element);
        while (match) {
            let encoded = match[3];
            if (encoded.toUpperCase() !== encoded) {
                match = regex.exec(element);
                continue;
            }
            let decoded = decodeMessage(encoded);
            let message = match[1] + match[2] + decoded + match[4];
            element = element.replace(match[0], message);
            match = regex.exec(element);
        }

        let pElement = document.createElement('p');
        pElement.textContent = element;
        result.appendChild(pElement);
    }
}