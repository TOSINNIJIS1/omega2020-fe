import React from 'react';
import Sudoku from './components/Sudoku.js';

import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import NavBar from "./components/NavBar";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading..</div>;
  }
  return (
    <Router history={history}>
    <div className="App">

      <h1>Omega2020 App</h1>
      {/* <Sudoku /> */}

    <NavBar />
      <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/puzzle" component={Sudoku} />
      </Switch>
      
      <h1>Omega2020 App</h1> 

    </div>
    </Router>
  );
}

export default App;
