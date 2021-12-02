let form = document.querySelector("form")






function doesNumber(str) {
    return str.split(``).some((elm)=>Number(elm))
}


let userError = ""
let nameError = ""
let emailError = ""
let contactError = ""
let confirmError = ""


function handleClick(event){
event.preventDefault();
//username
let username = event.target.elements.Username
if(username.value.length < 4){
    userError = "username can't be less than 4 characters"
} else{
        userError = ""  
    }
    username.nextElementSibling.innerText = userError  


    // //name
    let name = event.target.elements.name
    if(doesNumber(name.value)){
        nameError = "you can`t use number in name"
    }else{
        nameError = "";
    }
    name.nextElementSibling.innerText = nameError


    //email
//     let email = event.target.elements.email
//    email.nextElementSibling.innerText = emailError
//     if(email.value.length < 6){
//             emailError = " not a valid email!"
//     }else{
//         emailError = ""
//     }


//contact
let contact = event.target.elements.contact
 if(contact.value.length < 7  ){
    contactError = "Length of phone number can't be less than 7"
}
else{
contactError = ""
}
contact.nextElementSibling.innerText = contactError

//password
let password = event.target.elements.Password
let confirm = event.target.elements.confirm
if(password.value !== confirm.value){
    confirmError = "password in not matched"
}
confirm.nextElementSibling.innerText = confirmError

// alert("User Added Successfully!")

if(userError || nameError ||contactError || confirmError ){

}else{
    alert("User Added Successfully!")
}

}

form.addEventListener("submit",handleClick)