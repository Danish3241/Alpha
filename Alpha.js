var navpopup = document.querySelector("#navpopup")
var bar = document.querySelector("#bar")
var body = document.querySelector("body")

bar.addEventListener("click",()=>{
    if(navpopup.style.display=== "none"){
        navpopup.style.display="block"
        bar.style.marginLeft="18.5rem"
    }
    else{
        navpopup.style.display="none"
        bar.style.marginLeft="0rem"
    }
    
})
