import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-block">
          <div className="brand footer-brand">
            <span className="brand-mark">M</span>
            <span className="brand-name">Mohamed <span className="brand-dot">Sherif</span></span>
          </div>
          <p>Clear design, flexible code, and thoughtful user experiences.</p>
          <div className="footer-socials">
            <a href="https://github.com/MohamedSherif973" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mohamed-sherif-584534347" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="footer-links-col">
          <h3>Explore</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h3>Contact</h3>
          <a href="mailto:mohamedsherif221123@gmail.com">mohamedsherif221123@gmail.com</a>
        </div>
      </div>
      <div className="footer-bottom">© {currentYear} Mohamed Sherif. All rights reserved.</div>
    </footer>
  )
}

export default SiteFooter