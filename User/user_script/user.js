// console.log("user page ")

let form = document.getElementById("user-form")
form.addEventListener("submit", function(event){
    event.preventDefault()

    let name = document.getElementById("name").value;
    let Age = document.getElementById("Age").value;
    let Place = document.getElementById("Place").value;
    let Batch = document.getElementById("Batch").value;
    let Profession = document.getElementById("Profession").value;

    let users = {
        name,
        age:Age,
        place:Place,
        batch_name : Batch,
        profession:Profession
       
    }

    fetch("http://localhost:3000/users",{
        method:"POST",
        headers:{
            "content-Type":"application/json"
        },
        body: JSON.stringify(users)
    })

    .then(res =>{
        if(res.ok){
            alert("successfully registered")
         document.getElementById("name").value = " "
         document.getElementById("Age").value = " "
         document.getElementById("Place").value = " "
        }

        else{
            alert("Registeration failed")
        }
    })

    .catch(err =>{
        console.log(err)
        alert("Registeration failed due some error")
    })
})