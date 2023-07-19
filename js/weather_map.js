
$(() => {
    // Global Var
// Base URL for forecast API
const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const map = initializeMap();
const sanAntonioCoords = ['29.4241219', '-98.4936282'];
const userInput = document.querySelector('#searchText');
const cordArray = [];
    const marker = new mapboxgl.Marker({
        color: 'black',
        draggable: true, // Allow marker dragging (default is false)
        rotation: 20 // Marker rotation angle in degrees (default is 0)
    })
        .setLngLat([-98.4936, 29.4241])
        .addTo(map);

    const URL = getWeatherURL(...sanAntonioCoords);
// Functions
function initializeMap() {
    mapboxgl.accessToken = MATBOX_TOKEN;
    const mapOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-night-v1',
        zoom: 10,
        center: [-98.4916, 29.4252],
    }

    return new mapboxgl.Map(mapOptions);
}

// Simple way to create URL for request based on coordinates
function getWeatherURL(lat, lon) {
    return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
}

// log full response from API
$.ajax(URL).done(data => {
    console.log(data);
}).fail(console.error);

// where we start the map
$.ajax(getWeatherURL(...sanAntonioCoords))
    .done(data => {
        console.log(data);
        displayWeatherForecast(data);
    })
    .fail(console.error);

    function displayWeatherForecast(data) {
        let forecastEdit = $('.forecast');
        forecastEdit.empty();
        for (let i = 0; i < 40; i+=8) {
            const forecast = data.list[i];

            let card = $('<div>').addClass('card');
            let cardBody = $('<div>').addClass('card-body');

            let date = new Date(forecast.dt_txt);
            let formattedDate = formatDate(date);

            let dateElement = $('<h4>').addClass('card-date').text(formattedDate);
            cardBody.append(dateElement);

            let cityName = $('<h3>').addClass('paragraph-city-name')
                .append($('<span>').addClass('span-city-name').text(data.city.name));
            cardBody.append(cityName);

            let temperature = $('<p>').addClass('justify-center').html(`The current temperature is: ${forecast.main.temp}°<br>
      With a feels like of ${forecast.main.feels_like}° <br> The low for the day ${forecast.main.temp_min}
      `);
            cardBody.append(temperature);

            let weatherDescription = $('<p>').text(`The weather for the day is ${forecast.weather[0].description}`);
            cardBody.append(weatherDescription);

            card.append(cardBody);
            forecastEdit.append(card);
        }
    }

    function formatDate(date) {
        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString(undefined, options);
    }
// Events

document.querySelector('#goAddress').addEventListener('click', (e) => {
    // Here we need to call a function and pass in the information to it
    const userSearch = userInput.value;
        geocode(userSearch, MATBOX_TOKEN).then((mapCoords) => {
        console.log(mapCoords);
        cordArray.push(mapCoords);
        marker.setLngLat(mapCoords);
        const weatherCords = getWeatherURL(mapCoords[1], mapCoords[0]);
        console.log(weatherCords)
            map.flyTo({
                center: marker.getLngLat(),
                zoom: 12
            });
            $.ajax(weatherCords).done(data => {
                console.log(data);
                console.log(data.city.name);
                displayWeatherForecast(data);

            })
                .fail(console.error)
        });
            });

    marker.on('dragend', () => {
        const coordinates = marker.getLngLat();
        map.flyTo({
            center: marker.getLngLat(),
            zoom: 12
        });
        // Fetch the weather data for the dropped marker's location
        $.ajax(getWeatherURL(coordinates.lat, coordinates.lng))
            .done(data => {
                console.log(data);
                // Display the 5-day weather forecast for the dropped marker's location
                displayWeatherForecast(data);
            })
            .fail(console.error);
    });









});
