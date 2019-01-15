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
    const { currentWeatherLocation } = this.state;
    return (
      <div className='Home'>
        <p className="card-text">Current Weather</p>
        <ul>{currentWeatherLocation.app_temp} </ul>
        <ul>{currentWeatherLocation.city_name} </ul>
        <ul>{currentWeatherLocation.state_code} </ul>
    </div>
    );
  }
}

export default WeatherForcastComponent;
