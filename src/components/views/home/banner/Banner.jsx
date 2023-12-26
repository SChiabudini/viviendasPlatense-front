import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import style from "./Banner.module.css";

const Banner = () => {
    return(
        <div className={style.banner}>
            <Carousel showThumbs={false} showStatus={false}>
                    <div className={style.banner1}>
                        <div className={style.banner1bg}><img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703522636/viviendasPlatense/resources/banners/1/jr5cnhbraavflsjjdnh9.svg" alt=""/></div>
                        <div className={style.banner1render}><img  src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703519379/viviendasPlatense/resources/banners/1/szsgpjraede7tltrz99f.jpg" alt="Casa disponible en promoción"/></div>
                        <div className={style.banner1logo}><img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703097726/viviendasPlatense/resources/runhzi5qcoiicsdtrfdv.svg" alt=""/></div>
                        <div className={style.banner1text}>
                            <h3>PROMO</h3>
                            <p className={style.price}>$50.000.000</p>
                            <p className={style.text}>Base de hormigón</p>
                            <p className={style.text}>Flete y armado</p>
                            <p className={style.number}><a href='https://wa.me/542216911442?text=Buenos%20d%C3%ADas,%20quisiera%20consultar%20por%20el%20modelo%20en%20promoci%C3%B3n.%20Muchas%20gracias.'>Envianos un WhatsApp</a></p>
                        </div>
                    </div>

                    <div className={style.banner2}>
                        <img src="" alt=""/>
                        <p>Div 2</p>
                    </div>

                    <div className={style.banner3}>
                        <img src="" alt=""/>
                        <p>Div 3</p>
                    </div>
            </Carousel>
        </div>
    );
}

export default Banner;