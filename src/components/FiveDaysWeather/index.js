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
          <div className='forecaset-weather__inner-wrap'>
            <div className='forecast-weather__heading'>
              Five days weather forecast
            </div>
            <div className='forecast-weather__result-wrap'>
              <div className='forecast-weather__header'>
                <div className='forecast-weather__header-item forecast-weather__header-item--date'>
                  date
                </div>
                <div className='forecast-weather__header-item forecast-weather__header-item--time'>
                  time
                </div>
                <div className='forecast-weather__header-item forecast-weather__header-item--temp'>
                  temperature
                </div>
                <div className='forecast-weather__header-item forecast-weather__header-item--draft'>
                  draft
                </div>
                <div className='forecast-weather__header-item forecast-weather__header-item--w-speed'>
                  wind speed
                </div>
                <div className='forecast-weather__header-item forecast-weather__header-item--w-deg'>
                  wind deg
                </div>
              </div>
              <div className='forecast-weather__content-wrap'>
                {fiveDaysWeatherList && fiveDaysWeatherList.map(item => {
                  const key = Math.random();
                  const date = item.dt_txt.substr(0, item.dt_txt.length - 9);
                  const time = item.dt_txt.slice(10);
                  const temp = Math.floor((item.main.temp / 10 - 32) * 5 / 9);
                  const draft = item.weather[0].description;
                  const windSpeed = Math.floor(item.wind.speed.toFixed(1));
                  const windDeg = Math.floor(item.wind.deg.toFixed(1));
                  return (
                    <div className='forecast-weather__item-wrap' key={key}>
                      <div className='forecast-weather__item forecast-weather__item--date'>
                        {date}
                      </div>
                      <div className='forecast-weather__item forecast-weather__item--time'>
                        {time}
                      </div>
                      <div className='forecast-weather__item forecast-weather__item--temp'>
                        {temp}&nbsp;&#176;C
                      </div>
                      <div className='forecast-weather__item forecast-weather__item--temp'>
                        {draft}
                      </div>
                      <div className='forecast-weather__item forecast-weather__item--w-speed'>
                        {windSpeed}&nbsp;MPS
                      </div>
                      <div className='forecast-weather__item forecast-weather__item--w-deg'>
                        {windDeg}&#176;
                      </div>
                    </div>
                  )}
                )}
              </div>
            </div>
            <div className='forecast-weather__close-btn-wrap'>
              <button className='forecast-weather__close-btn' onClick={::this.handleBackClick}>back to the map</button>
            </div>
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
