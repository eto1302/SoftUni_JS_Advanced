function Solve(params){
    let speed = Number(params[0]);
    let place = String(params[1]);
    if(place == 'city'){
        if(speed > 50 ){
        if(speed <= 70) console.log('speeding'); 
        else if(speed <= 90) console.log('excessive speeding'); 
        else console.log('reckless driving'); 
    
    }}
    else if(place == 'residential'){
        if(speed > 20 ){
        if(speed <= 40) console.log('speeding'); 
        else if(speed <= 60) console.log('excessive speeding'); 
        else console.log('reckless driving'); 
    }}
    else if(place == 'interstate'){
        if(speed > 90 ){
        if(speed <= 110) console.log('speeding'); 
        else if(speed <= 130) console.log('excessive speeding'); 
        else console.log('reckless driving'); 
    }}
    else if(place == 'motorway'){
        if(speed > 130 ){
        if(speed <= 150) console.log('speeding'); 
        else if(speed <= 170) console.log('excessive speeding'); 
        else console.log('reckless driving'); 
    }}
}

Solve([200, 'motorway'])