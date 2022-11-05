
let countries = [];

const loadCountries = async () =>{
    const response = await fetch("data/countries.json");
    countries = await response.json();
    showCountries(countries);
}


const cardElement = document.getElementById("country-card");

const showCountries = (countriesParam) =>{
    const countryCard = countriesParam
                    .map((country) =>{
                        return `
                            <div class="card">
                                <div class="image">
                                    <img style=" width=250px; height=125px;"id="country-image" src="${country.flag}" alt="">
                                </div>
                                <div class="info">
                                    <b>Name:</b> ${country.name} <br>
                                    <b>Capital:</b> ${country.capital} <br>
                                    <b>Population:</b> ${country.population} <br>
                                    <b>Region:</b> ${country.region} 
                                </div>
                            </div>
                        `;
                    });
                    cardElement.innerHTML = countryCard;
}

loadCountries();


let countryName = document.getElementById("input");

countryName.addEventListener("input", (e) =>{
    const searchCountryName = e.target.value.toLowerCase();
    const filteredCountries = countries.filter((country) => {
        return (country.name.toLowerCase().includes(searchCountryName));
    });
    showCountries(filteredCountries);
});




























