/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/

var opt = document.querySelector(`#options h2`)
opt.addEventListener(`click`,e=>{
    
    opt.nextElementSibling.classList.toggle(`hidden`)
})






/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/

var fills = document.querySelectorAll(`.fill`)
var strokes = document.querySelectorAll(`.stroke`)

for(let i=0; i<fills.length;i++){
    
    fills[i].value = pad[i].fill
    fills[i].nextElementSibling.innerHTML = pad[i].fill
    strokes[i].value = pad[i].stroke
    strokes[i].nextElementSibling.innerHTML = pad[i].stroke

    fills[i].addEventListener('input',(e)=>{
        
        
        pad[i].fill = e.target.value
        fills[i].nextElementSibling.innerHTML = pad[i].fill
        
    })
    strokes[i].addEventListener(`input`,(e)=>{
        pad[i].stroke = e.target.value
        
        strokes[i].nextElementSibling.innerHTML = pad[i].stroke
    })
    
}






/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/

var upInp = document.querySelectorAll(`.u`)
var downInp = document.querySelectorAll(`.d`)
var strInp = document.querySelectorAll(`.s`)

for(let i=0;i<upInp.length;i++){
    console.log(player[i])
    upInp[i].value=player[i].keys.u
    downInp[i].value=player[i].keys.d
    strInp[i].value=player[i].keys.s


    upInp[i].addEventListener(`keydown`,(e)=>{
        e.target.value = e.key

        player[i].keys.u = e.key
        e.target.nextElementSibling.innerHTML=e.key
        })
    upInp[i].addEventListener(`focus`,(e)=>{
        currentState = `pause`
    })
}