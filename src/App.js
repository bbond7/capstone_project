import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import homePage from "./components/homePage/homepage.component";
import skisPage from "./components/skisPage/skis.component";
import skiBootsPage from "./components/bootsPage/skiboots.component";
import skiBindingsPage from "./components/skiBindingsPage/skibindings.component"
import aboutUsPage from "./components/aboutUs/aboutus.component";
import Footer from "./footer";

import logo from "./Logo.png";

class App extends Component {
  render() {
    return (
        <div className="container">
          <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://bondskis.com" >
              <img src={logo} width="100" height="100" alt="Bondskis Logo" />
            </a>
            <div className="collapse.nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/skis" className="nav-link">Skis</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/skiboots" className="nav-link">Boots</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/skibindings" className="nav-link">Bindings</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/aboutus" className="nav-link">About Us</Link>
                </li>
              </ul>
            </div>
          </nav>
        <Route path="/" exact component={homePage} />
        <Route path="/skis" component={skisPage} />
        <Route path="/skiboots" component={skiBootsPage} />
        <Route path="/skibindings" component={skiBindingsPage} />
        <Route path="/aboutus" component={aboutUsPage} />
      </Router>
      <Footer />
    </div>
    );
  }
}

export default App;
