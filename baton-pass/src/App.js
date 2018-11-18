import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';



// importing components
import HomePage from './components/HomePage';


class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let renderHomePage = (props) => <HomePage {...props}/>;
    
    
    return (
      <Router>
        <Switch>
          <Route exact path='/' render={renderHomePage}/>
          <Route path='/buyer'></Route>
          <Route path='/seller'></Route>
          <Route path='/runner'></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
