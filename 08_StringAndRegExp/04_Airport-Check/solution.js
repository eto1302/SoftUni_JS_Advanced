function solve() {
    let input = document.getElementById('string').value.split(',').filter(x => x !== '');
    let result = document.getElementById('result');

    let text = input[0];
    let param = input[1].trim();

    let passengerRegex = /(\s[A-Z][A-Za-z]*-[A-Z][A-Za-z]*\s|\s[A-Z][A-Za-z]*-[A-Z][A-Za-z]*\.-[A-Z][A-Za-z]*\s)/gm;
    let airportRegex = /\s[A-Z]{3}\/[A-Z]{3}\s/gm;
    let flightNumberRegex = /\s[A-Z]{1,3}\d{1,5}\s/gm;
    let companyRegex = /- [A-Z][A-Za-z]*\*[A-Z][A-Za-z]*\s/gm;

    let Name = passengerRegex.exec(text)[0].replace(/-/g, ' ').trim();
    let airport = airportRegex.exec(text);
    let startAirport = airport[0].split('/')[0].trim();
    let endAirport = airport[0].split('/')[1].trim();
    let flightNumber = flightNumberRegex.exec(text)[0].trim();
    let company = companyRegex.exec(text)[0].replace('- ', ' ').replace('*', ' ').trim();

    switch (param) {
        case 'all':
            let allResult = `Mr/Ms, ${Name}, your flight number ${flightNumber} is from ${startAirport} to ${endAirport}. Have a nice flight with ${company}.`;
            result.innerHTML = allResult;
            break;
        case 'name':
            let nameResult = `Mr/Ms, ${Name}, have a nice flight!`;
            result.innerHTML = nameResult;
            break;
        case 'company':
            let companyResult = `Have a nice flight with ${company}.`;
            result.innerHTML = companyResult;
            break;
        case 'flight':
            let flightResult = `Your flight number ${flightNumber} is from ${startAirport} to ${endAirport}.`;
            result.innerHTML = flightResult;
            break;
    }
}