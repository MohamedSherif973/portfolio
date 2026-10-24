import './App.css'
import Home from './Home'
import Header from './Header'
import SiteFooter from './SiteFooter'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Experience from './Experience'
import Contact from './Contact'
import NotFound from './NotFound'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="portfolio-page" dir="ltr">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}

export default App
