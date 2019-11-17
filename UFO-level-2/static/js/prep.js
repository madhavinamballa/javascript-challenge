// Variable Declaration
var tbody = d3.select("tbody");
var tableData = data;
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
//================================
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
    //===================================
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
    //========================================
    function shapeHandleClick(){
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
    // Build Table with Filtered Data
    createTable(filterData);
}
createTable(tableData);
var datebutton=d3.selectAll("#date-btn");
datebutton.on("click", dateHandleClick);
//var countrybutton=d3.select("#country-btn");
//countrybutton.on("click", countryHandleClick);
var statebutton=d3.selectAll("#state-btn");
statebutton.on("click", stateHandleClick);
//var shapebutton=d3.select("#shape-btn");
//shapebutton.on("click", shapeHandleClick);

