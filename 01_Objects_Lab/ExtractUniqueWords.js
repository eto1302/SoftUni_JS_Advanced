function Solve(strings) {
    let words = [];
    for (let i = 0; i < strings.length; i++) {
        let curr = String(strings[i]).replace(/[^a-zA-Z ]/g, " ")
        let elements = curr.split(' ').filter(x => x != '');
        for(let j = 0; j < elements.length; j++){
            if(!words.includes(String(elements[j]).toLowerCase())){
                words.push(String(elements[j]).toLowerCase());
            }
        }
    }
    console.log(words.join(', '));
}

Solve(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.', 
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 
'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 
'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'])