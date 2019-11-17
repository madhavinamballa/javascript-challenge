// from data.js
var country=data;
// YOUR CODE HERE!
var tbody=d3.select("tbody");
//var button = d3.select("#filter-btn");
data.forEach((dataSet) => {
  var row = tbody.append("tr");
  Object.entries(dataSet).forEach(([key, value]) => {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});
  
  // Function to handle input change
//var button = d3.select("#filter-btn");

//input.on("change", handleChange);
button.on("click",function(){
 // clear the data of the current table
    tbody.html("");
    //d3.event.preventDefault();
    var inputValue=d3.select("#datetime").property("value"); 
    var filteredData = country.filter(city => city.datetime === inputValue); 
    console.log(filteredData);
    //display in the html file
    filteredData.forEach(dataSet)=>{
        var row=tbody.append("tr");
        Object.entries(dataSet).forEach(([key, value]) => {
            //console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
 