import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './components/Header';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="app-container">
            <Header />
            <Routes />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
