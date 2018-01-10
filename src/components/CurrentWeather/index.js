import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';

import WeatherIcon from 'assets/icons/cloud.svg';
import {getDailyWeather} from 'actions/weatherAction';
import './style.scss';

const mapStateToProps = state => ({
  loading: state.loading,
  userDetails: state.userDetails,
  dailyWeather: state.weather.dailyWeather
});

const mapDispatchToProps = dispatch => ({
  getDailyWeather: (lat, lng) => dispatch(getDailyWeather(lat, lng))
});

@connect(mapStateToProps, mapDispatchToProps)
class CurrentWeather extends Component {
  state = {
    isActive: false
  };
  
  componentWillReceiveProps(nextProps) {
    const {userDetails} = nextProps;
    // getDailyWeather(userDetails.lat, userDetails.lng);
  }
  
  handleIconClick() {
    const {isActive} = this.state;
    this.setState({isActive: !isActive});
  }
  render() {
    const {loading, dailyWeather} = this.props;
    const {isActive} = this.state;
    const btnCls = cx({
      'current-weather__open-btn': true,
      'current-weather__open-btn current-weather__open-btn--active': isActive
    });
    const wrapCls = cx({
      'current-weather__wrap': true,
      'current-weather__wrap current-weather__wrap--active': isActive
    });
    const cityName = dailyWeather.name;
    const temp = Math.floor((dailyWeather.main.temp / 10 - 32) * 5 / 9);
    const drafts = dailyWeather.weather[0].main;
    const windSpeed = dailyWeather.wind.speed;
    const windDeg = dailyWeather.wind.deg;
    return (
      <div className={wrapCls}>
        {loading &&
        <button className={btnCls} onClick={::this.handleIconClick}>
          <img src={WeatherIcon} alt='' className='current-weather__open-icon'/>
        </button>
        }
        <div className='current-weather__content-wrap'>
          <h2 className='current-weather__heading'>
            Current weather on your location
          </h2>
          <div className='current-weather__town-wrap'>
            <span className='current-weather__town-label'>
              Your location:&nbsp;
            </span>
            <span className='current-weather__town'>
              {cityName}
            </span>
          </div>
          <div className='current-weather__temp-wrap'>
            <span className='current-weather__temp-label'>
              Current temperature:&nbsp;
            </span>
            <span className='current-weather__temp'>
              {temp}&nbsp;&#176;C
            </span>
          </div>
          <div className='current-weather__draft-wrap'>
            <span className='current-weather__draft-label'>
              Weather drafts:&nbsp;
            </span>
            <span className='current-weather__draft'>
              {drafts}
            </span>
          </div>
          <div className='current-weather__wind-wrap'>
            <span className='current-weather__wind-speed-label'>
              Wind speed:&nbsp;
            </span>
            <span className='current-weather__wind-speed'>
              {windSpeed}&nbsp;MPH
            </span>
          </div>
          <div className='current-weather__wind-wrap'>
            <span className='current-weather__wind-deg-label'>
              Wind degrees:&nbsp;
            </span>
            <span className='current-weather__wind-deg'>
              {windDeg}&#176;
            </span>
          </div>
        </div>
        
      </div>
    );
  }
}

CurrentWeather.propTypes = {
  dailyWeather: PropTypes.object,
  loading: PropTypes.bool,
  userDetails: PropTypes.object
};

export default CurrentWeather;
