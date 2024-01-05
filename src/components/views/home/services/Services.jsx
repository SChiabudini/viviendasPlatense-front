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
                <div className={style.bgImg}><img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1704494370/viviendasPlatense/resources/jl7v8gjahudyfqfw0mli.jpg" alt=""/></div>
            ) : (
                <div className={style.bgImg}><img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703097578/viviendasPlatense/resources/ggezzfw4fnmswbgcxpxb.jpg" alt=""/></div>
            )}
        
            <div className={style.content}>
                <div className={style.image}><img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703097726/viviendasPlatense/resources/runhzi5qcoiicsdtrfdv.svg" alt="Viviendas Platense"/></div>
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