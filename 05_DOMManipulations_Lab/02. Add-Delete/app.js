function addItem() {

    function deleteItemHandler(){
        li.remove();
    }

    let input = document.getElementById('newText');
    let ul = document.getElementById('items');
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.appendChild(document.createTextNode(`[Delete]`));
    li.appendChild(document.createTextNode(`${input.value} `));
    li.appendChild(a);
    ul.appendChild(li);
    input.value = '';
    a.addEventListener('click', deleteItemHandler)
}