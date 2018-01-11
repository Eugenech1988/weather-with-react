import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import ccWeatherIcon from 'assets/icons/coords.svg';
import {getAllWeather} from 'actions/weatherAction';

const mapStateToProps = state => ({
  userDetails: state.userDetails
});

const dispatchMapToProps = dispatch => ({
  getAllWeather: (lat, lng) => dispatch(getAllWeather(lat, lng))
});

@connect(mapStateToProps, dispatchMapToProps)
class CustomCoordsWeather extends Component {
  handleClick() {
    const {getAllWeather, userDetails} = this.props;
    getAllWeather(userDetails.lat, userDetails.lng)
  }
  render() {
    return (
      <div className='cc-weather__wrap'>
        <button className='cc-weather__icon' onClick={::this.handleClick}>
          <img src={ccWeatherIcon} alt='' className='cc-weather__img'/>
        </button>
        <span className='cc-weather__tooltip'>
          Please click on map and after on this button to get custom coordinates weather
        </span>
      </div>
    );
  };
}

CustomCoordsWeather.propTypes = {
  getAllWeather: PropTypes.func,
  userDetails: PropTypes.object
};

export default CustomCoordsWeather;
