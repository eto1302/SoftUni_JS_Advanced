function JsonToHtmlTable(json) {
    let outputArr = ["<table>"];
    for (let i = 0; i < json.length; i++) {
        outputArr.push('  <tr>');
        let arr = JSON.parse(json[i]);
        for(let obj in arr)
        {
            outputArr.push(`    <td>${arr[obj]}</td>`);
        }
        outputArr.push('  </tr>');
    }
    outputArr.push("</table>");

    function makeValueRow(obj) {
        
        
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
