import React from 'react';
import PropTypes from 'prop-types';

import 'firebase/auth';
import authRequests from '../../../helpers/data/authRequests';

const defaultListing = {
  city: '',
  state: '',
  isCurrent: false,
};

class WeatherForcastComponent extends React.Component {

  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    newListing: defaultListing,
  }

  formFieldStringState = (location, e) => {
    e.preventDefault();
    const tempListing = { ...this.state.newListing };
    tempListing[location] = e.target.value;
    this.setState({ newListing: tempListing });
  }

  addCity = e => this.formFieldStringState('city', e);

  addState = e => this.formFieldStringState('state', e);

  formSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const myListing = { ...this.state.newListing };
    myListing.uid = authRequests.getCurrentUid();
    onSubmit(myListing);
    this.setState({ newListing: defaultListing });
  }

  render() {
    const { newListing } = this.state;
    return (
  <div className="listing-form col">
    <h2>Add New Location:</h2>
    <form onSubmit={this.formSubmit}>
      <div className="form-group">
        <label htmlFor="address">City</label>
        <input
          type="text"
          className="form-control"
          id="city"
          placeholder="Nashville"
          value={newListing.city}
          onChange={this.addCity}
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageUrl">State</label>
        <input
          type="text"
          className="form-control"
          id="state"
          placeholder="TN"
          value={newListing.state}
          onChange={this.addState}
        />
      </div>
      <button className="btn btn-danger">Save</button>
        </form>
      </div>
    );
  }
}

export default WeatherForcastComponent;
