function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', gradientMove);

    function gradientMove(event){
        let shade = event.offsetX / (event.target.clientWidth - 1);
        result.textContent = Math.floor(shade * 100) + '%';
        console.log(result.textContent);
    }
}