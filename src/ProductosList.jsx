import { Link } from "react-router-dom";

function ProductosList() {
    return (
        <>
            <h1>ProductosList</h1>

            <ul>
                <li>
                    <Link to="/productos/3">Producto 3</Link>
                </li>
                <li>
                    <Link to="/productos/7">Producto 7</Link>
                </li>
            </ul>
        </>
    );
}

export default ProductosList;