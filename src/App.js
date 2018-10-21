import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NewsList from './Components/NewsList';
import Categories from './Components/Categories';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage'

class App extends Component {
  render() {
    return (
      <>
        <Route path="/" exact component={LandingPage} />
        <Route path="/categories" component={Categories} />
        <Switch>
          <Route path="/categories" exact component={Home} />
          <Route path="/categories/:category" component={NewsList} />
        </Switch>
      </>
    );
  }
}

export default App;