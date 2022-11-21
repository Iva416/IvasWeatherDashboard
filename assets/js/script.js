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

      const day2Date = fiveDayWeather.list[8].dt_txt;
      console.log(day2Date);
      const day2Temp = fiveDayWeather.list[8].main.temp;
      console.log(day2Temp);

      // ** insert the data into the html **
      // reach into the html and grab the element you want to change
      const day1DateElement = document.querySelector('#date1');
      console.dir(day1DateElement); // sanity check
      // insert our extracted data into the element
      day1DateElement.textContent = day1Date;

      const day1TempElement = document.querySelector('#temperature1');
      console.dir(day1TempElement);
      day1TempElement.textContent = day1Temp;
    });
});
