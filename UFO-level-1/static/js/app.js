// Variable Declaration
var tbody = d3.select("tbody");
var tableData = data;
var button=d3.select("#filter-btn");
// Function to generate Table
function createTable(data){
    tbody.html("");
    data.forEach((dataSet) => {
        var row = tbody.append("tr");
        Object.entries(dataSet).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}
// Function to handle button click events
function handleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Filter Data Using that Date;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    createTable(filterData);
}
createTable(tableData);
button.on("click", handleClick);
