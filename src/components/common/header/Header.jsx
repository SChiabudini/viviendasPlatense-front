import React, { useState } from 'react';
import Nav from './nav/Nav';
import logoHeader from './logo-nav.svg';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    let isMobile = window.innerWidth <= 720;

    return (
        <div>
            {isMobile ? (
                <div className={style.div}>
                    <div className={style.content}>
                        <NavLink to="/">
                            <h1><img src={logoHeader} alt="Viviendas Platense" title="Viviendas Platense - Construcciones Industrializadas" /></h1>
                        </NavLink>
                        <div className={style.mobileMenu} onClick={toggleMenu}>
                            <div className={style.bar}></div>
                            <div className={style.bar}></div>
                            <div className={style.bar}></div>
                        </div>
                    </div>
                    {menuOpen ? (
                        <div className={style.nav}><Nav /></div>
                    ) : (
                        <div></div>
                    )}
                </div>
            ) : (
                <div className={style.div}>
                    <div className={style.content}>
                        <NavLink to="/">
                            <h1><img src={logoHeader} alt="Viviendas Platense" title="Viviendas Platense - Construcciones Industrializadas" /></h1>
                        </NavLink>
                        <div className={style.nav}><Nav /></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
