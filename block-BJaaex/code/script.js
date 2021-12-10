let allCards = [
  {
    name: "spade",
    link: '♠️',
  
  },
  {
    name: "club",
    link: '♣️',
  },
  {
    name: "heart",
    link: '♥️',
  },
  {
    name: "diamond",
    link: '♦️',
  },
  {
    name: "add",
    link: '➕',
  },
  {
    name: "subtract",
    link: '➖',
  },
  {
    name: "multiply",
    link: '✖️',
  },
  {
    name: "divide",
    link: "➗",
  }

];
let rootElm = document.querySelector("ul")
let p = document.querySelector("p")



let copyCards = allCards.concat(allCards)
copyCards.sort(() => 0.5 - Math.random())


let countClick = 0
let idArray=[];
let valueArray=[];
let totalClick=0;
let count = 0;




  // do something

console.time("myTimer")
copyCards.forEach((item,i) => {
  const li = document.createElement('li');
  const div = document.createElement('div')
  div.classList.add('box');
  li.innerText = item.link
  li.setAttribute('id',i)

  setTimeout(() => {
    li.style.display = "none"
  }, 100)

  li.dataset.name = item.name;
  div.append(li)
  rootElm.append(div)




  div.addEventListener("click", handleClick)




 
 
  // handle click function
 
  function handleClick(event) {
    li.style.display = "block"
    //console.log(event.target.firstChild.id,'id');
    let id=event.target.firstChild.id;
    idArray.push(id)
    valueArray.push(li.dataset.name);
  
  
    // console.log(valueArray,idArray,'values')
    totalClick++;
    p.innerText =`Total Moves ${totalClick}`;
    countClick++
    
    //count condition
    if (countClick <= 2) {
   
      if (countClick === 2) {
     
          //metching guess 
          if (valueArray[0] === valueArray[1]) {
            document.getElementById(idArray[0]).style.visibility='block';
            document.getElementById(idArray[1]).style.display='block';
            valueArray=[];
            idArray=[];
            countClick=0;
            console.log('it is matched')
          } else {
            setTimeout(() => {
              document.getElementById(idArray[0]).style.display='none';
              document.getElementById(idArray[1]).style.display='none';
              valueArray=[];
              idArray=[];
              console.log('it is not matching')
            }, 800) 
            countClick=0;
    
          }

        

      }
    }
   
    }
 
  

 

})

//  function time(){
//    let sec = 0
//    let min = 0
//    let SS
//    let MM
//    setInterval(() => {
//      sec++
//      if(sec==60){sec=0,min++}
//      sec<10?SS=`0${sec}`:SS=`${sec}`
//      min<10?MM=`0${min}`:MM=`${min}`
//      p.innerHTML=`Total Time ${MM}`
//    }, 100);
//  }
