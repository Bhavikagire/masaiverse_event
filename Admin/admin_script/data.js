fetch("http://localhost:3000/users")
    .then(res=>res.json())
    .then(data =>{
        const container_data = document.getElementById("container_data")
        data.forEach(el => {
            let usercard = document.createElement("div");
            usercard.classList.add("card")
            usercard.innerHTML = `
            <h2>${el.name}</h2>
            <p>${el.age}</p>
            <p>${el.place}</p>
            <p>${el.batch_name}</p>
            <p>${el.profession}</p>
            <button class="edit-btn">EDIT</button>
            <button class="delete-btn">DELETE</button>`

            container_data.appendChild(usercard)
        });

        let edit_btn = document.querySelector(".edit-btn");
       
        edit_btn.addEventListener("click",function(){

            let userId = edit_btn.dataset.userId
            let userCard = edit_btn.parentElement
            
            
            })
    

        let delete_btn = document.querySelector(".delete-btn");
       
        Array.from(delete_btn).forEach(delete_btn => {
            
            delete_btn.addEventListener("click",function(){

                const userId = delete_btn.dataset.userId
                let userCard = delete_btn.parentElement;
                fetch(`http://localhost:3000/users/${userId}`,{
                    method: "DELETE"

                })
                .then(res=>{
                    if(res.ok){
                        userCard.remove()
                        alert("user deleted successfully")
                    }
                    else{
                        alert("failed to delete")
                    }
                })
                .catch(error =>{
                    console.log(error)
                    alert("failed to delete due error")
                })
            })
        })

    })
    .catch(err=>{
        console.log(err)
        alert("failed to delete")
    })

