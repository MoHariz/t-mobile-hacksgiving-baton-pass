import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'; 

import Runner from './components/runner';

// importing page component
import HomePage from './components/HomePage';
import RunnerPage from './components/runner';
import SellerPage from './components/seller';
import BuyerPage from './components/buyer';



class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let renderHomePage = (props) => <HomePage {...props}/>;
    let renderBuyerPage = (props) => <BuyerPage {...props}/>;
    let renderSellerPage = (props) => <SellerPage {...props}/>;
    let renderRunnerPage = (props) => <RunnerPage {...props}/>;
    

    
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path='/' render={renderHomePage}/>
            <Route path='/buyer' render={renderBuyerPage}></Route>
            <Route path='/seller' render={renderSellerPage}></Route>
            <Route path='/runner' render={renderRunnerPage}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
