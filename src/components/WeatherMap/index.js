import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import {startLoading, finishLoading} from 'actions/loaderAction';

import './style.scss';

const mapStateToProps = state => ({
  loading: state.loading
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
      </div>
    );
  };
}

WeatherMap.propTypes = {
  loading: PropTypes.bool,
  getPosition: PropTypes.func
};

export default WeatherMap;
