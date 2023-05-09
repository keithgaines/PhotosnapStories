import React from 'react'

const Header: React.FC = () => {
  return (
    <header id="header">
      <nav className="nav-bar">
        <div className="header-logo"></div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <img src="../../../shared/desktop/logo.svg" alt='logo-black' className="header-logo-img" />
          {/* <a className="navbar-brand" href="#">Navbar</a> */}

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="index.html">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="stories.html">STORIES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="features.html">FEATURES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pricing.html">PRICING</a>
              </li>
            </ul>
            <div className="dark-button-wrap">
              <button className="dark-button btn-dark">GET AN INVITE</button>
            </div>
          </div>
        </nav>
      </nav>
    </header>
  )
}

export default Header
