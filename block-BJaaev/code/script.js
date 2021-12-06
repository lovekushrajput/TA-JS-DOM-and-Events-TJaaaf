function main(){
let form = document.querySelector("form")
let btn = document.querySelector(".btn")
btn.style.display = "none"


let ul = document.querySelector("ul")
let all = document.querySelector(".all")
let active = document.querySelector(".active")
let complete = document.querySelector(".completed")
let reset = document.querySelector(".clear")
let count = document.querySelector(".count")

let allTodos = JSON.parse(JSON.stringify("todos"))||[];

function handleInput(event) {
    event.preventDefault();
    btn.style.display = "block"
    btn.style.display = "flex"
    btn.style.justifyContent = "space-between"
    let names = event.target.text.value

    if (event.target.text.value) {
        let todo =
        {
            name: names,
            isDone: false
        }
        allTodos.push(todo)

    }

    event.target.text.value = ""
    localStorage.setItem("todos",
    JSON.stringify(allTodos));
    createUi(allTodos,ul);
}



form.addEventListener("submit", handleInput)

function handleDelet(event) {
    let id = event.target.dataset.id
    allTodos.splice(id, 1)
    localStorage.setItem("todos",
    JSON.stringify(allTodos));
    createUi(allTodos)
}


function handleToggle(event) {
    event.preventDefault();
    let id = event.target.dataset.id
    allTodos[id].isDone = !allTodos[id].isDone
    localStorage.setItem("todos",
    JSON.stringify(allTodos));
    createUi(allTodos)
}


function createUi(allTodos = allTodos) {
    count.innerText = `${allTodos.length} item left`
    ul.innerHTML = ""

    if (allTodos.length) {
        allTodos.forEach((todo, index) => {
            let li = document.createElement("li")
            let check = document.createElement("input")
            check.type = "checkbox"
            check.checked = todo.isDone
            check.addEventListener("input", handleToggle)
            check.setAttribute("data-id", index)
            let p = document.createElement("p")
            p.style.marginLeft = "0.5rem"
            todo.isDone ? p.style.textDecoration = "line-through" : p.style.textDecoration = "none";

            p.innerText = todo.name
            let span = document.createElement("span")
            span.style.marginLeft = "30rem"
            span.innerText = "❌"

            span.setAttribute("data-id", index)
            span.addEventListener("click", handleDelet)

            li.append(check, p, span)
            ul.append(li)
        })
    }
}






//complete
complete.addEventListener("click", function (event) {
    event.preventDefault();
    let filteredcomplete = allTodos.filter((elm) => {
        return elm.isDone
    })
    createUi(filteredcomplete)
})


//active
active.addEventListener("click", function (event) {
    event.preventDefault();
    let filteredactive = allTodos.filter((elm) => {
        return elm.isDone == false
    })
    createUi(filteredactive)
})


//all
all.addEventListener("click", function (event) {
    event.preventDefault();
   createUi(allTodos)
});


//clear completed
reset.addEventListener("click", handleClear)

function handleClear(event,index){
    event.preventDefault();
    let filteredclear = allTodos.filter((elm) => {
        return elm.isDone == false
    })
    filteredclear.splice(index,allTodos.length)
    createUi(filteredclear)
}

}

 main();









