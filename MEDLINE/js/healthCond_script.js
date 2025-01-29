
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Toggle current content
        if (content.classList.contains('drop')) {
            content.classList.remove('drop');
            header.classList.remove('active');
        } else {
            // Close all other contents
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('drop'));
            document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));

            // Open current content
            content.classList.add('drop');
            header.classList.add('active');
        }
    });
});

//First Dropdown


function illness_Dropdown(){

    document.getElementById("dropdown_content").classList.toggle("show");

}
    // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (event.target.matches('.ill')) {
        var dropdowns = document.getElementsByClassName("ill_dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }       
        }
    }    
}

//Second Dropdown
function illness_Dropdown1(){

    document.getElementById("dropdown_content1").classList.toggle("show");

}

window.onclick = function(event) {
    if (event.target.matches('.ill1')) {
        var dropdowns = document.getElementsByClassName("ill_dropdown1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }                
        }
    }  
    else{
        alert("close")
    }  
}

//Third Dropdown


function illness_Dropdown2(){

    document.getElementById("dropdown_content2").classList.toggle("show");

}

window.onclick = function(event) {
    if (event.target.matches('.ill2')) {
        var dropdowns = document.getElementsByClassName("ill_dropdown2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }       
        }
    }    
}

//Fourth Dropdown


function illness_Dropdown3(){

    document.getElementById("dropdown_content3").classList.toggle("show");

}

window.onclick = function(event) {
    if (event.target.matches('.ill3')) {
        var dropdowns = document.getElementsByClassName("ill_dropdown3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }       
        }
    }    
}

//Fifth Dropdown


function illness_Dropdown4(){

    document.getElementById("dropdown_content4").classList.toggle("show");

}

window.onclick = function(event) {
    if (event.target.matches('.ill4')) {
        var dropdowns = document.getElementsByClassName("ill_dropdown4");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }       
        }
    }    
}

//Sixth Dropdown


function illness_Dropdown5(){

    document.getElementById("dropdown_content5").classList.toggle("show");

}

window.onclick = function(event) {
    if (event.target.matches('.ill5')) {
        var dropdowns = document.getElementsByClassName("ill_dropdown5");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }       
        }
    }    
}

//Seventh Dropdown


function illness_Dropdown6(){

    document.getElementById("dropdown_content6").classList.toggle("show");

}

window.onclick = function(event) {
    if (event.target.matches('.ill6')) {
        var dropdowns = document.getElementsByClassName("ill_dropdown6");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }       
        }
    }    
}

//Eighth Dropdown


function illness_Dropdown7(){

    document.getElementById("dropdown_content7").classList.toggle("show");

}

window.onclick = function(event) {
    if (event.target.matches('.ill7')) {
        var dropdowns = document.getElementsByClassName("ill_dropdown7");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }       
        }
    }    
}

//Ninth Dropdown


function illness_Dropdown8(){

    document.getElementById("dropdown_content8").classList.toggle("show");

}

window.onclick = function(event) {
    if (event.target.matches('.ill8')) {
        var dropdowns = document.getElementsByClassName("ill_dropdown8");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }       
        }
    }    
}

//Tenth Dropdown


function illness_Dropdown9(){

    document.getElementById("dropdown_content9").classList.toggle("show");

}

window.onclick = function(event) {
    if (event.target.matches('.ill9')) {
        var dropdowns = document.getElementsByClassName("ill_dropdown9");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }       
        }
    }    
}

function filter(){
    
    // Declare variables
    var input, filter, div, ill, p, i, txtValue;
    input = document.getElementById('search_bar');
    filter = input.value.toUpperCase();
    div = document.getElementById("main_illness");
    ill = document.getElementsByClassName('ill');
    p = document.getElementsByClassName("illName")

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < ill.length; i++) {

        txtValue = p[i].textContent || p[i].innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ill[i].style.display = "";
        } 

        else {
            ill[i].style.display = "none";
        }

    }

}

