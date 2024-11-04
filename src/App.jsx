import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Services from "./components/Services"
import Languages from "./components/Languages"
import Skills from "./components/Skills"
function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Banner skills={<Skills/>} services={<Services/>} languages={<Languages/>}/> }/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/languages" element={<Languages/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
