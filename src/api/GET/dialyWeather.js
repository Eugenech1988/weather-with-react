import axios from 'axios';

export const getDialyWeather = (lat, lng) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  
};
