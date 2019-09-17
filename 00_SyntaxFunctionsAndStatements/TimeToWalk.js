function Solve(steps, length, speed){
    let distance = steps*length / 1000;

    let time = distance / speed * 3600;

    time += Math.floor(distance / 0.5) * 60;
    time = Math.ceil(time);
    let hours = "0" + Math.floor(time/3600);

    let minutes = "0" + Math.floor(time/60%60);

    let seconds = "0" + Math.floor(time % 60);


    console.log(`${hours.slice(hours.length - 2)}:${minutes.slice(minutes.length - 2)}:${seconds.slice(seconds.length - 2)}`);
}

Solve(2564, 0.70, 5.5)