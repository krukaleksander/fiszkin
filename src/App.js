import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Project from './components/Project';
import Imex from './components/Imex';
import StartLearn from './components/StartLearn';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './css/styles.min.css';
import { FaRegSmileWink } from 'react-icons/fa';
window.jQuery = window.$ = $;
require('bootstrap');



const App = () => {
  return (

    <div className="App">
      <header className="App-header">
        <h1 className="main-heading">Fiszkin</h1>
        <p className="main-desc">Narzędzie do nauki poprzez stosowanie fiszek <FaRegSmileWink /></p>
      </header>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="main-nav navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/imex">Import / Export</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/project">O projekcie</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/imex">
              <Imex />
            </Route>
            <Route path='/project'>
              <Project />
            </Route>
            <Route path='/'>
              <StartLearn />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
