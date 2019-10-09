function toggle() {
    let btn = document.getElementsByClassName('button')[0];    
    btn.textContent === 'More' ? btn.textContent = 'Less' : btn.textContent = 'More';

    let extraText = document.getElementById('extra');
    extraText.style.display == 'none' ? extraText.style.display = 'block'
        : extraText.style.display = 'none';

}