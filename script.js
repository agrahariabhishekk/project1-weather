let api = `https://api.openweathermap.org/data/2.5/weather?q=`;
let apiKey = "815de0cd56b9fd6ef3bb331fe4581904&units=metric";

let cityName = document.getElementById("cityName");
let Buttons = document.querySelector(".searchBtn");
let weatherIcon = document.querySelector(".weatherpng");

async function checkWeather(city) {
  let res = await fetch(api + city + `&appid=${apiKey}`);
  let data = await res.json();
  console.log(data);
  if (
    data.message == "city not found" ||
    data.message == "Nothing to geocode"
  ) {
    alert("You are enterd wrong city name");
    document.querySelector(".main").style.display = "none";
  }

  document.querySelector(".weatherCity").innerHTML = data.name;
  document.querySelector(".weatherTemp").innerHTML = `${Math.round(
    `${data.main.temp}`
  )} °C`;
  document.querySelector("#hmlevel").innerHTML = data.main.humidity + " %";
  document.querySelector("#speed").innerHTML = `${data.wind.speed} Km/h`;

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "images/snow.png";
  } else if (data.weather[0].main === "Mist") {
    weatherIcon.src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Search") {
    weatherIcon.src = "images/search.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "images/snow.png";
  } else if (data.weather[0].main == "Wind") {
    weatherIcon.src = "images/wind.png";
  } else {
    ("");
  }
  document.querySelector(".main").style.display = "block";
}
Buttons.addEventListener("click", () => {
  checkWeather(cityName.value);
});
