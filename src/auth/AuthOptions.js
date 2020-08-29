import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AuthOptions(){
    const history = useHistory();

    const register = () => history.push("/registry");
    const login = () => history.push("/login");

    return(
        <div>
            <ul className="nav navbar-nav navbar-right">
                <li className="navbar-item">
                    <Link onClick={login} className="nav-link">Login</Link>
                </li>
                <li className="navbar-item">
                    <Link onClick={register} className="nav-link">Register</Link>
                </li>
                {/* <button onClick={login}>Login</button>
                <button onClick={register}>Register</button> */}
            </ul>    
        </div>
    );
}