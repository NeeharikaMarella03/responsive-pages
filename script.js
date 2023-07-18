const filterInput = document.getElementById('search-field');

const tableData = document.getElementById('table-items');

// console.log(filterInput)
// console.log(tableData)

filterInput.addEventListener("input", applyFilters);


function applyFilters(){
    const searchItem = filterInput.value.toLowerCase();
    // console.log(searchItem)

    const rowsData = tableData.getElementsByTagName("tr");
    // console.log(rowsData)

    // const headData = tableData.getElementsByTagName("th");
    // console.log(headData)

    for(let i=1; i<rowsData.length; i++){
        const cellsData = rowsData[i].getElementsByTagName("td");
        let rowMatchesSearch = false;

        for (let j = 0; j < cellsData.length; j++) {
            const cellValue = cellsData[j].textContent.toLowerCase();
            if (cellValue.indexOf(searchItem) > -1) {
              rowMatchesSearch = true;
              break;
            }
          }
        rowsData[i].style.display = rowMatchesSearch ? "" : "none";

    }


}