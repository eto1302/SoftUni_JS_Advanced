function FindIncreasingSubsequence(array) {
    let result = [array.shift()]

    array.forEach(e => {
        if (e >= result[result.length - 1]) {
            result.push(e)
        }
    })

    console.log(result.join('\n'))
}
FindIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);