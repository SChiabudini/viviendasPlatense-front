import Nav from './nav/Nav';
import logoHeader from './logo-nav.svg';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <div className={style.div}>
            <div className={style.content}>
                <NavLink to="/"><h1><img src={logoHeader} alt="Viviendas Platense" title="Viviendas Platense - Construcciones Industrializadas"/></h1></NavLink>
                <div className={style.nav}><Nav/></div>
            </div>
        </div>
    );
}

export default Header;