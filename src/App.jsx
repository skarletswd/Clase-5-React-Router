import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio"
import Contacto from "./Contacto"
import NotFound from "./NotFound"

function App() {

  return (
    <BrowserRouter>
 
      <Routes>

        <Route path="/" Component={Inicio}/>
        <Route path="/contacto" Component={Contacto}/>
        <Route path="*" Component={NotFound}/>
        

      </Routes>

    </BrowserRouter>
  )
}

export default App
