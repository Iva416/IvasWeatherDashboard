const cityName = document.querySelector('cityName');

var fiveForcast = function (cityName) {
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=' +
      cityName +
      '&units=metric&appid=df480315b545f990a29ae450c73f8017'
  );
};
