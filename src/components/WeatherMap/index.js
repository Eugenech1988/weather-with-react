import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getUserPosition} from 'actions/userAction';
import Loader from 'components/Loader';
import './style.scss';

const mapStateToProps = state => ({
  loading: state.loading,
  userDetails: state.userDetails
});

const mapDispatchToProps = dispatch => ({
  getUserPosition: () => dispatch(getUserPosition())
});

@connect(mapStateToProps, mapDispatchToProps)
export class WeatherMap extends Component {
  componentWillMount() {
    const {getUserPosition, userDetails} = this.props;
    getUserPosition();
  }
  
  componentWillReceiveProps(nextProps) {
    const userDetails = nextProps.userDetails;
    const mapDiv = document.getElementById('map');
    if (mapDiv) {
      const center = {lat: userDetails.lat, lng: userDetails.lng};
      const zoom = 16;
      const map = new window.google.maps.Map(mapDiv, {
        zoom,
        center
      });
      map.panTo(center);
      new window.google.maps.Marker({
        position: center,
        map,
        zIndex: 1000
      });
      window.google.maps.event.addDomListener(window, 'resize', function () {
        map.setCenter(center);
      });
    }
  }
  
  componentWillUnmount() {
    window.google.maps.event.clearListeners(window, 'resize');
  }
  
  render() {
    const {loading} = this.props;
    // const {lat, lng, zoom} = this.props;
    // const center = { lat: lat, lng: lng }
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
  getUserPosition: PropTypes.func,
  userDetails: PropTypes.object,
  loading: PropTypes.bool
};
