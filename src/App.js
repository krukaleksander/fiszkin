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
import './styles/styles.css';
window.jQuery = window.$ = $;
require('bootstrap');


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <h1 className="main-heading">Fiszkin</h1>
        <p className="main-desc">Darmowe narzędzie do nauki poprzez stosowanie fiszek =)</p>
      </header>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Home /</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="main-nav navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/start">Rozpocznij naukę</Link>
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
            <Route path="/start">
              <StartLearn />
            </Route>
            <Route path="/imex">
              <Imex />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
