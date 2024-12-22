var user_name = document.getElementById("name").value
var email = document.getElementById("email_").value
var num = document.getElementById("number").value
var txt = document.getElementById("text").value
var person_array = []


function send(){

    var details1 = {
        Name: document.getElementById("name").value,
        Email: document.getElementById("email_").value,
        Phone: document.getElementById("number").value,
        Message: document.getElementById("text").value
    }

    // console.log(details)

    localStorage.setItem("User Name", details1.Name)
    localStorage.setItem("User Email", details1.Email)
    localStorage.setItem("User Phone", details1.Phone)
    localStorage.setItem("User Message", details1.Message)

    addDetails(details1)

    console.log(person_array)

    window.alert("Email and Message Sent")

    // console.log(localStorage.getItem("User Name"))

}

function addDetails(x){
    person_array.push(x)
}
