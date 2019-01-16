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

  componentDidMount() {
    const uid = authRequests.getCurrentUid();
    weatherRequests.getWeather(uid)
      .then((weather) => {
        console.log(weather.length);
        console.log(weather);
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

  deleteLocation = (locationId) => {
    const uid = authRequests.getCurrentUid();
    console.log(locationId);
    weatherRequests.deleteWeather(locationId)
      .then(() => {
        weatherRequests.getWeather(uid)
          .then((weather) => {
            this.setState({ weather });
          });
      })
      .catch((error) => {
        console.log('error in deleting friend', error);
      });
  };
  // clickCurrentLocation = () => {
  //   const uid = authRequests.getCurrentUid();
  //   weatherRequests.getWeather(uid)
  //     .then((weather) => {
  //       // const weatherLength = weather.length;
  //       if (weather[0].isCurrent === true) {
  //         weatherRequests.postRequest(weather);
  //         this.setState({ isCurrent: false });
  //       }
  //       if (weather[1].isCurrent === true) {
  //         weatherRequests.postRequest(weather);
  //         this.setState({ isCurrent: false });
  //       }
  //       if (weather[2].isCurrent === true) {
  //         weatherRequests.postRequest(weather);
  //         this.setState({ isCurrent: false });
  //       }
  //       const checked = document.getElementsByClassName('is-current');
  //       if (checked === true) {
  //         weatherRequests.postRequest(weather);
  //         this.setState({ isCurrent: true });
  //       }
  //       // weatherRequests.Request(weather);
  //       // this.setState({ weather });
  //     });
  // };

  render() {
    const { weather } = this.state;
    // const { deleteLocation } = this.props;
    const weatherLocationz = weather.map(weatherLocation => (
      <WeatherItem
      weatherLocation={weatherLocation}
      key={weatherLocation.id}
      // weather={weather}
      deleteSingleLocation={this.deleteLocation}
      />
    ));

    return (
      <div className='Home'>
      <div className="card-deck col weather-wrap">
      <Add onSubmit={this.formSubmitEvent}/>
            <ul>{weatherLocationz} </ul>
            <ul><WeatherForcastComponent
            /></ul>
            {/* onClick={this.clickCurrentLocation} */}
      </div>
    </div>
    );
  }
}

export default Weather;
