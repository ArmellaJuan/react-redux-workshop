import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import Header from './components/Header';
import Routes from './components/Routes';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <Router>
            <div className="app-container">
              <Header />
              <Routes />
            </div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
