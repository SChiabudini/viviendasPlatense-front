import style from './Services.module.css';

const Services = () => {
    return(
        <div className={style.div}>
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