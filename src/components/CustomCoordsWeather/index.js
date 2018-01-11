import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import ccWeatherIcon from 'assets/icons/coords.svg';

const mapStateToProps = state => ({
});

const dispatchMapToProps = dispatch => ({

});

@connect(mapStateToProps, dispatchMapToProps)
class CustomCoordsWeather extends Component {
  render() {
    return (
      <div className='cc-weather__wrap'>
        <span className='cc-weather__icon'>
          <img src={ccWeatherIcon} alt='' className='cc-weather__img'/>
        </span>
        <span className='cc-weather__tooltip'>
          Please click on map and after on this button to get custom coordinates weather
        </span>
      </div>
    );
  };
}

CustomCoordsWeather.propTypes = {

};

export default CustomCoordsWeather;
