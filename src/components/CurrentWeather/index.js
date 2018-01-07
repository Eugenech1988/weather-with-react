import React, {Component} from 'react';
import {WeatherMap} from 'components/WeatherMap';
import './style.scss';

class CurrentWeather extends Component {
  
  render() {
    return (
      <div className='current-weather__wrap'>
        <WeatherMap
          zoom={13}
          lat={40.7446790}
          lng={-73.9485420}
        />
      </div>
    );
  }
}


export default CurrentWeather;
