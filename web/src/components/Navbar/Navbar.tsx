import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header id="header" className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <a href="/" className="site-nav__logo-link" aria-label="Photosnap home">
          <img
            src="/shared/desktop/logo.svg"
            alt="Photosnap"
            className="site-nav__logo"
          />
        </a>

        <button
          className="site-nav__toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="site-nav__toggle-line" />
        </button>

        <div
          className={`site-nav__menu ${isMenuOpen ? 'is-open' : ''}`}
          id="primary-navigation"
        >
          <ul className="site-nav__links">
            <li>
              <a href="/" className="site-nav__link">
                Home
              </a>
            </li>
            <li>
              <a href="/stories" className="site-nav__link">
                Stories
              </a>
            </li>
            <li>
              <a href="/pricing" className="site-nav__link">
                Pricing
              </a>
            </li>
          </ul>

          <a href="/" className="site-nav__cta">
            Get an invite
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
