// Variable Declaration
var tbody = d3.select("tbody");
var tableData = data;
var datebtn=d3.select("#datesearch");
var citybtn=d3.select("#citysearch");
var statebtn=d3.select("#statesearch");
var shapebtn=d3.select("#shapesearch");
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
function datebtnClick(){
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
//=================================
function citybtnClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    var city = d3.select("#city").property("value").trim().toLowerCase();
    var filterData = tableData;
    if(city) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.city.trim().toLowerCase() === city);
    }
    // Build Table with Filtered Data
    createTable(filterData);
}
//==========================================
function statebtnClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    var state = d3.select("#state").property("value").trim().toLowerCase();
    var filterData = tableData;
    if(state) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.state.trim().toLowerCase() === state);
    }
    // Build Table with Filtered Data
    createTable(filterData);
}
//======================================
function countrybtnClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    var country = d3.select("#country").property("value").trim().toLowerCase();
    var filterData = tableData;
    if(country) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.country.trim().toLowerCase() === country);
    }
    // Build Table with Filtered Data
    createTable(filterData);
}
//=================================================
function shapebtnClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    var shape = d3.select("#shape").property("value").trim().toLowerCase();
    var filterData = tableData;
    if(shape) {
        // Apply Filter to the Table Data to Only Keep Rows Where datetime Value Matches the Filter Value
        filterData = filterData.filter((row) => row.shape.trim().toLowerCase() === shape);
    }
    // Build Table with Filtered Data
    createTable(filterData);
}
createTable(tableData);
datebtn.on("click", datebtnClick);
citybtn.on("click",citybtnClick);
statebtn.on("click", statebtnClick);
countrybtn.on("click", countrybtnClick);
shapebtn.on("click", shapebtnClick);

