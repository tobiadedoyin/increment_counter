let counting = document.getElementById("counter");
let saveEl  = document.getElementById("save-el");
let count = 0;

function increment(){
     count += 1;
    counting.textContent = count;
}

function save(){
    let saveStr = count + " - "
    saveEl.textContent += saveStr;
    console.log(count);
    counting.textContent=0;
    count=0;

}