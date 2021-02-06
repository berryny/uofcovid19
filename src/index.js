import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Landing from './Landing';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import RegAccount from './RegAccount';
import Survey from './Survey';
import Profile from './Profile';
import GoodToGo from './GoodToGo';

// Example Sites
import ExerciseList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

ReactDOM.render(
  <div>
    <Router>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/goodtogo">
            <GoodToGo/>
          </Route> 
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <RegAccount />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/survey">
            <Survey />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/exercise-tracker" component={ExerciseList} />
          <Route exact path="/edit/:id" component={EditExercise} />
          <Route exact path="/create" component={CreateExercise} />
          <Route exact path="/user" component={CreateUser} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  </div>
  ,
  document.getElementById('root')
);
