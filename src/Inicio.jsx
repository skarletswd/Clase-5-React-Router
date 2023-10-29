import { Link } from "react-router-dom";
import Nav from "./Nav";

function Inicio() {
    return (
        <>
            <Nav />
            <h1>Pagina Inicial</h1>

            <ul>
                <li>
                    <Link to="/user/1">Usuario 1</Link>
                </li>
                <li>
                    <Link to="/user/3">Usuario 3</Link>
                </li>
            </ul>
        </>
    )
}

export default Inicio;