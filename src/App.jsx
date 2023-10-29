import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio"
import NotFound from "./NotFound"

function App() {

  return (
    <BrowserRouter>
 
      <Routes>

        <Route path="/" Component={Inicio}/>
        <Route path="*" Component={NotFound}/>

      </Routes>

    </BrowserRouter>
  )
}

export default App
