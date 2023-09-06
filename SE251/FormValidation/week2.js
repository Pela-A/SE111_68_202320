// JavaScript Document

var inputs = document.querySelectorAll(`input`)

var submitBtn = document.querySelector(`#submitBtn`)
var info = document.querySelector(`#info`)
var fdback = document.querySelector(`#feedback`)

submitBtn.addEventListener(`click`, (e)=>{
    var message= ""
      
    //check first name******************
    var pattern1 = /[^A-Za-z-]+/
    if(inputs[0].value !== "" && !pattern1.test(inputs[0].value) )
    {
        inputs[0].parentElement.classList.remove(`error`)
        inputs[0].nextElementSibling.innerHTML = ""
    }
    else if(inputs[0].value == ""){
        message += `<p>Please enter a first name.</p>`
        inputs[0].parentElement.classList.add(`error`)
        inputs[0].nextElementSibling.innerHTML = `*`
    }
    else{
        message+="<p>First Name contains special characters or numbers</p>"
        inputs[0].parentElement.classList.add(`error`)
        inputs[0].nextElementSibling.innerHTML = `*`
    }

    //check last name*****************************
    if(inputs[1].value !== "" && !pattern1.test(inputs[1].value) )
    {
        inputs[1].parentElement.classList.remove(`error`)
        inputs[1].nextElementSibling.innerHTML = ""
    }
    else if(inputs[1].value == ""){
        message += `<p>Please enter a last name.</p>`
        inputs[1].parentElement.classList.add(`error`)
        inputs[1].nextElementSibling.innerHTML = `*`
    }
    else{
        message+="<p>Last Name contains special characters or numbers</p>" 
        inputs[1].parentElement.classList.add(`error`)
        inputs[1].nextElementSibling.innerHTML = `*`
    }

    //check email**************************
    pattern2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if(pattern2.test(inputs[2].value))
    {
        inputs[2].parentElement.classList.remove(`error`)
        inputs[2].nextElementSibling.innerHTML = ""
    }
    else if(inputs[2].value == ""){
        message += `<p>Please enter an email.</p>`
        inputs[2].parentElement.classList.add(`error`)
        inputs[2].nextElementSibling.innerHTML = `*`
    }
    else{
        message+="<p>Please enter a valid email</p>" 
        inputs[2].parentElement.classList.add(`error`)
        inputs[2].nextElementSibling.innerHTML = `*`
    } 
    //check confirm email
    if(pattern2.test(inputs[3].value && inputs[2].value == inputs[3].value ))
    {
        inputs[3].parentElement.classList.remove(`error`)
        inputs[3].nextElementSibling.innerHTML = ""
    }
    else if(inputs[3].value == ""){
        message += `<p>Please enter a confirm email.</p>`
        inputs[3].parentElement.classList.add(`error`)
        inputs[3].nextElementSibling.innerHTML = `*`
    }
    else if(inputs[2].value !== inputs[3].value){
        inputs[2].parentElement.classList.add(`error`)
        inputs[3].parentElement.classList.add(`error`)
        inputs[2].nextElementSibling.innerHTML = `*`
        inputs[3].nextElementSibling.innerHTML = `*`
        message += `<p>Email and confirm email must match!</p>`
    }
    else{
        message+="<p>Please enter a valid confirm email</p>" 
        inputs[3].parentElement.classList.add(`error`)
        inputs[3].nextElementSibling.innerHTML = `*`
    } 

    //check phone number
    pattern3 = /[0-9]{10}/

    if(pattern3.test(inputs[4].value)){
        inputs[4].parentElement.classList.remove(`error`)
        inputs[4].nextElementSibling.innerHTML = ""
    }
    else{
        message+=`<p>Invalid phone number</p>`
        inputs[4].parentElement.classList.add(`error`)
        inputs[4].nextElementSibling.innerHTML = `*`
    }

    console.log(message)
    if(message == ""){
        fdback.innerHTML = message
        var person = {
            fname: inputs[0].value,
            lname: inputs[1].value,
            email: inputs[2].value,
            phone: inputs[4].value
           }
        console.log(person)
        submitBtn.parentElement.style.display = "none"
    
    
        var message = ""
        message += person.fname + " " + person.lname
        message += "<br>"
        message += person.email
        message += "<br>"
        message += `${person.phone.substring(0,3)}-${person.phone.substring(3,6)}-${person.phone.substring(6,)}`
        info.innerHTML = message
        info.parentElement.style.display = "block"

    }
    else{
        fdback.innerHTML = message
    }

    console.log(fdback)
})//end of submit button event listener
