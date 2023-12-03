import { NavLink, useLocation } from "react-router-dom";
import style from './Nav.module.css';

const Nav = () => {
    const location = useLocation();

    return (
        <div className={style.div}>
            <NavLink
                className={`${style.NavLink} ${location.pathname === '/' ? style.selected : ''}`}
                to="/"
            >
                Inicio
            </NavLink>
            <NavLink
                className={`${style.NavLink} ${location.pathname === '/catalogo' ? style.selected : ''}`}
                to="/catalogo"
            >
                Catálogo de viviendas
            </NavLink>
            <NavLink
                className={`${style.NavLink} ${location.pathname === '/contacto' ? style.selected : ''}`}
                to="/contacto"
            >
                Contacto
            </NavLink>
        </div>
    );
}

export default Nav;
