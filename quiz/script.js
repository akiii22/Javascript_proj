const num1 = Math.floor(Math.random()*100);
const num2 = Math.floor(Math.random()*100);

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input-el")
const formEl = document.getElementById("form")
const scoreEl = document.getElementById("score")
let score = JSON.parse(localStorage.getItem("score"));
questionEl.textContent = `What is ${num1} multiply by ${num2}?`

const corrextAns = num1 * num2

if(!score){
  score = 0
}

scoreEl.textContent = `score: ${score}`
formEl.addEventListener("submit", ()=>{
   const userAns = +inputEl.value
   if(userAns === corrextAns){
    score++
    updateLocalStorage()
   } else {
    score--
    updateLocalStorage()
   }
})

function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score))
}