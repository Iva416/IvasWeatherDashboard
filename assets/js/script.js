// ** when a user clicks the search button, get the input from the search**
const searchButtonElement = document.querySelector('#search-button');
// console.log(searchButtonElement);
// console.dir(searchButtonElement);
// listen for a click
searchButtonElement.addEventListener('click', function (event) {
  event.preventDefault();

  // reach into the html and grab the search box
  const cityInputEl = document.querySelector('#search-bar');
  // extract the "value" from the searchbox el
  console.dir(cityInputEl);

  const cityinput = cityInputEl.value;
  console.log(cityinput);

  const url =
    'https://api.openweathermap.org/data/2.5/forecast?q=' +
    cityinput +
    '&units=metric&appid=df480315b545f990a29ae450c73f8017';

  // get data from the api
  fetch(url)
    .then(function (response) {
      // this is the http response
      console.log(response);
      return response.json();
    })
    .then(function (fiveDayWeather) {
      // this is my data
      console.log(fiveDayWeather);
      // extract the data you want from the fiveDayWeather
      const cityName = fiveDayWeather.city.name;
      console.log(cityName);
      const day1Date = fiveDayWeather.list[0].dt_txt;
      console.log(day1Date);
      const day1Temp = fiveDayWeather.list[0].main.temp;
      console.log(day1Temp);
      const day1wind = fiveDayWeather.list[0].wind.speed;
      console.log(day1wind);
      const day1humidity = fiveDayWeather.list[0].main.humidity;
      console.log(day1humidity);
      const day1icon =
        'https://openweathermap.org/img/wn/' +
        fiveDayWeather.list[0].weather[0].icon +
        '@2x.png';
      console.log(day1icon);

      const day2Date = fiveDayWeather.list[8].dt_txt;
      console.log(day2Date);
      const day2Temp = fiveDayWeather.list[8].main.temp;
      console.log(day2Temp);
      const day2wind = fiveDayWeather.list[8].wind.speed;
      console.log(day2wind);
      const day2humidity = fiveDayWeather.list[8].main.humidity;
      console.log(day2humidity);
      const day2icon =
        'https://openweathermap.org/img/wn/' +
        fiveDayWeather.list[8].weather[0].icon +
        '@2x.png';
      console.log(day2icon);

      const day3Date = fiveDayWeather.list[16].dt_txt;
      console.log(day3Date);
      const day3Temp = fiveDayWeather.list[16].main.temp;
      console.log(day3Temp);
      const day3wind = fiveDayWeather.list[16].wind.speed;
      console.log(day3wind);
      const day3humidity = fiveDayWeather.list[16].main.humidity;
      console.log(day3humidity);
      const day3icon =
        'https://openweathermap.org/img/wn/' +
        fiveDayWeather.list[16].weather[0].icon +
        '@2x.png';
      console.log(day3icon);

      const day4Date = fiveDayWeather.list[24].dt_txt;
      console.log(day4Date);
      const day4Temp = fiveDayWeather.list[24].main.temp;
      console.log(day4Temp);
      const day4wind = fiveDayWeather.list[24].wind.speed;
      console.log(day4wind);
      const day4humidity = fiveDayWeather.list[24].main.humidity;
      console.log(day4humidity);
      const day4icon =
        'https://openweathermap.org/img/wn/' +
        fiveDayWeather.list[24].weather[0].icon +
        '@2x.png';
      console.log(day4icon);

      const day5Date = fiveDayWeather.list[32].dt_txt;
      console.log(day5Date);
      const day5Temp = fiveDayWeather.list[32].main.temp;
      console.log(day5Temp);
      const day5wind = fiveDayWeather.list[32].wind.speed;
      console.log(day5wind);
      const day5humidity = fiveDayWeather.list[32].main.humidity;
      console.log(day5humidity);
      const day5icon =
        'https://openweathermap.org/img/wn/' +
        fiveDayWeather.list[32].weather[0].icon +
        '@2x.png';
      console.log(day5icon);

      const day6Date = fiveDayWeather.list[39].dt_txt;
      console.log(day6Date);
      const day6Temp = fiveDayWeather.list[39].main.temp;
      console.log(day6Temp);
      const day6wind = fiveDayWeather.list[39].wind.speed;
      console.log(day6wind);
      const day6humidity = fiveDayWeather.list[39].main.humidity;
      console.log(day6humidity);
      const day6icon =
        'https://openweathermap.org/img/wn/' +
        fiveDayWeather.list[39].weather[0].icon +
        '@2x.png';
      console.log(day6icon);

      // ** insert the data into the html **
      // reach into the html and grab the element you want to change
      const day1DateElement = document.querySelector('#date1');
      console.dir(day1DateElement); // sanity check
      // insert our extracted data into the element
      day1DateElement.textContent = day1Date;

      const day1TempElement = document.querySelector('#temperature1');
      console.dir(day1TempElement);
      day1TempElement.textContent = `Temperature: ${day1Temp} °C`;

      const day1iconElement = document.querySelector('#iconimage1');
      console.dir(day1iconElement);
      day1iconElement.src = day1icon;

      const day1windElement = document.querySelector('#windspeed1');
      console.dir(day1windElement);
      day1windElement.textContent = `Wind: ${day1wind} kms/hr`;

      const day1humidityElement = document.querySelector('#humidity1');
      console.dir(day1humidityElement);
      day1humidityElement.textContent = `Humidity: ${day1humidity} % `;

      const day2DateElement = document.querySelector('#date2');
      console.dir(day2DateElement);
      day2DateElement.textContent = day2Date;

      const day2iconElement = document.querySelector('#iconimage2');
      console.dir(day2iconElement);
      day2iconElement.src = day2icon;

      const day2TempElement = document.querySelector('#temperature2');
      console.dir(day2TempElement);
      day2TempElement.textContent = `Temperature: ${day2Temp} °C`;

      const day2windElement = document.querySelector('#windspeed2');
      console.dir(day2windElement);
      day2windElement.textContent = `Wind: ${day2wind} kms/hr`;

      const day2humidityElement = document.querySelector('#humidity2');
      console.dir(day2humidityElement);
      day2humidityElement.textContent = `Humidity: ${day2humidity} % `;

      const day3DateElement = document.querySelector('#date3');
      console.dir(day3DateElement);
      day3DateElement.textContent = day2Date;

      const day3iconElement = document.querySelector('#iconimage3');
      console.dir(day3iconElement);
      day3iconElement.src = day2icon;

      const day3TempElement = document.querySelector('#temperature3');
      console.dir(day3TempElement);
      day3TempElement.textContent = `Temperature: ${day3Temp} °C`;

      const day3windElement = document.querySelector('#windspeed3');
      console.dir(day3windElement);
      day3windElement.textContent = `Wind: ${day3wind} kms/hr`;

      const day3humidityElement = document.querySelector('#humidity3');
      console.dir(day3humidityElement);
      day3humidityElement.textContent = `Humidity: ${day3humidity} % `;

      const day4DateElement = document.querySelector('#date4');
      console.dir(day4DateElement);
      day4DateElement.textContent = day4Date;

      const day4iconElement = document.querySelector('#iconimage4');
      console.dir(day4iconElement);
      day4iconElement.src = day4icon;

      const day4TempElement = document.querySelector('#temperature4');
      console.dir(day4TempElement);
      day4TempElement.textContent = `Temperature: ${day4Temp} °C`;

      const day4windElement = document.querySelector('#windspeed4');
      console.dir(day4windElement);
      day4windElement.textContent = `Wind: ${day4wind} kms/hr`;

      const day4humidityElement = document.querySelector('#humidity4');
      console.dir(day4humidityElement);
      day4humidityElement.textContent = `Humidity: ${day4humidity} % `;

      const day5DateElement = document.querySelector('#date5');
      console.dir(day5DateElement);
      day5DateElement.textContent = day5Date;

      const day5iconElement = document.querySelector('#iconimage5');
      console.dir(day5iconElement);
      day5iconElement.src = day5icon;

      const day5TempElement = document.querySelector('#temperature5');
      console.dir(day5TempElement);
      day5TempElement.textContent = `Temperature: ${day5Temp} °C`;

      const day5windElement = document.querySelector('#windspeed5');
      console.dir(day5windElement);
      day5windElement.textContent = `Wind: ${day5wind} kms/hr`;

      const day5humidityElement = document.querySelector('#humidity5');
      console.dir(day5humidityElement);
      day5humidityElement.textContent = `Humidity: ${day5humidity} % `;

      const day6DateElement = document.querySelector('#date6');
      console.dir(day6DateElement);
      day6DateElement.textContent = day6Date;

      const day6iconElement = document.querySelector('#iconimage6');
      console.dir(day6iconElement);
      day6iconElement.src = day6icon;

      const day6TempElement = document.querySelector('#temperature6');
      console.dir(day6TempElement);
      day5TempElement.textContent = `Temperature: ${day6Temp} °C`;

      const day6windElement = document.querySelector('#windspeed6');
      console.dir(day6windElement);
      day6windElement.textContent = `Wind: ${day6wind} kms/hr`;

      const day6humidityElement = document.querySelector('#humidity6');
      console.dir(day6humidityElement);
      day6humidityElement.textContent = `Humidity: ${day6humidity} % `;
    });
});
