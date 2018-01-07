import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';

const mapStateToProps = state => ({
  loading: state.loading
});

@connect(mapStateToProps)
export class WeatherMap extends Component {
  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap'
    });
  }
  
  render() {
    const {lat, lng, zoom} = this.props;
    const center = { lat: lat, lng: lng }
    return (
      <div className='weather-map'>
        <div id='map'/>
      </div>
    );
  }
}

WeatherMap.propTypes = {
  zoom: PropTypes.number,
  lat: PropTypes.number,
  lng: PropTypes.number
};
