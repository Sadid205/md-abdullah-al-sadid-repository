import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import Services from "./components/Services"
import Languages from "./components/Languages"
function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Banner services={<Services/>} languages={<Languages/>}/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/languages" element={<Languages/>}/>
      </Routes>
    </Router>
    
  )
}

export default App
