import { Appbar } from "./components/Appbar"
import { Card } from "./components/Card"
import { Sidebar } from "./components/Sidebar"


function App() {
  
  return (
    <>
      <Appbar />
      <Sidebar />
      <Card value={"500"} />
    </>
  )
}

export default App
