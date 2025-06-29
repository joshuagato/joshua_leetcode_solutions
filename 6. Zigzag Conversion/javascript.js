/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) return s;

    const rows = new Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currentRow] += char;

        if (currentRow == 0 || currentRow == numRows - 1)
            goingDown = !goingDown;
        
        if (goingDown) currentRow++;
        else currentRow--;
    }

    return rows.join("")
};