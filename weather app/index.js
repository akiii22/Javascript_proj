const apiKey =  "d7ff1973c7967010c7fb02475b150ec4";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form")

  formEl.addEventListener("submit", (event)=>{
  event.preventDefault()
  const cityValue = cityInputEl.value
  getWeatherData(cityValue)
  })

  async function getWeatherData(cityValue){
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)
      if(!response.ok){
        throw new Error("Network Response was not ok")
      }
      const data = await response.json()
      const temperature = Math.round(data.main.temp)
      const description = data.weather[0].description
      const icon = data.weather[0].icon
      const detail = [
        `Feels Like: ${Math.round(data.main.feels_like)}`,
        `Humidity: ${data.main.humidity}%`,
        `Wind Speed: ${data.wind.speed}m/s`,
      ]
      weatherDataEl.querySelector(".icons").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
      weatherDataEl.querySelector(".temperatures").textContent = `${temperature}°C`
      weatherDataEl.querySelector(".description").textContent = `${description}`
      weatherDataEl.querySelector(".details").innerHTML = detail.map((detail)=>` <div class="">${detail}</div>`).join("")
    } catch (error) {
      weatherDataEl.querySelector(".icons").innerHTML = ""
      weatherDataEl.querySelector(".temperatures").textContent = ""
      weatherDataEl.querySelector(".description").textContent = " No City Found Like That Idiot!"
      weatherDataEl.querySelector(".details").innerHTML = ""
    }
  }