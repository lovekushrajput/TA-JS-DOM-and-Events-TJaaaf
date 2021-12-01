let computer = document.querySelector(".Computer")
computer.style.color = "red"
let player = document.querySelector(".player")
player.style.color = "rgb(30,144,255)"
let result = document.querySelector(".overall")
let keys = document.querySelectorAll(`.key`)
let refresh = document.querySelector(".refresh")
let scoreP = document.querySelector(".score-player")
let scoreC = document.querySelector(".score-computer")
 
let arr=['---rock','---paper','---scissore']


for(let key of keys){
     key.addEventListener("click",function(event){
        player.innerText = event.target.id
        let store = Math.floor(Math.random()*3)
        computer.innerText=arr[store] 


       if(player.innerText == computer.innerText){
        result.innerText = "It`s tie!"
        }else if(player.innerText == "---rock" && computer.innerText == "---scissore" || player.innerText == "---paper" && computer.innerText == "---rock" || player.innerText == "---scissore" && computer.innerText == "---paper"){
            pointP=pointP+1
            scoreP.innerText=pointP
            result.innerText = "Won!"
          
             
        } else if (player.innerText == "---scissore"&& computer.innerText =="---rock"  || player.innerText == "---rock"  && computer.innerText == "---paper" || player.innerText =="---paper"  && computer.innerText ==  "---scissore"){
            pointC=pointC+1
            scoreC.innerText=pointC
            result.innerText = "lose!"
          
        } else{
            result.innerText = "nothing"
           
        }

     })
}


let pointP = 0
let pointC = 0

    
 //refresh of the game
  refresh.reload()

       
   