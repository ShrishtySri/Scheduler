import React from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter as Router, Route} from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/Exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import Login from "./auth/login.component";
import Register from "./auth/register.component";
import Home from "./components/home.component";
import UserContext from './components/context/userContext';

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/dashboard" component={ExercisesList} />
              <Route path="/edit/:id" component={EditExercise} />
              <Route path="/add" component={CreateExercise} />
            </Switch>
          </div>
       
      </BrowserRouter>
    </>
    
    // <Router>
    //   <div className="">
    //   <Navbar />
    //   <br/>
      
    //   <Route path="/" exact component={ExercisesList} />
    //   <Route path="/edit/:id" component={EditExercise} />
    //   <Route path="/create" component={CreateExercise} />
    //   </div>
    // </Router>
  );
}

export default App;
