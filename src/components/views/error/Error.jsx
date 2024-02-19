import { NavLink } from 'react-router-dom';
import style from './Error.module.css';

const Error = () => {
    return(
        <div className={style.div}>
            <p>ERROR 404</p>
            <p className={style.second}>Página no encontrada</p>
            <div className={style.image}><img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/logo.svg?token=GHSAT0AAAAAACLSR46ZKFG7465CNYYCSJ6SZOTPMLA" alt="Viviendas Platense"/></div>
            <NavLink to="/">Volver</NavLink>
        </div>
    );
}

export default Error;