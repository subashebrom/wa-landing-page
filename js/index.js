let btn = document.querySelector(".admin-support-btn");
let support = document.querySelector(".admin-support-con");

btn.onclick = function(){
    support.classList.toggle("active");
}

let btns = document.querySelector(".btn-style");
let select = document.querySelector(".btn-selected");

btns.onclick = function(){
    select.classList.toggle("selected");
}