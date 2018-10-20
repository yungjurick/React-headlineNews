import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NewsList from './Components/NewsList';
import Categories from './Components/Categories';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Categories />
        <hr />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/categories/:category" component={NewsList} />
        </Switch>
      </div>
    );
  }
}

export default App;