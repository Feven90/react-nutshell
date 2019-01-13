import React from 'react';
// import authRequests from '../../../helpers/data/authRequests';

class WeatherItem extends React.Component {
  render() {
    const { weatherLocation } = this.props;
    // const uid = authRequests.getCurrentUid();
    return (
      <div className='Home'>
      <div className="card-deck">
        <div className="card border-dark" id="weather">
          <div className="card-body text-center">
            <h4 className="card-title"><i className="fas fa-bolt fa-2x"></i></h4>
            {/* <h6 className="card-subtitle mb-2 text-muted">{ weatherLocations.city}</h6> */}
            <ul>{weatherLocation.city} </ul>
            <p className="card-text">city</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default WeatherItem;
