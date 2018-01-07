import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getUserPosition} from 'actions/userLoactionAction';
import Loader from 'components/Loader';
import './style.scss';

const mapStateToProps = state => ({
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  getUserPosition: () => dispatch(getUserPosition())
});

@connect(mapStateToProps, mapDispatchToProps)
export class WeatherMap extends Component {
  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap'
    });
    const {getUserPosition} = this.props;
    getUserPosition();
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
  zoom: PropTypes.number,
  lat: PropTypes.number,
  lng: PropTypes.number
};
