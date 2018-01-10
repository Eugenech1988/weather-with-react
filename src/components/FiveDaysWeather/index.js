import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group';

import './style.scss';

const mapStateToProps = state => ({});

const dispatchMapToProps = dispatch => ({});

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
  
  render() {
    const {show} = this.state;
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
        </div>
      </CSSTransition>
    );
  };
}

FiveDaysWeather.propTypes = {};

export default FiveDaysWeather;
