import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {CSSTransition} from 'react-transition-group';

import {getUserPosition, setCustomCoords} from 'actions/userAction';
import {getDailyWeather, getFiveDaysWeather} from 'actions/weatherAction';
import './style.scss';

const mapStateToProps = state => ({
  loading: state.loading,
  userDetails: state.userDetails
});

const mapDispatchToProps = dispatch => ({
  getUserPosition: () => dispatch(getUserPosition()),
  getDailyWeather: (lat, lng) => dispatch(getDailyWeather(lat, lng)),
  getFiveDaysWeather: (lat, lng) => dispatch(getFiveDaysWeather(lat, lng)),
  setCustomCoords: (lat, lng) => dispatch(setCustomCoords(lat, lng))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class WeatherMap extends Component {
  state = {
    show: false
  };
  
  componentWillMount() {
    const {getUserPosition} = this.props;
    getUserPosition();
  }
  
  componentDidMount() {
    this.setState({show: true});
  }
  
  componentWillReceiveProps(nextProps) {
    const {userDetails, getDailyWeather, getFiveDaysWeather, setCustomCoords} = nextProps;
    getDailyWeather(userDetails.lat, userDetails.lng);
    getFiveDaysWeather(userDetails.lat, userDetails.lng);
    const mapDiv = document.getElementById('map');
    if (mapDiv) {
      let center = {lat: userDetails.lat, lng: userDetails.lng};
      const zoom = 16;
      const map = new window.google.maps.Map(mapDiv, {
        zoom,
        center,
        disableDefaultUI: true
      });
      map.panTo(center);
      new window.google.maps.Marker({
        position: center,
        map,
        zIndex: 1000
      });
      window.google.maps.event.addDomListener(window, 'resize', () => {
        map.setCenter(center);
      });
      // window.google.maps.event.addListener(map, 'click', function( event ){
      //   const customLat = event.latLng.lat();
      //   const customLng = event.latLng.lng();
      //   setCustomCoords(customLat, customLng);
      //   center = {lat: customLat, lng: customLng};
      //   map.setCenter(center);
      // });
    }
  }
  
  componentWillUnmount() {
    window.google.maps.event.clearListeners(window, 'resize');
  }
  
  render() {
    const {show} = this.state;
    return (
      <div className='weather-map'>
        <CSSTransition
          in={show}
          timeout={2000}
          classNames='fade'
        >
          <div id='map'/>
        </CSSTransition>
      </div>
    );
  }
}

WeatherMap.propTypes = {
  getFiveDaysWeather: PropTypes.func,
  getDailyWeather: PropTypes.func,
  getUserPosition: PropTypes.func,
  setCustomCoords: PropTypes.func,
  userDetails: PropTypes.object
};
