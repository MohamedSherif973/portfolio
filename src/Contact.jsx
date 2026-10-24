import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')
    const body = `From: ${name} (${email})\n\n${message}`
    const mailto = `mailto:mohamedsherif221123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setStatus('Opening your email app with the message ready to send.')
    window.location.href = mailto
  }

  return (
    <main className="page-shell">
      <section className="contact-page" aria-labelledby="contact-title">
        <header className="contact-intro">
          <span className="section-kicker">Get in touch</span>
          <h1 id="contact-title">Contact</h1>
          <p>Recruiters, clients and developers are all welcome to reach out.</p>
        </header>

        <div className="contact-layout">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-field">
              <span>Full name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>

            <label className="contact-field">
              <span>Email address</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>

            <label className="contact-field">
              <span>Subject</span>
              <input name="subject" type="text" required />
            </label>

            <label className="contact-field">
              <span>Message</span>
              <textarea name="message" rows="6" required />
            </label>

            <button className="primary-button contact-submit" type="submit">
              Send message <span aria-hidden="true">→</span>
            </button>
            <p className="contact-note">
              This form opens your email app with the message ready to send. Nothing is stored on this site.
            </p>
            <p className="contact-status" role="status" aria-live="polite">{status}</p>
          </form>

          <aside className="contact-aside">
            <section className="contact-details" aria-labelledby="contact-details-title">
              <h2 id="contact-details-title">Contact details</h2>
              <ul>
                <li>
                  <span aria-hidden="true">@</span>
                  <a href="mailto:mohamedsherif221123@gmail.com">mohamedsherif221123@gmail.com</a>
                </li>
                <li>
                  <span aria-hidden="true">in</span>
                  <a href="https://www.linkedin.com/in/mohamed-sherif-584534347" target="_blank" rel="noreferrer">LinkedIn profile</a>
                </li>
                <li>
                  <span aria-hidden="true">GH</span>
                  <a href="https://github.com/MohamedSherif973" target="_blank" rel="noreferrer">GitHub profile</a>
                </li>
              </ul>
            </section>

            <section className="contact-invitation">
              <span className="section-kicker">Open to opportunities</span>
              <h2>Let&apos;s build something good.</h2>
              <p>I&apos;m open to junior front-end roles, internships and collaborations.</p>
            </section>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Contact