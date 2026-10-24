import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="page-shell">
      <section className="experience-section">
        <div className="section-header">
          <div>
            <span className="section-kicker">404</span>
            <h2>Page not found</h2>
          </div>
          <Link to="/" className="view-all-link">Return home</Link>
        </div>
      </section>
    </main>
  )
}

export default NotFound