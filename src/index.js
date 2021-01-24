import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap"

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Landing from './Landing';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import About from './About';
import Contact from './About';
import Survey from './Survey';

ReactDOM.render(
  <div>
    <Router>
      <NavigationBar />
      <Switch>
      <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/survey">
          <Survey />
        </Route>
      </Switch>
        <Footer />
    </Router>
  </div>
  ,
  document.getElementById('root')
);
