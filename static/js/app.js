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

function handleClick() {

    //grab dt value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //checking if date was entered and filtering if strict = that date
    if (date) {
        //apllies filter
        filteredData = filteredData.filter(row => row.datetime === date);
      };
      
      //rebuild data table with filtered data no filter remains as is
      buildTable(filteredData);

      // attach an event to listen for form button      
      d3.selectAll("#filter-btn").on("click", handleClick);

      //build table when page loads
      buildTable(tableData);


};