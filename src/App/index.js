import React, { Component } from "react";
import "./style.css";
import { Route, Link } from "react-router-dom"
import About from "./About/About"
import Work from "./Work/Work"
import Contact from "./Contact/Contact"
import selfie from '../Assets/profile-pic.PNG'
import Landing from "./Landing"


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top">
          <div className="header">
            <div className="nav">
              <h1 className = "header-name">Aaron Denney</h1>
              <p className="sub-header">Web Developer/Software Engineer</p>

                <Link to="/about">About</Link>
                <br/>
                <Link to="/work">My Work</Link>
                <br/>
                <Link to="/contact">Contact Me</Link>
            
            </div>
            <div>
              <img src= {selfie} alt="me" className="photo"/>
            </div>
          </div>
          <hr/>
        </div>
        <main>
          <Route
            exact path="/"
            component={Landing}
          />
          <Route 
            path="/about"
            component={About}
          />
          <Route 
            path="/work"
            component={Work}
          />
          <Route 
            path="/contact"
            component={Contact}
          />
        </main>
      </div>
    )
  }
}

export default App;
