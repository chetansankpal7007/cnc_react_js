import React from 'react'
import PropTypes from 'prop-types'
import AbuthUs from './AbuthUs'
import Home from './Home'
import ContactUs from './ContactUs'
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
    <Router>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="abuoth-us">
                    Abuoth Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact_us">
                    Contact US
                  </Link>
                </li>
              </ul>
                <div className="form-check form-switch my-2 my-lg-0">
                  <input className="form-check-input" onChange={props.modeShwich} type="checkbox" id="flexSwitchCheckDefault" />
                  <label style={{color: props.mode === 'light' ? '#0d0c0c': '#f5f0f0'}} className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
                </div>
            </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/abuoth-us" element={<AbuthUs/>}></Route>
          <Route path="/contact_us" element={<ContactUs/>}></Route>
        </Routes>
         
      </Router>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string.isRequired,
  reactLink: PropTypes.string.isRequired
}

Navbar.defaultProps  = {
  title: "duf title",
  home: "def home"
} 
