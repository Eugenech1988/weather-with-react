import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getFiveDaysWeather, getDailyWeather} from "actions/weatherAction";
import './style.scss';
import ccWeatherIcon from 'assets/icons/coords.svg';

const mapStateToProps = state => ({
  userDetails: state.userDetails
});

const dispatchMapToProps = dispatch => ({
  getDailyWeather: (lat, lng) => dispatch(getDailyWeather(lat, lng)),
  getFiveDaysWeather: (lat, lng) => dispatch(getFiveDaysWeather(lat, lng))
});

@connect(mapStateToProps, dispatchMapToProps)
class CustomCoordsWeather extends Component {
  handleClick() {
    const {getDailyWeather, getFiveDaysWeather, userDetails} = this.props;
    getDailyWeather(userDetails.lat, userDetails.lng);
    getFiveDaysWeather(userDetails.lat, userDetails.lng);
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
  getFiveDaysWeather: PropTypes.func,
  getDailyWeather: PropTypes.func,
  userDetails: PropTypes.object
};

export default CustomCoordsWeather;
