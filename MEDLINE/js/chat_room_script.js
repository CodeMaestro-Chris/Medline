
function show(){
    document.getElementById("container").classList.toggle("show")
}

const send_btn = document.querySelector("#input button")
const input_area = document.querySelector("#input textarea")
const chat_box = document.querySelector(".message")

var user_message

const createChatList = (message, className) => {
    const chatList = document.createElement("li")
    chatList.classList.add("chat")
    chatList.classList.add("outgoing")
    var chatContent = className === "outgoing" ? `<p class="message_user" id="message_user">${message}</p>` : `<span class="doc">Dr. Christs</span>`
    chatList.innerHTML = chatContent
    return chatList
}

const chat = () => {
    
    user_message = input_area.value.trim()

    if(input_area == ""){
        return;
    }

    chat_box.appendChild(createChatList(user_message, "outgoing"))

    localStorage.setItem("user_chat", user_message)
    console.log(localStorage.getItem("user_chat"))
    
    
}

const doc_btn = document.querySelector(".fa-user-md")

const showDoctor = () =>
{
    var display = document.getElementById("doc_chat_messages").style.display = "block"
    document.getElementById("chat_messages").style.display = "none"

    if (doc_btn.className == "fa fa-user-md"){
        doc_btn.classList.add("fa-arrow-left")
        doc_btn.classList.remove("fa-user-md")
    }

    else{
        doc_btn.classList.add("fa-user-md")
        doc_btn.classList.remove("fa-arrow-left")

        document.getElementById("doc_chat_messages").style.display = "none"

        document.getElementById("chat_messages").style.display = "block"
    }
   
}




