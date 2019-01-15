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
  };

  componentDidMount() {
    const uid = authRequests.getCurrentUid();
    weatherRequests.getWeather(uid)
      .then((weather) => {
        this.setState({ weather });
      })
      .catch(err => console.error('error with locations GET', err));
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

  render() {
    const { weather } = this.state;
    const weatherLocationz = weather.map(weatherLocation => (
      <WeatherItem
      weatherLocation={weatherLocation}
      key={weatherLocation.id}
      />
    ));

    return (
      <div className='Home'>
      <div className="card-deck col">
            <ul>{weatherLocationz} </ul>
            <ul><WeatherForcastComponent
            /></ul>
            <Add onSubmit={this.formSubmitEvent}/>
      </div>
    </div>
    );
  }
}

export default Weather;
