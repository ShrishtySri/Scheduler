import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserContext from "../../src/components/context/userContext";

export default function AuthOptions() {
    const { userData, setUserData } = useContext(UserContext);
  
    const history = useHistory();
  
    const register = () => history.push("/registry");
    const login = () => history.push("/login");
    const logout = () => {
      setUserData({
        token: undefined,
        user: undefined,
      });
      localStorage.setItem("auth-token", "");
    };
  
    return (
      <ul className="nav navbar-nav navbar-right">
        {userData.user ? (
          <li className="navbar-item">
            <Link onClick={logout} className="nav-link">logout</Link>
          </li>
  
        ) : (
          <>
            <li className="navbar-item">
              <Link onClick={login} className="nav-link">Login</Link>
            </li>
            <li className="navbar-item">
              <Link onClick={register} className="nav-link">Register</Link>
            </li>
          </>
        )}
      </ul>
    );
  }