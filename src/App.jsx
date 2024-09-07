import { Appbar } from "./components/Appbar"
import { Card } from "./components/Card"
import { Home } from "./components/Home"
import { LowerCard } from "./components/LowerCard"
import { RightSideBar } from "./components/RightSideBar"
import { Sidebar } from "./components/Sidebar"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  
  return (
    <div>
        <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/verify" element={}/> */}
        </Routes>

        </BrowserRouter>
      
    </div>
   
  )
}

export default App
