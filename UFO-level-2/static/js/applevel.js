// Variable Declaration
var tbody = d3.select("tbody");
var tableData = data;
var date-button=d3.select("#date-btn");
var country-button=d3.select("#country-btn");
var city-button=d3.select("#city-btn");
var state-button=d3.select("#state-btn");
var shape-button=d3.select("#shape-btn");
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
function dateHandleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;
    if(date) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    createTable(filterData);
}
//=================================
function countryHandleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element 
    var country = d3.select("#country").property("value");
    var filterData = tableData;
    if(country) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.country === country);
    }
    // Build Table with Filtered Data
    createTable(filterData);
}
//========================================
function shapeClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    var shape = d3.select("shape").property("value");
    var filterData = tableData;
    if(shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.shape === shape);
    }
    // Build Table with Filtered Data
    createTable(filterData);
}
//==========================================
function stateHandleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    var state = d3.select("#state").property("value");
    var filterData = tableData;
    if(state) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.state === state);
    }
    // Build Table with Filtered Data
    createTable(filterData);
}
createTable(tableData);
//date-button.on("click", dateHandleClick);
//createTable(tableData);
//country-button.on("click",countryHandleClick);
//createTable(tableData);
//city-button.on("click", cityHandleClick);
//createTable(tableData);
//state-button.on("click", stateHandleClick);
//createTable(tableData);
//shape-button.on("click", shapeHandleClick);

