import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';

export default class Navbar extends Component{

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Scheduler</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                        <Link to="/dashboard" className="nav-link">Log</Link>
                        </li>
                        <li className="navbar-item">
                        <Link to="/add" className="nav-link">Add</Link>
                        </li>
                    </ul>
                    <AuthOptions />
                </div>
                
            </nav>
        );
    }
}