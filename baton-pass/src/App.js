import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {




  render() {

    console.log("Hi HIHIHIHIHIHIHIHi")


    return (
      <Router>
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <p>
              I Love UW
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> */}
        <Switch>
          <Route path='/home'></Route>
          <Route path='/buyer'></Route>
          <Route path='/seller'></Route>
          <Route path='/runner'></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
