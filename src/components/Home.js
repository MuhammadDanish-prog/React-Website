import React from 'react'
import { NavLink } from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Home = () =>{
return <>
<div>
    <h1>THIS IS HOME PAGE</h1>
<nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/Search">Search</Link>
            </li>
          </ul>
        </nav>
</div>


</>
}

export default Home;