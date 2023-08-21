import { Link } from "react-router-dom";

export function ServicesList({ServoceArr}) { 
    return (
        <>
            <h1>Lista de Servicios</h1>
            <ul>
                {
                    ServoceArr.map((service) => (
                        <li key={service.id}>
                            <Link to={`/services/${service.id}`}>{service.name}</Link>
                        </li>
                        )
                    )
                }
            </ul>
            
        </>
        );
}