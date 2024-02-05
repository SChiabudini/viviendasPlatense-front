import { NavLink } from 'react-router-dom';
import style from './Error.module.css';

const Error = () => {
    return(
        <div className={style.div}>
            <p>ERROR 404</p>
            <p className={style.second}>Página no encontrada</p>
            <div className={style.image}><img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707176376/viviendasPlatense/resources/g5nt2fvnza5laaikgp8a.svg" alt="Viviendas Platense"/></div>
            <NavLink to="/">Volver</NavLink>
        </div>
    );
}

export default Error;