import React, { useState, useEffect } from 'react';
import Nav from './nav/Nav';
import logoHeader from './logo-nav.svg';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 720);
        };

        // Attach event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures that this effect runs only once on mount

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
