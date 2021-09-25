import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EverGreenFinancial from '../pages/EverGreenFinancial/EverGreenFinancial';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={EverGreenFinancial} />
      </Switch>
    </Router>
  </div>
);

export default App;
