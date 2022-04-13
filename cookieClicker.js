'use strict'
let count = 0;
let savedCount = 0;
let cycle = 0;

const cookieCount = document.getElementById("count");
const clickerBtn = document.getElementById("clicker");
const saveBtn = document.getElementById("save");
const saved = document.getElementById("saved")
const clickerDiv = document.getElementById("clickerDiv");


const increment = () => {
    count++;
    cookieCount.textContent = count;
}

const saveCount = () => {
    savedCount = count; 
    saved.textContent = savedCount;
    count = 0;
    cookieCount.textContent = count;
    let h2 = document.createElement("h2");
    h2.innerHTML = "game" + cycle + " : " + savedCount;
    document.body.appendChild(h2);
    cycle++;   
}

clickerBtn.addEventListener("click", increment);
saveBtn.addEventListener("click", saveCount);

