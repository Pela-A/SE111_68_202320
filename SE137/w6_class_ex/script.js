var toggle = document.querySelector(`#toggle`)
var tray = document.querySelector(`.tray`)

var tabs = Array.from(document.querySelectorAll(`nav a`))
var p = document.querySelector(`#breadcrumbs p`)


toggle.addEventListener(`click`, (e)=>{
    e.preventDefault();
    tray.classList.toggle(`closed`)
})


for(let i=0; i<tabs.length; i++)
{
    tabs[i].addEventListener(`click`, selectTab);
}



function selectTab(e)
{
    for(let i=0; i<tabs.length; i++)
    {
        tabs[i].style.backgroundColor =`#373737`;
    }
    
    e.currentTarget.style.backgroundColor=`#161616`;
    p.innerHTML =  `<a href=#>SE137</a> > 
                    <a href=#>W6</a> >
                    <a href=#>Homework Assignment</a> >
                    <a href=#>Tab ${tabs.indexOf(e.currentTarget)+1}</a>`
}