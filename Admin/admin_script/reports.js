fetch("http://localhost:3000/users")
.then(res => res.json())
.then(data => {
    let total_guest = data.length;
    let student = data.filter(user => user.profession == "Student").length;
    let working_prof = data.filter(user => user.profession !== "Student").length;
    

    let totalAge = 0
    data.forEach(element => {
        let age = parseInt(element.age)
        if(!isNaN(age)){
            totalAge += age
        }
    });

    let avg_age = totalAge/total_guest

    let report_table = document.getElementById("report-data-table")
    let tbody = report_table.querySelector("tbody")
    let trow = document.createElement("tr")
    trow.innerHTML = `
    <td>${total_guest}</td>
    <td>${student}</td>
    <td>${working_prof}</td>
    <td>${avg_age.toFixed(0)}</td>`

    tbody.appendChild(trow)
})
.catch(error =>{
    console.log(error)
    alert("failed to load data")
})