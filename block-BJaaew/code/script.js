let box = document.querySelector(".box")
let rootElm = document.querySelector("ul")
rootElm.classList.add("container")
let allBtn = document.querySelector('.allbtn')
let input = document.querySelector("input")

let house = got.houses

let allHouse = []

let allpeople = []
house.forEach((elm) => {
    elm.people.map((p) =>
        allpeople.push(p)
    )
})


function handleClick(event) {
    event.preventDefault();
    let houseName = event.target.innerText;
    let filterdHouse = house.filter((p) => p.name == houseName)
    allpeople = filterdHouse[0].people
    createUi(allpeople);
}


house.forEach((element) => {
    //house all house is store in  name variable
    let name = element
    let btn = document.createElement('button')
    btn.innerText = element.name;
    allBtn.append(btn);
    //Eventlistener for buttons
    btn.addEventListener('click', handleClick)
    allHouse.push(name)
})

//eventlistener for search bar
input.addEventListener("keyup", handleSearch)

function handleSearch(event) {
    event.preventDefault();
    let searchvalue = event.target.value.toUpperCase();
    console.log(searchvalue.toUpperCase())
    let filterName = allpeople.filter((p) => {
        return p.name.toUpperCase().includes(searchvalue)
    })
    createUi(filterName)
}




// createUi function
function createUi(data = allpeople) {
    rootElm.innerHTML = ""
    data.forEach((chrac) => {
        let li = document.createElement("li")
        li.classList.add("box")
        let img = document.createElement("img")
        img.style.width = "5rem"
        img.style.height = "5rem"
        img.style.borderRadius = "50%"
        img.style.marginLeft = "9rem"
        img.src = chrac.image
        let h2 = document.createElement("h2")
        h2.style.textAlign = "center"
        h2.style.fontSize = "1.4rem"
        h2.style.fontWeight = "600"
        h2.innerText = chrac.name
        let p = document.createElement("p")
        p.style.margin = "0.9rem 0"
        p.style.textAlign = "center"
        p.innerText = chrac.description
        let btn = document.createElement("a")
        btn.innerText = "Know more!"
        btn.style.textDecoration = "none"
        btn.style.background = "black"
        btn.style.color = "white"
        btn.style.marginLeft = "8.8rem"
        btn.style.padding = "0.3rem"
        btn.href = chrac.wikiLink
        li.append(img, h2, p, btn)
        rootElm.append(li)
    })
}
createUi(allpeople)







