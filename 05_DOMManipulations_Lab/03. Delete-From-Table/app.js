function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value;
    let table = document.querySelectorAll("table tr td:nth-child(2)");
    let isFound = false;

    for (let row of table) {
        if (row.textContent === email) {
            let tr = row.parentNode.parentNode;
            tr.removeChild(row.parentNode);
            isFound = true;
        }
    }

    document.getElementById('result').textContent = isFound ? "Deleted." : "Not found.";
}