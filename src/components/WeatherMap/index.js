import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import Loader from 'components/Loader';
import {startLoading, finishLoading} from 'actions/loaderAction';

import './style.scss';

const mapStateToProps = state => ({

});

const dispatchMapToProps = dispatch => ({
  startLoading: () => dispatch(startLoading()),
  finishLoading: () => dispatch(finishLoading())
});

@connect(mapStateToProps, dispatchMapToProps)
class WeatherMap extends Component {
  constructor() {
    super();
    
    this.state = ({
      lat: '',
      lng: '',
      zoom: 13
    });
  }
  
  render() {
    const {loading} = this.props;
    const {lat, lng, zoom} = this.state;
    const center = [lat, lng];
    return (
      <div className='weather-map'>
        {loading &&
          <Loader/>
        }
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={zoom}
        />
      </div>
    );
  };
}

WeatherMap.propTypes = {
  loading: PropTypes.bool,
  getPosition: PropTypes.func
};

export default WeatherMap;
