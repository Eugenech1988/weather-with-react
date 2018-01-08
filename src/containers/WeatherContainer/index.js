import React, {Component} from 'react';
import CurrentWeather from 'components/CurrentWeather';
import WeatherMap from 'components/WeatherMap';

class WeatherMain extends Component {
  render() {
    return (
      <div className='weather__wrap'>
        <CurrentWeather />
        <WeatherMap />
      </div>
    );
  }
}

export default WeatherMain;
