import style from './Footer.module.css';
import adress from './icons/adress.svg';
import email from './icons/email.svg';
import facebook from './icons/facebook.svg';
import instagram from './icons/instagram.svg';
import number from './icons/number.svg';

const Footer = () => {
    return(
        <div className={style.div}>
            <div className={style.content}>
                <h2>Viviendas Platense</h2>
                <div className={style.links}>
                    <div className={style.column}>
                        <p><img src={adress} alt=""/><a href="https://maps.app.goo.gl/HevXDknzFtnASUek6" target="_blank" rel="noopener noreferrer">Av. 31 esq. 506 - Paseo Gonnet</a></p>
                        <p><img src={number} alt=""/><a href="https://wa.me/542216911442" target="_blank" rel="noopener noreferrer">(221) 691-1442</a></p>
                        <p><img src={email} alt=""/><a href="mailto:viviendasplatense@gmail.com" target="_blank" rel="noopener noreferrer">viviendasplatense@gmail.com</a></p>
                    </div>
                    <div className={style.column}>
                        <p><img src={instagram} alt=""/><a href="https://www.instagram.com/viviendasplatense/" target="_blank" rel="noopener noreferrer">/viviendasplatense</a></p>
                        <p><img src={facebook} alt=""/><a href="https://www.facebook.com/platenseconstrucciones" target="_blank" rel="noopener noreferrer">Viviendas Platense Construcciones Industrializadas</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;