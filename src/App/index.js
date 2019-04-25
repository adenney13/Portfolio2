import React, { Component } from "react";
import "./style.css";
import { Route, Link } from "react-router-dom"
import About from "./About/About"
import Work from "./Work/Work"
import Contact from "./Contact/Contact"

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/about">About</Link>
          <Link to="/work">My Work</Link>
          <Link to="/contact">Contact Me</Link>
        </nav>
        <main>
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
