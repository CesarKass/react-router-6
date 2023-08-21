import { Link, NavLink } from 'react-router-dom'
export function Menu() {

    return (
        <> 
        <nav className="menu">
          <NavLink className={({isActive})=>isActive ? "active-link" : null} to="/">Inicio</NavLink>
          <NavLink className={({isActive})=>isActive ? "active-link" : null} to="/about">Acerca</NavLink>
          <NavLink className={({isActive})=>isActive ? "active-link" : null} to="/contact">Contacto</NavLink>
          <NavLink className={({isActive})=>isActive ? "active-link" : null} to="/redirigir">Redirigir Pagina</NavLink>
          <NavLink className={({isActive})=>isActive ? "active-link" : null} to="/products">Productos</NavLink>
          <NavLink className={({isActive})=>isActive ? "active-link" : null} to="/services">Servicios</NavLink>
        </nav>
        </>
    );
}