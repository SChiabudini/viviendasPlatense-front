import style from './Info.module.css';
import adress from './icons/adress.svg';
import email from './icons/email.svg';
import facebook from './icons/facebook.svg';
import instagram from './icons/instagram.svg';
import number from './icons/number.svg';

const Info = () => {
    return(
        <div className={style.div}>
            <iframe className={style.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.2112300935228!2d-58.02558228927627!3d-34.90114827273578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2dd5d3a68e2c5%3A0x3b68d15af2dd7985!2sViviendas%20platense!5e0!3m2!1ses!2sar!4v1701115483486!5m2!1ses!2sar" width="100%" height="415px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Viviendas Platense - Ubicación"></iframe>
            <p><img src={adress} alt=""/><a href="https://maps.app.goo.gl/HevXDknzFtnASUek6">Av. 31 esq. 506 - Paseo Gonnet</a></p>
            <p><img src={number} alt=""/><a href="">(221) 691-1442</a></p>
            <p><img src={email} alt=""/><a href="mailto:viviendasplatense@gmail.com">viviendasplatense@gmail.com</a></p>
            <p><img src={instagram} alt=""/><a href="https://www.instagram.com/viviendasplatense/">/viviendasplatense</a></p>
            <p><img src={facebook} alt=""/><a href="https://www.facebook.com/platenseconstrucciones">Viviendas Platense Construcciones Industrializadas</a></p>
        </div>
    )
}

export default Info;