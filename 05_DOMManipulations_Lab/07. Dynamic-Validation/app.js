function validate() {
    let pattern = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    document.querySelector('input')
        .addEventListener('change', Validate);

    function Validate(event) {
        if (!pattern.test(event.target.value)) event.target.className = 'error';
        else event.target.removeAttribute('class');
    }
}