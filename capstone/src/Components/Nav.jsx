import React from 'react';
import logo from "../images/small_logo.jpg";
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav >
            <ul className="grid-adjustable-columns">
                <li> <img src={logo} width="200" height="50" alt="logo" ></img></li>
                <li> <Link to="/"> Homepage</Link> </li>
                <li> <Link to="/"> About</Link> </li>
                <li> <Link to="/"> Menu</Link> </li>
                <li> <Link to="/booking"> Reservations</Link> </li>
                <li> <Link to="/"> Order Online</Link> </li>
                <li> <Link to="/"> Login</Link> </li>
                
            </ul>
        </nav>
    );
  }
  export default Nav;