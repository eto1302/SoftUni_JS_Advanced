function Solve(params){
    let x1 = params[0];
    let y1 = params[1];
    let x2 = params[2];
    let y2 = params[3];
    let x0 = 0;
    let y0 = 0;
    let dist1 = Math.sqrt(Math.abs(x1-x0)**2 + Math.abs(y1-y0)**2);
    let dist2 = Math.sqrt(Math.abs(x2-x0)**2 + Math.abs(y2-y0)**2);
    let dist3 = Math.sqrt(Math.abs(x1-x2)**2 + Math.abs(y1-y2)**2);

    if(Number.isInteger(dist1)) console.log(`{${x1}, ${y1}} to {${x0}, ${y0}} is valid`);
    else console.log(`{${x1}, ${y1}} to {${x0}, ${y0}} is invalid`);
    if(Number.isInteger(dist2)) console.log(`{${x2}, ${y2}} to {${x0}, ${y0}} is valid`);
    else console.log(`{${x2}, ${y2}} to {${x0}, ${y0}} is invalid`);
    if(Number.isInteger(dist3)) console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    else console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}
