import { Link } from 'react-router-dom'

const projects = [
	{
		title: 'Shareek',
		description: 'A student housing platform that helps students find and match with shared apartments, built as a graduation project and connected to a live API.',
		tech: ['React', 'Vite', 'Bootstrap', 'JavaScript', 'REST API'],
		image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
		github: 'https://github.com/abdelrahmanashraf1392/Shareek',
		live: '#',
	},
	{
		title: 'Personal Portfolio',
		description: 'A responsive portfolio showcasing my skills, projects, and experience through a clean, modern interface.',
		tech: ['React', 'React Router', 'Bootstrap', 'Vite'],
		image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
		github: 'https://github.com/abdelrahmanashraf1392/abdelrahmanashraf1392.github.io',
		live: 'https://abdelrahmanashraf1392.github.io/',
	},
	{
		title: 'Discover The World',
		description: 'A travel website for exploring cities and destinations through clean pages with a photography-led visual style.',
		tech: ['HTML5', 'CSS3', 'JavaScript'],
		image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
		github: 'https://github.com/abdelrahmanashraf1392/Discover_World',
		live: 'https://abdelrahmanashraf1392.github.io/Discover_World/',
	},
]

function Project() {
	return (
		<main className="page-shell">
			<section className="projects-section">
				<div className="section-header">
					<div>
						<span className="section-kicker">Selected work</span>
						<h2>A selection of interfaces I&apos;ve recently built</h2>
					</div>
					<p>Modern interfaces, thoughtful interactions, and clear visual design.</p>
				</div>

				<div className="projects-grid">
					{projects.map((project) => (
						<article className="project-card" key={project.title}>
							<img src={project.image} alt={project.title} />
							<div className="project-body">
								<h3>{project.title}</h3>
								<p>{project.description}</p>
								<ul className="tech-list">
									{project.tech.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
								<div className="project-links">
									{project.live !== '#' && (
										<a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
									)}
									<a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
								</div>
							</div>
						</article>
					))}
				</div>

				<div className="all-projects-row">
					<Link to="/contact" className="view-all-link">Get in touch</Link>
				</div>
			</section>
		</main>
	)
}

export default Project
