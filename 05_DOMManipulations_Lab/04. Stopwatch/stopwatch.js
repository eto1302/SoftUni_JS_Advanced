function stopwatch() {
    let currentSeconds = 0;
    let currentMinutes = 0;

    let intervalFunc = setInterval(function(){return null}, 1000);

    let timer = document.getElementById('time');
    let stopBtn = document.getElementById('stopBtn');
    let startBtn = document.getElementById('startBtn');

    startBtn.addEventListener('click', BtnClicked);
    stopBtn.addEventListener('click', BtnClicked);

    function stopTimer(funcInterval) {
        startBtn.removeAttribute('disabled');
        stopBtn.setAttribute('disabled', true);

        clearInterval(funcInterval);
        
        currentSeconds = 0;
        currentMinutes = 0;
    }

    function startTimer() {        
        timer.textContent = `00:00`;

        stopBtn.removeAttribute('disabled');
        startBtn.setAttribute('disabled', true);

        currentSeconds++;
        if (currentSeconds >= 60) {
            currentSeconds = 0;
            currentMinutes++;
        }
        timer.textContent = `${String(currentMinutes).padStart(2, 0)}:${String(currentSeconds).padStart(2, 0)}`
    }

    function BtnClicked(element) {        
        if (event.target.id === 'startBtn') {
            funcInterval = setInterval(startTimer, 1000);
        } else {
            stopTimer(funcInterval);
        }
    }
}