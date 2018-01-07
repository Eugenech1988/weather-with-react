import React from 'react';
import {connect} from 'react-redux';
import './style.scss';

const mapStateToProps = state => ({
  loading: state.loading
});

@connect(mapStateToProps)
class Loader extends React.Component {
  render() {
    return (
      <div className='loader-overlay'>
        <div className='loader'/>
      </div>
    );
  }
}

export default Loader;
