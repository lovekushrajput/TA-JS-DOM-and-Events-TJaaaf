let banner = document.querySelector(".banner")
let banner2 = document.querySelector(".banner2")
let first = document.querySelector(".first")
let second = document.querySelector(".second")
banner.addEventListener("click",function(){
    function RandomHexColorCode (){
        var chars = "0123456789abcdef";
        var colorLength = 6;
        var color = "";
        for(let i=0 ; i<colorLength; i++){
            var randomColor = Math.floor(Math.random() * chars.length);
        color+= chars.substring(randomColor,randomColor + 1);
        }
        return `#`+`${color}`
    }
var newColor = RandomHexColorCode ()
    console.log(first.style.backgroundColor = newColor)
});


banner2.addEventListener("mousemove",function(){
    function RandomHexColorCode (){
        var chars = "0123456789abcdef";
        var colorLength = 6;
        var color = "";
        for(let i=0 ; i<colorLength; i++){
            var randomColor = Math.floor(Math.random() * chars.length);
        color+= chars.substring(randomColor,randomColor + 1);
        }
        return `#`+`${color}`
    }
var newColor = RandomHexColorCode ()
    console.log(second.style.backgroundColor = newColor)
});