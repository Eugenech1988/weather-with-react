import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group';
import {forecastToggle} from 'actions/weatherAction';

import './style.scss';

const mapStateToProps = state => ({
  fiveDaysWeatherList: state.weather.fiveDaysWeather.list
});

const dispatchMapToProps = dispatch => ({
  forecastToggle: () => dispatch(forecastToggle())
});

@connect(mapStateToProps, dispatchMapToProps)
class FiveDaysWeather extends Component {
  state = {
    show: false
  };
  
  componentDidMount() {
    this.setState({
      show: true
    });
  }
  
  handleBackClick() {
    const {forecastToggle} = this.props;
    forecastToggle();
  }
  
  render() {
    const {show} = this.state;
    const {fiveDaysWeatherList} = this.props;
    return (
      <CSSTransition
        in={show}
        timeout={2000}
        classNames='fade'
      >
        <div className='forecast-weather__wrap'>
          <div className='forecast-weather__heading'>
            Five days weather forecast
          </div>
          <div className='forecast-weather__result-wrap'>
            <div className='forecast-weather__header'>
              <div className='forecast-weather__header-item'>
                date
              </div>
              <div className='forecast-weather__header-item'>
                time
              </div>
              <div className='forecast-weather__header-item'>
                temperature
              </div>
              <div className='forecast-weather__header-item'>
                humidity
              </div>
              <div className='forecast-weather__header-item'>
                wind speed
              </div>
              <div className='forecast-weather__header-item'>
                wind deg
              </div>
            </div>
            <div className="forecast-weather__content-wrap">
              {
                fiveDaysWeatherList.map(item => {
                  return (
                    <div className="forecast-weather__item" key>
                    
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div className='forecast-weather__close-btn-wrap'>
            <button className='forecast-weather__close-btn' onClick={::this.handleBackClick}>back to the map</button>
          </div>
        </div>
      </CSSTransition>
    );
  };
}

FiveDaysWeather.propTypes = {
  fiveDaysWeatherList: PropTypes.array,
  forecastToggle: PropTypes.func,
  fiveDaysWeather: PropTypes.object
};

export default FiveDaysWeather;
