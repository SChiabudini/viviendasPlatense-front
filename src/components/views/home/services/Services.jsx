import style from './Services.module.css';
import { useState, useEffect } from 'react';

const Services = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 720);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 720);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className={style.div}>
            {isMobile ? (
                <div className={style.bgImg}><img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707176536/viviendasPlatense/resources/t9dhmnslbg4psxs0c4td.jpg" alt=""/></div>
            ) : (
                <div className={style.bgImg}><img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707176442/viviendasPlatense/resources/imt7yrxb7bojgathtqas.jpg" alt=""/></div>
            )}
        
            <div className={style.content}>
                <div className={style.image}><img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707176376/viviendasPlatense/resources/g5nt2fvnza5laaikgp8a.svg" alt="Viviendas Platense"/></div>
                <div className={style.info}>
                    <h2>Servicios</h2>
                    <p>DISEÑOS PERSONALIZADOS</p>
                    <p>ASESORAMIENTO EN TERMINACIONES</p>
                    <p>MODIFICACIÓN DE MODELOS EXISTENTES</p>
                    <p>ASESORAMIENTO DE TERRENOS</p>
                </div>
            </div>
        </div>
    );
}

export default Services;