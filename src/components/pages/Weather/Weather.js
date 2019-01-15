import React from 'react';
import './Weather.scss';
import 'firebase/auth';
import WeatherItem from '../WeatherItem/WeatherItem';
import authRequests from '../../../helpers/data/authRequests';
import weatherRequests from '../../../helpers/data/weatherRequests';
import weatherForcast from '../../../helpers/data/weatherbitRequests';
import WeatherForcastComponent from '../CurrentWeather/CurrentWeather';

class Weather extends React.Component {
  state = {
    weather: [],
    currentWeatherLocation: {},
  };

  componentDidMount() {
    const uid = authRequests.getCurrentUid();
    weatherRequests.getWeather(uid)
      .then((weather) => {
        this.setState({ weather });
      })
      .catch(err => console.error('error with locations GET', err));

    weatherRequests.getIsCurrent(uid)
      .then((isCurrent) => {
        this.setState({ isCurrent });
        const getCurrentLocation = isCurrent;
        const getCity = getCurrentLocation.city;
        const getState = getCurrentLocation.state;
        weatherForcast.getForecast(getCity, getState)
          .then((currentWeatherLocation) => {
            this.setState({ currentWeatherLocation });
          });
      });
  }

  render() {
    const { weather, currentWeatherLocation } = this.state;
    const weatherLocationz = weather.map(weatherLocation => (
      <WeatherItem
      weatherLocation={weatherLocation}
      key={weatherLocation.id}
      />
    ));

    return (
      <div className='Home'>
      <div className="card-deck">
            <ul>{weatherLocationz} </ul>
            <WeatherForcastComponent
            currentWeatherLocation={currentWeatherLocation}
            key={currentWeatherLocation.id
            }
            />
      </div>
    </div>
    );
  }
}

export default Weather;
