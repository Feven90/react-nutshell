import React from 'react';
import './Weather.scss';
import 'firebase/auth';
import WeatherItem from '../WeatherItem/WeatherItem';
import authRequests from '../../../helpers/data/authRequests';
import weatherRequests from '../../../helpers/data/weatherRequests';
import WeatherForcastComponent from '../CurrentWeather/CurrentWeather';
import Add from '../Add/Add';

class Weather extends React.Component {
  state = {
    weather: [],
    isCurrent: '',
  };

  WeatherGetter() {
    const uid = authRequests.getCurrentUid();
    weatherRequests.getWeather(uid)
      .then((weather) => {
        this.setState({ weather });
      })
      .catch(err => console.error('error with locations GET', err));
  }

  componentDidMount() {
    this.WeatherGetter();
  }

  formSubmitEvent = (addedLocation) => {
    const uid = authRequests.getCurrentUid();
    weatherRequests.postRequest(addedLocation)
      .then(() => {
        weatherRequests.getWeather(uid)
          .then((weather) => {
            this.setState({ weather });
          });
      })
      .catch(err => console.error('error with listings post', err));
  }

  deleteLocation = (locationId) => {
    weatherRequests.deleteWeather(locationId)
      .then(() => {
        this.WeatherGetter();
      });
  };

  render() {
    const { weather } = this.state;
    const weatherLocationz = weather.map(weatherLocation => (
      <WeatherItem
      weatherLocation={weatherLocation}
      key={weatherLocation.id}
      deleteSingleLocation={this.deleteLocation}
      />
    ));

    return (
      <div className='container'>
      <div className="card-deck col weather-wrap">
      <ul><WeatherForcastComponent
            /></ul>
            <ul>{weatherLocationz} </ul>
            <Add onSubmit={this.formSubmitEvent}/>
      </div>
    </div>
    );
  }
}

export default Weather;
