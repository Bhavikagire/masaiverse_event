let form = document.getElementById("form-log-admin")
form.addEventListener("submit",function(event){
    event.preventDefault()

    let formData = new FormData(form)
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let validname = "admin"
    let valid_pass = "pass"

    if(username == validname && password == valid_pass){
        alert('Login Success')
        localStorage.setItem("isloggedin","true")
        window.location.href = "data.html"
    }

})

