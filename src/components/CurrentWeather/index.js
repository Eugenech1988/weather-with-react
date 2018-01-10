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
  dialyWeather: state.weather.dialyWeather
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
    const {loading, dialyWeather} = this.props;
    const {isActive} = this.state;
    const btnCls = cx({
      'current-weather__open-btn': true,
      'current-weather__open-btn current-weather__open-btn--active': isActive
    });
    const wrapCls = cx({
      'current-weather__wrap': true,
      'current-weather__wrap current-weather__wrap--active': isActive
    });
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
              {dialyWeather.name}
            </span>
          </div>
          <div className='current-weather__temp-wrap'>
            <span className='current-weather__temp-label'>
              Current temperature:&nbsp;
            </span>
            <span className='current-weather__temp'>
              {dialyWeather}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

CurrentWeather.propTypes = {
  dialyWeather: PropTypes.object,
  loading: PropTypes.bool,
  userDetails: PropTypes.object
};

export default CurrentWeather;
