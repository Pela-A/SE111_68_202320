// JavaScript Document

var inputs = document.querySelectorAll(`input`)

console.log(inputs)
var labels = ["first name", "last name","email" ,"confirm email","phone number"]

console.log(labels.innerHTML)



var submitBtn = document.querySelector(`#submitBtn`)

var info = document.querySelector(`#info`)







submitBtn.addEventListener(`click`, (e)=>{
    
    
    
    for(let i=0; i < inputs.length - 1; i ++){
        if(inputs[i].value !== ""){
            inputs[i].parentElement.classList.remove(`error`)
            inputs[i].nextElementSibling.innerHTML = ""
            console.log("yo")
        }
        else{
            
            inputs[i].parentElement.classList.add(`error`)

            
            inputs[i].nextElementSibling.innerHTML = `* Please enter a ${labels[i]}`
            


    }
    
    
    }
    
    
})
    /*
    var person = {
        fname: firstName.value,
        lname: lastName.value,
        email: email.value,
        phone: phoneNum.value
       }
    console.log(person)
    submitBtn.parentElement.style.display = "none"


    var message = ""
    message += person.fname + " " + person.lname
    message += "<br>"
    message += person.email
    message += "<br>"
    message += person.phone
    info.innerHTML = message
    info.parentElement.style.display = "block"*/

