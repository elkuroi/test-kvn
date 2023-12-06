let copy = (copyText => {
    document.getElementById(copyText).select();
    document.execCommand('copy');
})

let btns = document.getElementsByClassName("btn");

for(let i = 0; i < btns.length; i++){
    btns [i].addEventListener("click",function(){
        let buttonStyle = getComputedStyle (this);
        let buttonBgColor = buttonStyle ["backgroundColor"];
        document.body.style.backgroundColor = buttonBgColor;
    });}
let text = document.getElementById ("change-div");
let input = document.getElementById ("input");

input.addEventListener("input", () => {
    text.style.color = input.value;
    text.style.fontSize = input.value;
})