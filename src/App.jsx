import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Languages from "./components/Languages"
import Navbar from "./components/Navbar"
import ProjectDetails from "./components/ProjectDetails"
import Projects from "./components/Projects"
import ProjectsShowCase from "./components/ProjectShowcase"
import Services from "./components/Services"
import Skills from "./components/Skills"
function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={
  <>
    <Banner
      skills={<Skills />}
      experience={<Experience/>}
      services={<Services />}
      education={<Education />}
      projects={<Projects />}
      contact={<Contact />}
      languages={<Languages />}
      projectshowcase={<ProjectsShowCase />}
    />
  </>
}
/>
        <Route path="/languages" element={<Languages/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects-showcase" element={<ProjectsShowCase/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project-details/:project_id" element={<ProjectDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
