function Solve(input) {
    let result = [];

    for (let row of input) {
        let params = JSON.parse(row);
        result.push(params.map(Number).sort((a, b) => b - a));
    }

    for (let i = 0; i < result.length; i++) {

        for (let j = i + 1; j < result.length; j++) {
            if (compareArrays(result[i], result[j])) {
                result.splice(j, 1);
                j--;
            }
        }
    }

    result.sort((a, b) => a.length - b.length);
    result.forEach(a => console.log("[" + a.join(", ") + "]"));

    function compareArrays(arr1, arr2) {
        if (arr1.length != arr2.length) {
            return false;
        } else {
            for (let i = 0; i < arr1.length; i++) {
                if (arr1[i] != arr2[i]) {
                    return false;
                }
            }
            return true;
        }
    }
}

Solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"]
)