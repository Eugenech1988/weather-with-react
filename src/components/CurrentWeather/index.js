import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';

import WeatherIcon from 'assets/icons/cloud.svg';
import {getDailyWeather, forecastToggle} from 'actions/weatherAction';
import './style.scss';
import {tooltipInit} from 'actions/userAction';

const mapStateToProps = state => ({
  loading: state.loading,
  dailyWeather: state.weather.dailyWeather,
  tooltipInited: state.userDetails.tooltipInited
});

const mapDispatchToProps = dispatch => ({
  forecastToggle: () => dispatch(forecastToggle()),
  getDailyWeather: (lat, lng) => dispatch(getDailyWeather(lat, lng)),
  tooltipInit: () => dispatch(tooltipInit())
});

@connect(mapStateToProps, mapDispatchToProps)
class CurrentWeather extends Component {
  state = {
    isActive: false,
    isTooltip: false
  };
  
  componentDidMount() {
    const {tooltipInited, tooltipInit} = this.props;
    if (!tooltipInited) {
      setTimeout(() => {
        this.setState({isTooltip: true});
        tooltipInit();
      }, 3000);
    }
  }
  
  handleIconClick() {
    const {isActive} = this.state;
    this.setState({isActive: !isActive});
  }
  
  handleForecastClick() {
    const {forecastToggle} = this.props;
    forecastToggle();
  }
  
  render() {
    const {loading, dailyWeather} = this.props;
    const {isActive, isTooltip} = this.state;
    const btnCls = cx({
      'current-weather__open-btn': true,
      'current-weather__open-btn current-weather__open-btn--active': isActive
    });
    const wrapCls = cx({
      'current-weather__wrap': true,
      'current-weather__wrap current-weather__wrap--active': isActive
    });
    const tooltipCls = cx({
      'current-weather__tooltip': true,
      'current-weather__tooltip--active': isTooltip
    });
    const cityName = dailyWeather.name;
    const temp = Math.floor((dailyWeather.main.temp / 10 - 32) * 5 / 9);
    const drafts = dailyWeather.weather[0].main;
    const windSpeed = Math.floor(Number(dailyWeather.wind.speed.toFixed(1)));
    const windDeg = Math.floor(Number(dailyWeather.wind.deg.toFixed(1)));
    return (
      <div className={wrapCls}>
        {loading &&
        <button className={btnCls} onClick={::this.handleIconClick}>
          <img src={WeatherIcon} alt='' className='current-weather__open-icon'/>
        </button>
        }
        {!isActive &&
        <div className={tooltipCls}>
           Please tap the button to get weather details
        </div>
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
              {windSpeed}&nbsp;MPS
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
          <div className='current-weather__btn-wrap'>
            <button className='current-weather__get-forecast-btn' onClick={::this.handleForecastClick}>
              Get five days weather forecast
            </button>
          </div>
        </div>
      </div>
    );
  }
}

CurrentWeather.propTypes = {
  dailyWeather: PropTypes.object,
  loading: PropTypes.bool,
  userDetails: PropTypes.object,
  forecastToggle: PropTypes.func,
  tooltipInit: PropTypes.func,
  tooltipInited: PropTypes.bool
};

export default CurrentWeather;
