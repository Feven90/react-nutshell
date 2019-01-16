import React from 'react';
import weatherRequests from '../../../helpers/data/weatherRequests';
import authRequests from '../../../helpers/data/authRequests';
import './WeatherItem.scss';

class WeatherItem extends React.Component {
  state = {
    // weather: [],
    checkbox: '',
    clickCurrentLocation: '',
    isCurrent: '',
  };

  // componentDidUpdate() {
    clickCurrentLocation = () => {
      const { weatherLocation } = this.props;

    //   const uid = authRequests.getCurrentUid();
    //   weatherRequests.getWeather(uid)
    //     .then((weatherId) => {
    // const count = weatherId.length;

      console.log(weatherLocation.id);
      const checkbox = !weatherLocation.isCurrent;
      // const clickedButton = document.getElementsByClassName('delete');
      // if (e.target.val() === 'delete') {
      weatherRequests.patchIsCurrent(weatherLocation.id, checkbox);
      // this.setState({ checkbox: false });
      // }
      // weatherRequests.patchIsCurrent(weatherLocation.id, checkbox);
      // console.log(checkbox);
      // this.setState({ checkbox: true });
    // weatherRequests.Request(weather);
    // this.setState({ weather });
    //     });
    };
  // }

    deleteEvent = (e) => {
      // firebase id
      e.preventDefault();
      const { deleteSingleLocation, weatherLocation } = this.props;
      console.log(weatherLocation);
      deleteSingleLocation(weatherLocation.id);
    }

    render() {
      // const { clickCurrentLocation } = this.state;
      const { weatherLocation } = this.props;
      return (
      <div className='Home'>
      <div className="card-deck">
        <div className="card border-dark" id="weather">
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-bolt fa-2x"></i></h4>
            <ul>{weatherLocation.city} </ul>
            <ul>{weatherLocation.state} </ul>
            <button className="btn btn-danger" id="delete" onClick={this.deleteEvent}>Delete</button>
            <button onClick={this.clickCurrentLocation}>Current</button>
        </div>
        </div>
      </div>
    </div>
      );
    }
}

export default WeatherItem;
