let screen = document.querySelector(".screen")
let parent = document.querySelector(".parent")
let allBtn = document.querySelectorAll(".common")

let screenText = "";
for(let btn of allBtn){
btn.addEventListener("click",function(event){
    let store = event.target.innerText
    console.log(store)
    if( store == "*"){
        screenText += store
        screen.innerText = screenText
    }else if(store == "/"){
        screenText += store
        screen.innerText = screenText
    }else if(store == "+"){
        screenText += store
        screen.innerText = screenText
    }else if(store == "-"){
        screenText += store
        screen.innerText = screenText
    }else if(store == "."){
        screenText += store
        screen.innerText = screenText
    }else if(store == "0"){
        screenText += store
        screen.innerText = screenText
    }else if(store == "="){
        screen.innerText = eval(screenText)
    } else if(store == "C"){
        screenText= "";
      screen.innerText= screenText
    } else {
        screenText += store
        screen.innerText =   screenText
    } 
})

}



