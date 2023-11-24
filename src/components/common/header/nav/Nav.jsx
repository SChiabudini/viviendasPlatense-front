import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
        <div>
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/catalogo">Catálogo de viviendas</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
        </div>
    );
}

export default Nav;