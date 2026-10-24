function About() {
	return (
		<main className="page-shell">
			<section className="about-page" aria-labelledby="about-title">
				<header className="about-heading">
					<span className="section-kicker">A little about me</span>
					<h1 id="about-title">About me</h1>
					<p>An aspiring front-end developer focused on clean, useful interfaces.</p>
				</header>

				<div className="about-profile">
					<div className="about-portrait">
						<img src="/WhatsApp Image 2026-09-05 at 2.24.33 AM.jpeg" alt="Mohamed Sherif" />
					</div>
					<div className="about-profile-copy">
						<h2>Mohamed Sherif</h2>
						<p className="role">React Front-End Developer</p>
						<p>
							I enjoy turning ideas into responsive web experiences. I work with HTML, CSS, JavaScript, and React, and I am continually growing my skills through hands-on projects.
						</p>
					</div>
				</div>

				<div className="about-sections-grid">
					<section className="about-section">
						<h2>Background</h2>
						<p>
							My focus is front-end development: building modern, responsive websites that are easy to understand and pleasant to use. I enjoy taking a design from an idea to a working interface.
						</p>
						<p>
							I am currently strengthening my JavaScript and React skills while learning more about accessibility, APIs, and maintainable code.
						</p>
					</section>

					<section className="about-section">
						<h2>Development philosophy</h2>
						<p>
							Good development is more than making a page look right. I aim for clear structure, thoughtful details, and interfaces that work smoothly across screen sizes.
						</p>
					</section>

					<section className="about-section">
						<h2>Career goals</h2>
						<p>
							My goal is to grow as a front-end developer by contributing to real projects, learning from a team, and taking on increasingly challenging problems.
						</p>
					</section>

					<section className="about-section">
						<h2>Technical interests</h2>
						<ul className="about-interest-list">
							<li>Front-end development</li>
							<li>Modern web technologies</li>
							<li>UI and UX design</li>
							<li>Problem solving</li>
						</ul>
					</section>

					<section className="about-section about-work-style">
						<h2>How I work</h2>
						<ul className="about-work-list">
							<li>Curious and eager to learn</li>
							<li>Creative and self-motivated</li>
							<li>Open to exploring new technologies</li>
							<li>Focused on continuous improvement</li>
						</ul>
					</section>
				</div>
			</section>
		</main>
	)
}

export default About
