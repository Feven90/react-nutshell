import React from 'react';
import 'firebase/auth';


class WeatherForcastComponent extends React.Component {
  render() {
    const { currentWeatherLocation } = this.props;

    return (
      <div className='Home'>
        <ul>{currentWeatherLocation.app_temp} </ul>
      <div className="card-deck">
            <p className="card-text">Current Weather</p>
      </div>
    </div>
    );
  }
}

export default WeatherForcastComponent;
