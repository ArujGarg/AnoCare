import { Appbar } from "./components/Appbar"
import { Card } from "./components/Card"
import { Home } from "./components/Home"
import { LowerCard } from "./components/LowerCard"
import { RightSideBar } from "./components/RightSideBar"
import { Sidebar } from "./components/Sidebar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import VerifyForm from "./pages/Verified"
import { NGO1 } from "./pages/NGO1"
import { NGO2 } from "./pages/NGO2"
import { NGO3 } from "./pages/NGO3"
import { NGO4 } from "./pages/NGO4"
import { NGO5 } from "./pages/NGO5"



function App() {
  
  return (
    <div className="bg-lime-50">
        <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<VerifyForm />} />
          <Route path="/ngo1" element={<NGO1 />} />
          <Route path="/ngo2" element={<NGO2 />} />
          <Route path="/ngo3" element={<NGO3 />} />
          <Route path="/ngo4" element={<NGO4 />} />
          <Route path="/ngo5" element={<NGO5 />} />
        </Routes>
        

        </BrowserRouter>
      
    </div>
   
  )
}

export default App
