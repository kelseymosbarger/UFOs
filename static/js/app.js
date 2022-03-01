// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear esisting data
    tbody.html("");
    
    // loop through each object in fata
    data.forEach((dataRow) => {
        //append row to table body
        let row = tbody.append("tr");
        //loop through each field and add value as tabe cell
        Object.values(dataRow).forEach((val) => {
          let cell = row.append("td");
          cell.text(val);
          }
        );
      });
}