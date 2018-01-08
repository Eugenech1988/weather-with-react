import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cx from 'classnames';

import WeatherIcon from 'assets/icons/cloud.svg';
import './style.scss';
import {getDialyWeather} from "../../api/GET/dialyWeather";
import {userDetails} from "../../reducers/userReducer";

const mapStateToProps = state => ({
  loading: state.loading,
  userDetails: state.userDetails
});

@connect(mapStateToProps)
class CurrentWeather extends Component {
  state = {
    isActive: false
  };
  
  componentWillReceiveProps(nextProps) {
    const userDetails = nextProps.userDetails;
    getDialyWeather(userDetails.lat, userDetails.lng);
  }
  
  handleIconClick() {
    const {isActive} = this.state;
    this.setState({isActive: !isActive});
  }
  render() {
    const {loading} = this.props;
    const {isActive} = this.state;
    const btnCls = cx({
      'current-weather__open-btn': true,
      'current-weather__open-btn current-weather__open-btn--active': isActive
    });
    const wrapCls = cx({
      'current-weather__wrap': true,
      'current-weather__wrap current-weather__wrap--active': isActive
    });
    return (
      <div className={wrapCls}>
        {loading &&
        <button className={btnCls} onClick={::this.handleIconClick}>
          <img src={WeatherIcon} alt='' className='current-weather__open-icon'/>
        </button>
        }
      </div>
    );
  }
}

CurrentWeather.propTypes = {
  loading: PropTypes.bool,
  userDetails: PropTypes.object
};

export default CurrentWeather;
