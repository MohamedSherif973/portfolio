import './Header.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Experience', to: '/experience' },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Mohamed Sherif - home">
        <span className="brand-mark" aria-hidden="true">MS</span>
        <span className="brand-name">Mohamed <span className="brand-dot">Sherif</span></span>
      </Link>

      <nav className="main-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => isActive ? 'nav-link is-active' : 'nav-link'}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Link className="contact-link" to="/contact">
        Let&apos;s connect <span className="contact-arrow" aria-hidden="true">→</span>
      </Link>
    </header>
  )
}

export default Header

