const inputEl = document.getElementById("input-el")
const btnEl = document.querySelectorAll("button")
for(let i = 0; i < btnEl.length; i++){
  btnEl[i].addEventListener("click", ()=>{
  const buttonValue = btnEl[i].textContent
  if(buttonValue === "C"){
    clearResult()
  } else if(buttonValue === "=") {
    calculateRes()
  } else if(buttonValue === "D"){
    deleteLast()
  } else {
      appendValue(buttonValue)
  }
  })
}

function clearResult(){
  inputEl.value = ""
}

function calculateRes(){
  inputEl.value =   "I Miss You"//eval(inputEl.value).toFixed(2)
}

function appendValue(buttonValue){
  inputEl.value += buttonValue
}

function deleteLast(){
  let currentValue = inputEl.value
  if(currentValue.length > 0) {
    inputEl.value = currentValue.slice(0, -1);
  }
}