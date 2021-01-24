import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import NavigationBar from './NavigationBar';
import Survey from './Survey';

ReactDOM.render(
  <div>
    <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/survey">
            <Survey />
          </Route>
        </Switch>
    </Router>
  </div>
  ,
  document.getElementById('root')
);
