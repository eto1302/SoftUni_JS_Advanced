function addItem() {
    let input = document.getElementById('newItemText');
    let ul = document.getElementById('items');
    let li = document.createElement('li');
    li.innerHTML = input.value;
    ul.appendChild(li);
    input.value = '';
}