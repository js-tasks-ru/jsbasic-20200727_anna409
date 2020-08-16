/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let rowsCount = table.rows.length;
    for (let i = 0; i <= (rowsCount - 1) ; i++) {
        table.rows[i].cells[i].style.backgroundColor = "red";
    } 
}
