function notify(message) {
    let notification = document.getElementById('notification');
    
    notification.textContent = message;
    notification.style.display = 'block';
    let intervalID = setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}