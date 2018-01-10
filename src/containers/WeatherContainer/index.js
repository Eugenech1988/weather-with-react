import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CurrentWeather from 'components/CurrentWeather';
import WeatherMap from 'components/WeatherMap';

const mapStateToProps = state => ({
  dailyWeather: state.weather.dailyWeather
});

@connect(mapStateToProps)
class WeatherMain extends Component {
  render() {
    const {dailyWeather} = this.props;
    return (
      <div className='weather__wrap'>
        {dailyWeather &&
        <CurrentWeather/>
        }
        < WeatherMap />
      </div>
    );
  }
}

WeatherMain.propTypes = {
  dailyWeather: PropTypes.object
};

export default WeatherMain;
