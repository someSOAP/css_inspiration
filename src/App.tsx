import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import StarWars from './components/StarWars'

const App : React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="https://reactjs.org">Learn React</Link>
          <Link to="/">Home</Link>
        </header>
        <Switch>
          <Route exact path="/">
            <StarWars />
          </Route>
        </Switch>

      </div>
    </Router>
  );
};

export default App;
