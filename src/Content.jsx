import { Link } from 'react-router-dom'

function Content() {
	return (
		<main className="page-shell">
			<section className="hero-section">
				<div className="hero-copy">
					<p className="availability"><span aria-hidden="true" /> Open to opportunities</p>
					<p className="eyebrow">Hello, I&apos;m</p>
					<h1>Mohamed Sherif</h1>
					<p className="role">React Front-End Developer</p>
					<p className="lead">
						I build responsive, user-focused web experiences with React, JavaScript, and modern front-end tools. I enjoy turning thoughtful designs into clear, accessible interfaces.
					</p>
                    

					<div className="hero-actions">
						<Link className="primary-button" to="/projects">
							View my work <span className="button-arrow">→</span>
						</Link>
						<Link className="secondary-button" to="/contact">
							Get in touch
						</Link>
					</div>

					<div className="social-links" aria-label="Social links">
						<a href="https://github.com/MohamedSherif973" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
						<a href="https://www.linkedin.com/in/mohamed-sherif-584534347" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
					</div>
				</div>
                
                

				<div className="hero-visual">
					<div className="profile-card">
						<img src="/WhatsApp Image 2026-09-05 at 2.24.33 AM.jpeg" alt="Mohamed Sherif" />
					</div>
				</div>
			</section>
		</main>
	)
}

export default Content
