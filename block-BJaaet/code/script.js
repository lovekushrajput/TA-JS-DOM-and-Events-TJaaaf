let input = document.querySelector("input")
let form = document.querySelector("form")
let ul = document.querySelector("ul")


form.addEventListener('submit',(event)=>{
    event.preventDefault();
        let text = event.target.elements.text.value

if(text.length){

    event.target.elements.text.value = ""
    let spanElm = document.createElement("span")
    let li = document.createElement("li")
    spanElm.style.marginRight = "3rem"
    spanElm.innerText=text
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox")
    let close = document.createElement("span")
    close.innerText = "❌"
    li.append(check,spanElm,close)
    ul.append(li)


    close.addEventListener("click",handleClick)
    function handleClick (){
        if(check.checked == true){
            li.remove();
        }
    }

}

       
});


