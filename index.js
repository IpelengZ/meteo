function refreshWeather(response) {
    console.log(response.data);
}


function searchCity(city){
    let apiKey = "8ocd344800t15729aafe29dbb6a3a7a9";
    let apiURL =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&Units=metric`;
    axios.get(apiUrl).then(refreshWeather);

} // make api call and update interface


function handleSearchSubmit (event) {
    event.preventDefault ();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

let searchFomatElement = document.querySelector("3search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);