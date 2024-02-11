
function getWeather() {
        const locationInput = document.getElementById("location");
        const weatherInfo = document.getElementById('weather-info');

        const l = locationInput.value;

        const apiKey = '69a74e2d36f84d049c3140842242601'; // Replace with your WeatherAPI API key
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${l}&aqi=no`;

        fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                        const city = data.location.name;
                        document.getElementById("p2").innerHTML = city;
                        const humid = data.current.humidity;
                        document.getElementById("humidity").innerHTML = `${humid}%`;
                        const temp = data.current.temp_c;
                        document.getElementById("p1").innerHTML = `${temp}°C`;
                        const windspeed = data.current.wind_kph;
                        document.getElementById("ws").innerHTML = `${windspeed}km/h`;
                        const condition = data.current.condition.text;
                        if (condition == "Mist") {
                                document.getElementById("i2").src = "mist.png";
                        }
                        else if (condition == "Partly cloudy") {
                                document.getElementById("i2").src = "clouds.png";
                        }
                        else if (condition == "Clear") {
                                document.getElementById("i2").src = "clear.png";
                        }
                        else if (condition == "Overcast") {
                                document.getElementById("i2").src = "drizzle.png";
                        }
                        else if (condition == "Rain") {
                                document.getElementById("i2").src = "rain.png";
                        }
                        else {
                                document.getElementById("i2").src = "snow.png";
                        }

                })
                .catch(error => {
                        alert("No Data found");
                });
}

