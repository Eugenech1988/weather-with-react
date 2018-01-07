import React, {Component} from 'react';
import CurrentWeather from 'components/CurrentWeather';

class WeatherMain extends Component {
  render() {
    return (
      <div className='weather__wrap'>
        <CurrentWeather />
      </div>
    );
  }
}

export default WeatherMain;
