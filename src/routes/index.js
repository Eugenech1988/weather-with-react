import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import WeatherContainer from 'containers/WeatherContainer';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={WeatherContainer}/>
      </Switch>
    );
  }
}

export default Routes;
