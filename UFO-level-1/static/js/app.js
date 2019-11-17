// from data.js
var country=data;
console.log(data);
// YOUR CODE HERE!
var tbody=d3.select("tbody");
data.forEach((dataSet) => {
  var row = tbody.append("tr");
  Object.entries(dataSet).forEach(([key, value]) => {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});
  
  // Function to handle input change
var button = d3.select("#filter-btn");

//input.on("change", handleChange);
button.on("click",function(){
  var inputValue=d3.select("#datetime").property("value"); 
  var filteredData = country.filter(city => city.datetime === inputValue); 
  console.log(filteredData);
});
 