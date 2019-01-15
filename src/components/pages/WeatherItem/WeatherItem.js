import React from 'react';

class WeatherItem extends React.Component {
  render() {
    const { weatherLocation } = this.props;
    return (
      <div className='Home'>
      <div className="card-deck">
        <div className="card border-dark" id="weather">
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-bolt fa-2x"></i></h4>
            <ul>{weatherLocation.city} </ul>
            <ul>{weatherLocation.state} </ul>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default WeatherItem;
