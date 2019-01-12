import React from 'react';
import './Weather.scss';

class Weather extends React.Component {
  render() {
    return (
      <div className='Home'>
      <div class="card-deck">
        <div class="card border-dark" id="weather">
          <div class="card-body text-center">
            <h4 class="card-title"><i className="fas fa-bolt fa-2x"></i></h4>
            <h6 className="card-subtitle mb-2 text-muted">Weather</h6>
            <p className="card-text">Newer better AOL</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Weather;
