import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getUserPosition} from 'actions/userAction';
import {getDailyWeather} from 'actions/weatherAction';
import Loader from 'components/Loader';
import './style.scss';

const mapStateToProps = state => ({
  loading: state.loading,
  userDetails: state.userDetails
});

const mapDispatchToProps = dispatch => ({
  getUserPosition: () => dispatch(getUserPosition()),
  getDailyWeather: (lat, lng) => dispatch(getDailyWeather(lat, lng))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class WeatherMap extends Component {
  componentWillMount() {
    const {getUserPosition} = this.props;
    getUserPosition();
  }
  
  componentWillReceiveProps(nextProps) {
    const {userDetails, getDailyWeather} = nextProps;
    getDailyWeather(userDetails.lat, userDetails.lng);
    const mapDiv = document.getElementById('map');
    if (mapDiv) {
      const center = {lat: userDetails.lat, lng: userDetails.lng};
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
      //   alert( 'Latitude: '+event.latLng.lat()+' '+', longitude: '+event.latLng.lng() );
      // });
    }
  }
  
  componentWillUnmount() {
    window.google.maps.event.clearListeners(window, 'resize');
  }
  
  render() {
    const {loading} = this.props;
    return (
      <div className='weather-map'>
        {!loading &&
        <Loader/>
        }
        <div id='map'/>
      </div>
    );
  }
}

WeatherMap.propTypes = {
  getDailyWeather: PropTypes.func,
  getUserPosition: PropTypes.func,
  userDetails: PropTypes.object,
  loading: PropTypes.bool
};
