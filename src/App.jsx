import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Services from "./components/Services"
import Languages from "./components/Languages"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Banner skills={<Skills/>} services={<Services/>} education={<Education/>} projects={<Projects/>} contact={<Contact/>} languages={<Languages/>}/> }/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/languages" element={<Languages/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
