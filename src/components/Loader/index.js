import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './style.scss';

class Loader extends React.Component {
  state = {
    show: false
  };
  
  componentDidMount() {
    this.setState({show: false});
  }
  
  render() {
    const {show} = this.state;
    return (
      <div className='loader-wrap'>
        <CSSTransition
          in={show}
          timeout={500}
          classNames='loader-fade'
        >
          <div className='loader-overlay'>
            <div className='loader'/>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Loader;
