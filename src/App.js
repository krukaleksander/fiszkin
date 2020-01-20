import React from 'react';
import './styles/App.css';
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

function App() {
  return (

    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/start">Rozpocznij naukę</Link>
            </li>
            <li>
              <Link to="/imex">Import / Export</Link>
            </li>
            <li>
              <Link to="/project">O projekcie</Link>
            </li>
          </ul>

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
      <header className="App-header">
        <h1 className="main-heading">Fiszkin</h1>
        <p className="main-desc">Darmowe narzędzie do nauki poprzez stosowanie fiszek =)</p>
      </header>
    </div>
  );
}

export default App;
