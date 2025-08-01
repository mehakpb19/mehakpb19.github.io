let cloud = document.getElementById('cloud');
let humidity = document.getElementById('humidity');
let temp = document.getElementById('temp');
let wind = document.getElementById('wind');

let latitude;
let longitude;

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        function(position) {
            latitude = position.coords.latitude.toFixed(2);
            longitude = position.coords.longitude.toFixed(2);
            fetch(`https://api.weatherapi.com/v1/current.json?key=f182a24c565c4721903150204253107&q=${latitude},${longitude}`)
                .then(Response => Response.json())
                .then(data => {
                    cloud.innerText = `cloud: ${data.current.cloud}`
                    humidity.innerText = `Humidity: ${data.current.humidity}`
                    temp.innerText = `Temprature(c): ${data.current.temp_c}`
                    wind.innerText = `Windspeed(kph): ${data.current.wind_kph}`
                })
                .catch(error => console.error(error));
        })
}