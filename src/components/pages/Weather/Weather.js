import React from 'react';
import './Weather.scss';
import WeatherItem from '../WeatherItem/WeatherItem';
import authRequests from '../../../helpers/data/authRequests';
import weatherData from '../../../helpers/data/weatherRequests';

class Weather extends React.Component {
  state = {
    weather: [],
  };

  weatherfunc = () => {
    const uid = authRequests.getCurrentUid();
    // .then((uid) => {
    weatherData.getWeather(uid)
      .then((weather) => {
        console.log(weather);
        this.setState({ weather });
      })
      .catch(err => console.error('error with locations GET', err));
  };

  render() {
    // const { weather } = this.props;
    this.weatherfunc();
    const { weather } = this.state;
    // { this.weatherfunc(); }
    const weatherLocationz = weather.map(weatherLocation => (
      <WeatherItem
      weatherLocation={weatherLocation}
      key={weatherLocation.id}
      />
    ));

    return (
      <div className='Home'>
      <div className="card-deck">
        {/* <div className="card border-dark" id="weather">
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-bolt fa-2x"></i></h4> */}
            {/* <h6 className="card-subtitle mb-2 text-muted">{ weatherLocations.city}</h6> */}
            <ul>{weatherLocationz} </ul>
            <p className="card-text">Weather</p>
          {/* </div>
        </div> */}
      </div>
    </div>
    );
  }
}

export default Weather;
