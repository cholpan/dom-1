const flags = document.querySelector(".flags");
const darkBtn = document.querySelector(".dark");
const body = document.body;
const searchInput = document.querySelector(".header input")

let data = [];

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((response) => {
    data = response;

    console.log(response);

    response.map(
      (country) =>
        (flags.innerHTML += `
        <div class='flag'>
            <img src="${country.flags.png}" alt="" />
            <h4>${country.name.common}</h4>
            <p>Capital: ${country.capital?.[0]}</p>
        </div>
        `)
    );
  });

darkBtn.addEventListener("click", () => {
  body.style.background = "black";
});

searchInput.addEventListener("keyup", function(e){
    flags.innerHTML = ""
    const value = e.target.value;
    const filteredCountries = data.filter((country)=>{
        if(country.name.common.toLowerCase().includes(value.toLowerCase())){
            return true
        }
        if(country.translations.rus.official.toLowerCase().includes(value.toLowerCase())){
            return true
        }
        if(country.translations.rus.common.toLowerCase().includes(value.toLowerCase())){
            return true
        }
    });
    filteredCountries.map(
        (country) =>
          (flags.innerHTML += `
          <div class='flag'>
              <img src="${country.flags.png}" alt="" />
              <h4>${country.name.common}</h4>
              <p>Capital: ${country.capital?.[0]}</p>
          </div>
          `)
      );

});
