import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Contact = () =>{
return <>
<h1>THIS IS Contact PAGE</h1>
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
</>
}

export default Contact;