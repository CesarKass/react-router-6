import { Link } from "react-router-dom";

export function Products({productsArr}) {

    return (
        <section>
            <h1>Products</h1>
            <ul>
                {
                    productsArr.map((product) => (
                        <li key={product.id}>
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                        </li>
                        )
                    )
                }
            </ul>
        </section>
    );
    
}