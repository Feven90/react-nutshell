import React from 'react';
import './WeatherItem.scss';

import weatherRequests from '../../../helpers/data/weatherRequests';
import authRequests from '../../../helpers/data/authRequests';

class WeatherItem extends React.Component {
    clickCurrentLocation = () => {
      const { weatherLocation } = this.props;
      const isCurrentLocation = !weatherLocation.isCurrent;
      const uid = authRequests.getCurrentUid();
      weatherRequests.getIsCurrent(uid).then((current) => {
        weatherRequests.patchIsCurrent(current.id, false).then(() => {
          weatherRequests.patchIsCurrent(weatherLocation.id, isCurrentLocation).then(() => {
          });
        });
      });
    }

    deleteEvent = (e) => {
      e.preventDefault();
      const { deleteSingleLocation, weatherLocation } = this.props;
      deleteSingleLocation(weatherLocation.id);
    }

    render() {
      const { weatherLocation } = this.props;
      return (
      <div className='wrap-weather'>
      <div className="card-deck">
        <div className="card border-dark" id="weather">
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-bolt fa-2x"></i></h4>
            <ul>{weatherLocation.city} </ul>
            <ul>{weatherLocation.state} </ul>
            <button className="btn btn-danger" id="delete" onClick={this.deleteEvent}><i className="fas fa-trash-alt"></i></button>
            <button onClick={this.clickCurrentLocation}><i className="far fa-star"></i></button>
        </div>
        </div>
      </div>
    </div>
      );
    }
}

export default WeatherItem;
