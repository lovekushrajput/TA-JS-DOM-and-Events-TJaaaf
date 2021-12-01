let form = document.querySelector("form")
let userInfo={}

function handleClick(event) {
event.preventDefault()
 userInfo.name = form.elements[0].value
 hello.innerText =  userInfo.name 
 userInfo.email = form.elements[1].value
email.innerText = userInfo.email 
 userInfo.gender = form.elements.gender.value
 love.innerText = userInfo.gender
 userInfo.color = form.elements[3].value
 color.innerText = userInfo.color
 userInfo.range = form.elements[4].value
 rating.innerText = userInfo.range
 userInfo.drone = form.elements.drone.value
 book.innerText = userInfo.drone
 userInfo.term = form.elements.terms.checked
 if(userInfo.term == true){
     condition.innerText = "👉 You agreed to Terms and Condition"
 }else{
    condition.innerText = "You denied to Terms and Condition"
 }

form.style.display = "none"
page.style.display = "block"
}

form.addEventListener("submit",handleClick)



// data page
let hello = document.querySelector(".hello")
let email = document.querySelector(".email")
let love = document.querySelector(".love")
let color = document.querySelector(".color")
let rating = document.querySelector(".rating")
let book = document.querySelector(".book")
let condition = document.querySelector(".condition")

let closeBtn = document.querySelector(".close")
let page = document.querySelector(".page") 

page.style.display = "none"

closeBtn.addEventListener("click",()=>{
page.style.display = "none"
setTimeout(()=>{
    document.location.reload()
},1)
form.style.display = "flex"
})