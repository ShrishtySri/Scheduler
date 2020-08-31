import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { BrowserRouter as Router, Route} from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./style.css";
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/Exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import Login from "./auth/login.component";
import Register from "./auth/register.component";
import Home from "./components/home.component";
import UserContext from './components/context/userContext';
import Axios from "axios";


function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(()=>{
    const checkLoggeIn = async() => {
      const token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggeIn();
  }, []);

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/registry" component={Register} />
              <Route path="/dashboard" component={ExercisesList} />
              <Route path="/edit/:id" component={EditExercise} />
              <Route path="/add" component={CreateExercise} />
            </Switch>
          </div>
        </UserContext.Provider>
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
