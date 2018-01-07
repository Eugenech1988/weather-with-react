import React, {Component} from 'react';
import WeatherMap from 'components/WeatherMap';

import './style.scss';

class CurrentWeather extends Component {
  
  render() {
    return (
      <div className='current-weather__wrap'>
        <WeatherMap/>
      </div>
    );
  }
}


export default CurrentWeather;
