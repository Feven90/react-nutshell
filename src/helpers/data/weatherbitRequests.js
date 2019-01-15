import axios from 'axios';

import apiKeys from '../apiKeys';

const getForecast = (city, state) => new Promise((resolve, reject) => {
  axios.get(`https://api.weatherbit.io/v2.0/current?city=${city},${state}&units=I&key=${apiKeys.weatherbit.apiKey}`)
    .then((result) => {
      if (result.data === '') {
        resolve('noData');
      } else {
        console.log(result.data.data[0]);
        resolve(result.data.data[0]);
      }
    })
    .catch((error) => {
      reject(error);
    });
});

export default {
  getForecast,
};
