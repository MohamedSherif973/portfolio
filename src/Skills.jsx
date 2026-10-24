const skills = [
	{
		title: 'Frontend Development',
		items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'React Router', 'Bootstrap'],
	},
	{
		title: 'Development Tools',
		items: ['Git', 'GitHub', 'npm', 'Vite', 'Visual Studio Code'],
	},
	{
		title: 'Web & APIs',
		items: ['REST APIs', 'Fetch API', 'Async / Await', 'JSON', 'DOM Manipulation'],
	},
	{
		title: 'Design',
		items: ['Figma', 'Canva', 'Responsive Design'],
	},
]

function Skills() {
	return (
		<main className="page-shell">
			<section className="skills-section">
				<div className="section-header">
					<div>
						<span className="section-kicker">Skills</span>
						<h2>The tools I use to turn ideas into practical interfaces</h2>
					</div>
					<p>I focus on building clean, fast, responsive interfaces shaped around user needs.</p>
				</div>

				<div className="skills-grid">
					{skills.map((skill) => (
						<div key={skill.title} className="skill-box">
							<h3>{skill.title}</h3>
							<ul>
								{skill.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>
		</main>
	)
}

export default Skills
