import { useParams } from "react-router-dom";

function ProductosDetail() {

    const { id } = useParams();

    return (
        <>
            <h1>ProductosDetail {id}</h1>
        </>
    );
}

export default ProductosDetail;