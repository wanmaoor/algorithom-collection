let createNumber = document.querySelector("#createNumber");
let callNumber = document.querySelector("#callNumber");
let currentNum = document.querySelector("#currentNum");
let currentQue = document.querySelector("#currentQue");

let queue = [];
let n = 1;
createNumber.addEventListener("click", () => {
  queue.push(n);
  currentNum.innerHTML = `${queue[0]}`;
  currentQue.innerHTML = JSON.stringify(queue);
  n += 1;
});

callNumber.addEventListener('click',() => {
  queue.shift()
  currentNum.innerHTML = `${queue[0]}`;
  currentQue.innerHTML = JSON.stringify(queue);
})