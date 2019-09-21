function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let row = '  <tr><th>name</th><th>score</th></tr>';
        return row;
    }

    function makeValueRow(obj) { 
        obj.name = escapeHtml(String(obj.name));
        obj.score = escapeHtml(String(obj.score));
        let row = `   <tr><td>${obj.name}</td><td>${obj.score}</td></tr>`;
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
