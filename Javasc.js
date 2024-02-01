let themeModeElement = document.getElementById("theme-mode");
let modeToggleBtnElement = document.getElementById("mode-switch-btn");
let weatherCardElement = document.getElementById("weatherCard");
let cityInputElement = document.getElementById("citySearchInputEle");
let searchBtnElement = document.getElementById("searchBtn");
let weatherImgElement = document.getElementById("weatherImageElement");
let weatherTxtElement = document.getElementById("weatherTypeTxtElement");
let weatherTemperatureElement = document.getElementById("weatherTemperatureTxtElement");
let cityNameTxtElement = document.getElementById("cityNameElement");
let humidPerElement = document.getElementById("humidPerEle");
let windPerElement = document.getElementById("windPerEle");
let modeImgElement = document.getElementById("modeSwitchLogoEle");

let url;
let data;

function modeChanger() {
    if (modeImgElement.src === "https://i.pinimg.com/564x/20/b1/ab/20b1ab1773478f4c8c18ce25bf0d18fe.jpg") {
        modeImgElement.src = "https://w7.pngwing.com/pngs/543/19/png-transparent-weather-forecasting-symbol-computer-icons-cloud-sunny-cloud-weather-forecasting-computer-wallpaper.png";
        themeModeElement.style.background = "radial-gradient(circle, rgba(112,187,207,1) 0%, rgba(255,255,255,1)52%)";
        modeToggleBtnElement.style.backgroundImage = "url('https://previews.123rf.com/images/pellinni/pellinni1707/pellinni170700043/81837994-dramatic-sky-with-dynamic-cloud-arrangement-cloudy-weather-background.jpg')";
    } else {
        modeImgElement.src = "https://i.pinimg.com/564x/20/b1/ab/20b1ab1773478f4c8c18ce25bf0d18fe.jpg";
        themeModeElement.style.background = "linear-gradient(286deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 0%, rgba(0, 0, 0, 1) 100%, rgba(6, 18, 85, 1) 100%, rgba(6, 18, 85, 1) 100%)";
        modeToggleBtnElement.style.backgroundImage = "url('https://img.freepik.com/premium-vector/space-background-with-stars-vector-illustration_97886-319.jpg')";



    }
}
async function fetchData(URL) {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            // throw new Error(`HTTP error! Status: ${response.status}`);
            alert("Please enter a valid city name.");
            cityInputElement.value = "";
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        data = await response.json();
        //console.log(weatherType);
    } catch (error) {
        console.error('Fetch error:', error);
    }
    let weatherType = ((data.weather)[0]).main;
    console.log(weatherType);
    weatherTxtElement.textContent = weatherType;
    let temperature = ((data.main).temp);
    console.log(temperature);
    weatherTemperatureElement.textContent = temperature + "°c";
    let humidity = ((data.main).humidity);
    console.log(humidity);
    humidPerElement.textContent = humidity + "%";
    let windSpeed = (((data).wind).speed);
    console.log(windSpeed);
    windPerElement.textContent = windSpeed + " Km/hr";
    let cityName = (data.name);
    console.log(cityName);
    cityNameTxtElement.textContent = cityName;
    if (weatherType === "Clear") {
        weatherImgElement.src = "https://i.ibb.co/FHXSmGy/clear.png";
        weatherCardElement.style.background = "linear-gradient(180deg, rgba(255,255,255,1) 40%, rgba(226,223,7,1)81%)";
        weatherTxtElement.style.color = "#0C0404";
        weatherTemperatureElement.style.color = "#0C0404";
        cityNameTxtElement.style.color = "#0C0404";
        humidPerElement.style.color = "#0C0404";
        windPerElement.style.color = "#0C0404";
    } else if (weatherType === "Mist") {
        weatherImgElement.src = "https://i.ibb.co/zr2KQDw/mist.png";
        weatherCardElement.style.background = "rgba(255,255,255,0.8)";
        weatherTxtElement.style.color = "#0C0404";
        weatherTemperatureElement.style.color = "#0C0404";
        cityNameTxtElement.style.color = "#0C0404";
        humidPerElement.style.color = "#0C0404";
        windPerElement.style.color = "#0C0404";
    } else if (weatherType === "Rain") {
        weatherImgElement.src = "https://i.ibb.co/1G2YNbw/rain.png";
        weatherCardElement.style.background = "linear-gradient(180deg, rgba(0,0,0,1) 27%, rgba(0,6,89,1) 100%, rgba(255,255,255,1)100%)";
        weatherTxtElement.style.color = "#ffffff";
        weatherTemperatureElement.style.color = "#ffffff";
        cityNameTxtElement.style.color = "#ffffff";
        humidPerElement.style.color = "#ffffff";
        windPerElement.style.color = "#ffffff";
    } else if (weatherType === "Drizzle") {
        weatherImgElement.src = "https://i.ibb.co/yhWFfPh/drizzle.png";
        weatherCardElement.style.background = "linear-gradient(286deg, rgba(255,255,255,1) 0%, rgba(1,156,225,1) 0%, rgba(220,220,220,1)100%)";
        weatherTxtElement.style.color = "#ffffff";
        weatherTemperatureElement.style.color = "#ffffff";
        cityNameTxtElement.style.color = "#ffffff";
        humidPerElement.style.color = "#ffffff";
        windPerElement.style.color = "#ffffff";
    } else if (weatherType === "Clouds") {
        weatherImgElement.src = "https://i.ibb.co/mBDnWJL/clouds.png";
        weatherCardElement.style.background = "linear-gradient(286deg, rgba(255, 255, 255, 1) 0%, rgba(1, 156, 225, 1) 0%, rgba(220, 220, 220, 1) 100%)";
        weatherTxtElement.style.color = "#ffffff";
        weatherTemperatureElement.style.color = "#ffffff";
        cityNameTxtElement.style.color = "#ffffff";
        humidPerElement.style.color = "#ffffff";
        windPerElement.style.color = "#ffffff";
    } else if (weatherType === "Haze") {
        weatherImgElement.src = "https://cdn-icons-png.flaticon.com/512/1779/1779862.png";
        weatherCardElement.style.background = "linear-gradient(237deg, rgba(255,255,255,1) 9%, rgba(85,228,190,1)76%)";
        weatherTxtElement.style.color = "#0C0404";
        weatherTemperatureElement.style.color = "#0C0404";
        cityNameTxtElement.style.color = "#0C0404";
        humidPerElement.style.color = "#0C0404";
        windPerElement.style.color = "#0C0404";
    } else if (weatherType === "Snow") {
        weatherImgElement.src = "https://i.ibb.co/7tQF4tP/snow.png";
        weatherTxtElement.style.color = "#0C0404";
        weatherTemperatureElement.style.color = "#0C0404";
        cityNameTxtElement.style.color = "#0C0404";
        humidPerElement.style.color = "#0C0404";
        windPerElement.style.color = "#0C0404";
        weatherCardElement.style.background = "linear-gradient(286deg, rgba(163,163,163,1) 0%, rgba(255,255,255,1)71%)";
    }
}
async function fetchingAndUpdating() {
    let city = cityInputElement.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=597c4138a0a1000b04a0027dfbb80f6d&units=metric`;
    await fetchData(url);
}
cityInputElement.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        fetchingAndUpdating();
    }
});
async function demo() {
    await fetchData(`https://api.openweathermap.org/data/2.5/weather?q=kurnool&appid=597c4138a0a1000b04a0027dfbb80f6d&units=metric`);
}
demo();
