'use strict'

const cards = document.querySelector(".cards")
const btn = document.querySelector(".btn-search")
const input = document.querySelector(".input")

async function country(country) {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const [data] = await res.json();
        console.log(data);
      const { name, capital, population ,region,  currencies, subregion, languages } = data;
      const roundedpop = Math.floor(population)
    const card = document.createElement("div")
   card.innerHTML = `
   <div class="card">
   <div class="one">
       <img src="${data.flags.png}" alt="">
       <p class="capital">${data.name.common }</p>
       <p class="capital">${capital}</p>
   </div>
   <div class="two">

       <p class="pop">population: ${roundedpop} </p>
       <p class="curr" >currencies ${currencies ? currencies.EUR ? currencies.EUR.name : "N/A" : "N/A"}</p>
       <p class="lang">languages: ${languages ? Object.values(languages).join(", ") : "N/A"}</p>
       <p class="lang">Region:${region}</p>
   </div>
  </div> 
   `
    cards.appendChild(card)
    } catch (err) {
        console.log('something went wrong');
    }
}

country(); 
btn.addEventListener("click", function(){
    const searchCountry = input.value.trim()
    cards.innerHTML = ''
    if(searchCountry !== ""){
        country(searchCountry)
        input.value = ''
    } 
})
























