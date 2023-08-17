const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secsEl = document.getElementById("secs");
const ampmEl = document.getElementById("ampm");

function runningClock(){
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12){
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  s = s < 10 ? "0" + s : s


  
  m
  hoursEl.innerText = h;
  minutesEl.innerText = m;
  secsEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(()=>{
    runningClock()
  }, 1000)
}

runningClock(); // Call the function to update the clock
