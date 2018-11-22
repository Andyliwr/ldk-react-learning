import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './views/index/Index';
import Demos from './views/demos/Demos';
import JingZiQi from './views/demos/jing-zi-qi/JingZiQi';
import NotFound from './views/error/not-found/NotFound';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/demos" component={Demos} />
            <Route path="/demo/jing-zi-qi" component={JingZiQi} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
