import React from 'react';
import 'firebase/auth';
import authRequests from '../../../helpers/data/authRequests';
import weatherRequests from '../../../helpers/data/weatherRequests';
import weatherForcast from '../../../helpers/data/weatherbitRequests';

class WeatherForcastComponent extends React.Component {
  state = {
    currentWeatherLocation: {},
  };

  componentDidMount() {
    const uid = authRequests.getCurrentUid();
    weatherRequests.getIsCurrent(uid)
      .then((current) => {
        const getCurrentLocation = current;
        const getCity = getCurrentLocation.city;
        const getState = getCurrentLocation.state;
        weatherForcast.getForecast(getCity, getState)
          .then((currentWeatherLocation) => {
            this.setState({ currentWeatherLocation });
          });
      });
  }


  render() {
    const { currentWeatherLocation } = this.state;
    return (
      <div className="card">
      <div className="card-body">
      <div className="card-header" id="weather-card-header">Current Weather</div>
        <ul>{currentWeatherLocation.city_name} </ul>
        <ul>{currentWeatherLocation.state_code} </ul>
        <ul>{currentWeatherLocation.app_temp} </ul>
        </div>
    </div>
    );
  }
}

export default WeatherForcastComponent;
