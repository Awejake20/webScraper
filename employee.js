var employeePromise = d3.csv("employee.csv")



var makeTable = function(employees)
{
    rows = d3.select("tbody")
    .selectAll("tr")
    .data(employees)
    .enter()
    .append("tr")
    
    rows.append("td")
    .text(function(employees)
         {return employees.FirstName }
         )
    
    rows.append("td")
    .text(function(employees)
         {return employees.LastName }
         )
    rows.append("td")
    .text(function(employees)
         {return employees.Title }
         )
    
    rows.append("td")
    .text(function(employees)
         {return employees.Email }
         )
}

var successFCN = function(employees)
{
    console.log("found data", employees)
    makeTable(employees)
}

var failureFCN = function(employee)
{
    console.log("could not find data")
}

employeePromise.then(successFCN,failureFCN)