const cityName = document.querySelector('cityName');
const SearchBtn = document.querySelector('searchBtn');
const searchHistory = document.querySelector('searchHistory');
const cityText = cityName('cityname');
const Cities = JSON.parse(localStorage.getItem('Cities')) || [];

const addCity = (cityName) => {
  Cities.push({
    cityName,
  });
  localStorage.setItem('cities', JSON.stringify(Cities));
  return { cityName };
};

var Forcast = function (cityName) {
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=' +
      cityName +
      '&units=metric&appid=df480315b545f990a29ae450c73f8017'
  );
};
