function attachEventsListeners() {
    let daysText = document.getElementById('days');
    let hoursText = document.getElementById('hours');
    let minutesText = document.getElementById('minutes');
    let secondsText = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', function ConvertDays() {
        let days = Number(daysText.value);
        hoursText.value = days * 24;
        minutesText.value = days * 1440;
        secondsText.value = days * 86400;
    })

    hoursBtn.addEventListener('click', function ConvertDays() {
        let hours = Number(hoursText.value);
        daysText.value = hours / 24;
        minutesText.value = hours * 60;
        secondsText.value = hours * 3600;
    })

    minutesBtn.addEventListener('click', function ConvertDays() {
        let minutes = Number(minutesText.value);
        daysText.value = minutes / 1440;
        hoursText.value = minutes / 60;
        secondsText.value = minutes * 60;
    })

    secondsBtn.addEventListener('click', function ConvertDays() {
        let seconds = Number(secondsText.value);
        daysText.value = seconds / 86400;
        hoursText.value = seconds / 3600;
        minutesText.value = seconds / 60;
    })
}