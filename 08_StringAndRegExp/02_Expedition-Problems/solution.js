function solve() {
    const regex = /(east|north).*?([0-9]{2})[^,]*,[^,]*([0-9]{6})/igm;
    let text = document.getElementById('text').value;
    let keyword = document.getElementById('string').value;
    let result = document.getElementById('result');

    let message = text.split(keyword)[1];
    let eastMatch;
    let northMatch;

    while (match = regex.exec(text)) {
        if(match[1].toLowerCase() === 'east'){
            eastMatch = match;
        }
        else{
            northMatch = match;
        }
    }

    let northP = document.createElement('p');
    northP.innerHTML = `${northMatch[2]}.${northMatch[3]} N`;

    let eastP = document.createElement('p');
    eastP.innerHTML = `${eastMatch[2]}.${eastMatch[3]} E`;

    let messageP = document.createElement('p');
    messageP.innerHTML = `Message: ${message}`;

    result.appendChild(northP);
    result.appendChild(eastP);
    result.appendChild(messageP);
}