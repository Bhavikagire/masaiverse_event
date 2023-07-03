
let Login_btn = document.getElementById("Login")
Login_btn.addEventListener("click",()=>{
    window.location.href = "../Admin/login.html"
})

let Data_btn = document.getElementById("Data")

    Data.addEventListener("click",()=>{
        let isloggedin = localStorage.getItem("isloggedin")
if(isloggedin){
        window.location.href = "../Admin/data.html"
  
}
else{
    alert("you need to logged in first for now use --admin pass")
}
})


let Reports = document.getElementById("Reports")

let islogged = localStorage.getItem("isloggedin")
Reports.addEventListener("click",()=>{
    if(islogged){
        window.location.href = "../Admin/reports.html"
    }
    else{

        alert("you need to logged in first for now use  --admin pass")
    }
})

   
