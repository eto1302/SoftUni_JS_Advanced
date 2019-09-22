function Solve(names) {
    let result = [];
    for (let name of names) {
        if (!result.includes(name)) result.push(name);
    }
    let sorted = result.sort(function(a, b) {
        return a.length - b.length || 
               a.localeCompare(b);    
      });

    for (let element of sorted) {
        console.log(element);
    }
}
Solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
)