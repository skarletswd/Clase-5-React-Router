import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./Inicio"
import Contacto from "./Contacto"
import NotFound from "./NotFound"
import User from "./User"

function App() {

  return (
    <BrowserRouter>
 
      <Routes>

        <Route path="/" Component={Inicio}/>
        
        <Route path="/contacto" Component={Contacto}/>

        <Route path="/user/:id" Component={User}/>

        <Route path="*" Component={NotFound}/>
        

      </Routes>

    </BrowserRouter>
  )
}

export default App
