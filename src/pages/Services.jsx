import { Link, Outlet } from "react-router-dom";

export function Services() {
    return <>
        <h1>Servicios</h1>
        <nav className="menu">
            <Link to="/services">Servicios</Link>
            <Link to="/services/list">Lista Servicios</Link>
            <Link to="/services/politic">Politicas Service</Link>
        </nav>
        <Outlet/>
    </>
}