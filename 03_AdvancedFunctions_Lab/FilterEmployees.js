function filterByProp(prop, value, element){
    return element[prop] === value;
}

function splitParams(criteria){
    return criteria.split('-');
}

function formatEmployee(el, i){
    return `${i}. ${el.first_name} ${el.last_name} - ${el.email}`;
}

function Solve(data, criteria){
    if(criteria === 'all') return JSON.parse(data).map(formatEmployee).join('\n');
    return JSON.parse(data)
    .filter(filterByProp.bind(undefined, ...splitParams(criteria)))
    .map(formatEmployee)
    .join('\n')
}

console.log(Solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'
))