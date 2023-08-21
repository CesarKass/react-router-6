import { useParams, useNavigate } from "react-router-dom";

export function Service({ServoceArr}) {
 

    const navigate = useNavigate();
    const {id} = useParams();
    const service = ServoceArr.find(service => service.id.toString() === id )

    return (
        <section>
            <h2>Servicio: {service.name}</h2>
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
                        <td>{service.id}</td>
                        <td>{service.name}</td>
                        <td>${service.price}</td>
                    </tr>
                </tbody>
            </table> 
        </section>
    );
    
}