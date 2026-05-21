import React from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Stories', href: '/stories' },
  { label: 'Pricing', href: '/pricing' },
]

const socialLinks = [
  { label: 'Facebook', href: '/', icon: '/shared/desktop/facebook.svg' },
  { label: 'YouTube', href: '/', icon: '/shared/desktop/youtube.svg' },
  { label: 'Twitter', href: '/', icon: '/shared/desktop/twitter.svg' },
  { label: 'Pinterest', href: '/', icon: '/shared/desktop/pinterest.svg' },
  { label: 'Instagram', href: '/', icon: '/shared/desktop/instagram.svg' },
]

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a className="footer__logo-link" href="/" aria-label="Photosnap home">
          <img
            className="footer__logo"
            src="/shared/desktop/logo.svg"
            alt="Photosnap"
          />
        </a>

        <nav className="footer__nav" aria-label="Footer navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__socials" aria-label="Social links">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} aria-label={social.label}>
              <img src={social.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
