const textEl = document.getElementById("text-el");
const totalEl = document.getElementById("total-el");
const remainingEl = document.getElementById("remaining-el")
textEl.addEventListener("keyup", ()=>{
  updateCounter()
})

updateCounter()

function updateCounter(){
   totalEl.textContent = textEl.value.length
   remainingEl.textContent = textEl.getAttribute("maxLength") - textEl.value.length
}