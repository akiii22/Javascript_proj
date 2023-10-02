const accessKey = "6kUoieMWJSNbOsQNTI3fBlXpBO0xS8e5v8a-WRKSs7s";
const formEl = document.querySelector("form");
const inputEl = document.getElementById("input");
const searchEl = document.querySelector(".search-result");
const btnEl = document.getElementById("show");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = inputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  if(page === 1){
    searchEl.innerHTML = "";
  }

  const results = data.results;
  
  results.map((result)=>{
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-res");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchEl.appendChild(imageWrapper);
  });
 
  page++;

  if(page > 1){
    btnEl.style.display = "block";
  }
}


formEl.addEventListener("submit", (e)=>{
  e.preventDefault();
  page = 1;
  searchImages();
});

btnEl.addEventListener("click", ()=>{
  searchImages();
});