let section = document.querySelector("section")
section.className = "archive"
for(let i=0; i<500;i++){
    var div = document.createElement("div",i)
    div.style.width = "3.8rem"
    div.style.height = "3.8rem"
    div.style.border = "1.4px solid black"
    div.style.display = "flex"
    div.style.alignItems = "center"
    div.style.justifyContent = "center"
    section.append(div)  
}

function moreColor (){
    let hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    let color = "#";
    for(let i=0; i<6 ;i++){
        var randomNumber = Math.floor(Math.random() * 16);
        color +=  hex[randomNumber];
    }
    return color
}


let boxes = document.querySelectorAll("div")

function handler (){
    // generated random color
boxes.forEach((elm)=>{
elm.style.backgroundColor = moreColor()
elm.innerText  = Math.floor(Math.random() * 500)
})
}
section.addEventListener("mousemove",handler)