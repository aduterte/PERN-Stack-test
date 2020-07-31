import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

export default function Nav () {
    
    

    return (
        <div className="nav">
          <div id="header">
              <div className="header-text">alessandro</div>
              <img className="header-text" src="./images/logo.svg" alt="logo" id="logo"/>
              <div className="header-text">duterte</div>
          </div>
          
          <div id="nav">
            <Link className="header-link" to="/">Home</Link>
            <Link className="header-link" to="/blog">Blog</Link>
            <Link className="header-link" to="/projects">Projects</Link>
            <Link className="header-link" to="/contact">Contact</Link>
          </div>
      </div>
        
    )
}