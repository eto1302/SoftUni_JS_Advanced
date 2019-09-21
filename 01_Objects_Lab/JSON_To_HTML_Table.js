function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];
    let keys = Object.keys(arr[0]);
    outputArr.push(makeKeyRow(keys));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(keys) {
        let row = '<tr>';
        for (let i = 0; i < keys.length; i++) {
            keys[i] = escapeHtml(keys[i]);
            row += `<th>${keys[i]}</th>`
        }
        row += '</tr>';

        return row;
    }

    function makeValueRow(obj) {
        let row = '   <tr>';
        for (let i = 0; i < keys.length; i++) {
            let curr = obj[keys[i]];
            row += `<td>${Number(curr) ? curr : escapeHtml(String(curr))}</td>`;
        }
        row += '</tr>';
        return row;
    };

    function escapeHtml(value) {
        return value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    };

    console.log(outputArr.join('\n'));
}

JsonToHtmlTable(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);