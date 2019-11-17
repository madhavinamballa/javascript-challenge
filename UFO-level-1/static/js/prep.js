var tbody = d3.select("#target-table-display");
// select the "submit button" & "input field"
var submitButton = d3.select("#filter-btn-date");
var inputField = d3.select("#datetime");
// select city buttons
var citysubmitButton = d3.select("#filter-btn-city");
var cityinputField = d3.select("#cityname");
// select state buttons
var statesubmitButton = d3.select("#filter-btn-state");
var stateinputField = d3.select("#statename");
// select country buttons
var countrysubmitButton = d3.select("#filter-btn-country");
var countryinputField = d3.select("#countryname");
// select shape buttons
var shapesubmitButton = d3.select("#filter-btn-shape");
var shapeinputField = d3.select("#shapename");


// Create table structure in the html file and insert each "data" object
data.forEach(obj => {
    // for each "element" in the object create a row
    var tRow = tbody.append("tr");
    //below "object" becomes the targetet array (element)
    Object.entries(obj).forEach(([key,value]) => {
        // console.log(`The key is: ${key} and the value is: ${value}`);
        var tData = tRow.append("td");
        // adds the "value" to each row in the table
        tData.text(value);
    });
});

// implementing fuction to "submit button"
submitButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    //tbody.children().remove();
    // stop the page from refresh
  //d3.event.preventDefault();
    // print "You have just clicked the 'Filter Table' on console, for testing
    console.log("You have just clicked the ' Date Time Filter Button'.");
    // select the "input element" and get the raw html node
    var inputField = d3.select("#datetime");
    // get the value property of the "input" element 
    var inputElement = inputField.property("value");
    // print value in console
    console.log(inputElement);
    // use the "field input" to filter the data by "date" only
    var inputTypeArray = data.filter(one => one.datetime === inputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(inputTypeArray)

    
    // display in the html file (appends it at the end, after displaying all original data)
    
    });      
});
