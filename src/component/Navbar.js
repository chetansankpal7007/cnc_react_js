import React from 'react'
import Search from './Search'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >

            <a className="navbar-brand" href="/">
              {props.title}
            </a>
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
                  <a className="nav-link" href="/">
                    {props.home} <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={props.reactLink}>
                    Link
                  </a>
                </li>
              </ul>
                <div className="form-check form-switch my-2 my-lg-0">
                  <input className="form-check-input" onChange={props.modeShwich} type="checkbox" id="flexSwitchCheckDefault" />
                  <label style={{color: props.mode === 'light' ? '#0d0c0c': '#f5f0f0'}} className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
                </div>
            </div>
      </nav>
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
