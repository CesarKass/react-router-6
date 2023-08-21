import { useParams, useNavigate } from "react-router-dom";

export function Product({productsArr}) {

    function handleGoBack() {
        navigate(-1)
    }

    const navigate = useNavigate();
    const {id} = useParams();
    const product = productsArr.find(product => product.id.toString() === id )

    return (
        <section>
            <h2>Producto: {product.name}</h2>
            <table border={1} width={"100%"}>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Nombre</td>
                        <td>Precio</td> 
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                    </tr>
                </tbody>
            </table>
            <button type="button" onClick={handleGoBack}>Back</button>
        </section>
    );
    
}