// JavaScript Document

var inputs = document.querySelectorAll(`input`)
var firstName = document.querySelector(`#first-name`)
var lastName = document.querySelector(`#last-name`)
var email = document.querySelector(`#email`)
var confirm = document.querySelector(`#confirm`)
var phoneNum = document.querySelector(`#phone`)




var submitBtn = document.querySelector(`#submitBtn`)
console.log(submitBtn)
var info = document.querySelector(`#info`)







submitBtn.addEventListener(`click`, (e)=>{
    
    
    console.log(inputs[0].innerHTML)
    if(inputs[0].value !== ""){
        console.log("yo")
    }
    else{
        
        inputs[0].parentElement.classList.add("error")
        inputs[0].nextElementSibling.innerHTML = "Please enter a first name!"
        inputs[0].nextElementSibling.classList.add("error")
    }
    
    
    
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

})