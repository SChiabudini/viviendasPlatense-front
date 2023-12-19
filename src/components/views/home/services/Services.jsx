import style from './Services.module.css';
import logo from './logoServicios.svg';

const Services = () => {
    return(
        <div className={style.div}>
            <div className={style.content}>
                <div className={style.image}><img src={logo} alt="Viviendas Platense"/></div>
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