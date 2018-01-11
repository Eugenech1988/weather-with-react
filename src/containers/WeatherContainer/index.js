import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Loader from 'components/Loader';
import CurrentWeather from 'components/CurrentWeather';
import WeatherMap from 'components/WeatherMap';
import FiveDaysWeather from 'components/FiveDaysWeather';
import CustomCoordsWeather from 'components/FiveDaysWeather';

const mapStateToProps = state => ({
  dailyWeather: state.weather.dailyWeather,
  fiveDaysWeather: state.weather.fiveDaysWeather,
  forecastToggle: state.weather.forecastToggle,
  loading: state.loading
});

@connect(mapStateToProps)
class WeatherMain extends Component {
  render() {
    const {dailyWeather, forecastToggle, loading} = this.props;
    return (
      <div className='weather__wrap'>
        {!loading && <Loader/>}
        {dailyWeather && !forecastToggle && <CurrentWeather/>}
        {forecastToggle && <FiveDaysWeather/>}
        < WeatherMap/>
      </div>
    );
  }
}

WeatherMain.propTypes = {
  dailyWeather: PropTypes.object,
  loading: PropTypes.bool,
  forecastToggle: PropTypes.bool
};

export default WeatherMain;
