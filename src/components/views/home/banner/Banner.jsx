import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState, useEffect } from 'react';
import style from "./Banner.module.css";

const Banner = () => {

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
        <div className={style.banner}>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={false} interval={5000} transitionTime={1000}>

                    <div className={style.banner1}>
                        <div className={style.banner1bg}><img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703522636/viviendasPlatense/resources/banners/1/jr5cnhbraavflsjjdnh9.svg" alt=""/></div>
                        <div className={style.banner1render}><img  src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1705327509/viviendasPlatense/houses/78%20Minimalista%20-%202%20Dormitorios/fc9i6cbzsaydx0jwf0fx.jpg" alt="Casa disponible en promoción"/></div>
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
                        <div className={style.banner2bg}><img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703695382/viviendasPlatense/resources/banners/2/be2uo8rfazjpp0ym0sih.svg" alt=""/></div>
                        
                        {isMobile ? (
                            <div className={style.content}>
                                <div className={style.contentText}>
                                    <p className={style.textBlue}>Con la compra de tu casa<br/>colaborás con <a href="https://www.instagram.com/rescataditoslaplata/" target="_blank" rel="noopener noreferrer">Rescataditos La Plata</a></p>
                                    <div className={style.textBottom}>
                                        <p><span className={style.textRed}>Adoptá, no compres</span><br/>Tu hogar es mejor con una mascota</p>
                                        <p className={style.contentLogo}>
                                            <img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703785028/viviendasPlatense/resources/banners/2/nthm8p4xal6a9nbqjzdu.png" alt="Rescataditos La Plata"/>
                                            <img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703785028/viviendasPlatense/resources/banners/2/xhdsjdxjdtzdzb6iflth.png" alt="Viviendas Platense"/>
                                        </p>
                                        
                                    </div>
                                </div>
                                <div className={style.contentImg}><img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703695383/viviendasPlatense/resources/banners/2/kv8l0ykuah3logoerzqb.png" alt="Equipos de Viviendas Platense y Rescataditos La Plata"/></div>
                            </div>
                        ) : (
                            <div className={style.content}>
                                <div className={style.contentImg}><img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703695383/viviendasPlatense/resources/banners/2/kv8l0ykuah3logoerzqb.png" alt="Equipos de Viviendas Platense y Rescataditos La Plata"/></div>
                                <div className={style.contentText}>
                                    <p className={style.textBlue}>Con la compra de tu casa<br/>colaborás con <a href="https://www.instagram.com/rescataditoslaplata/" target="_blank" rel="noopener noreferrer">Rescataditos La Plata</a></p>
                                    <div className={style.textBottom}>
                                        <p><span className={style.textRed}>Adoptá, no compres</span><br/>Tu hogar es mejor con una mascota</p>
                                        <p className={style.contentLogo}><img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703785028/viviendasPlatense/resources/banners/2/nthm8p4xal6a9nbqjzdu.png" alt="Rescataditos La Plata"/></p>
                                        <p className={style.contentLogo}><img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703785028/viviendasPlatense/resources/banners/2/xhdsjdxjdtzdzb6iflth.png" alt="Viviendas Platense"/></p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <div className={style.vector}><img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1703695384/viviendasPlatense/resources/banners/2/hrc5kn33yg8jnfvnlhr6.svg" alt=""/></div>
                    </div>

                    <div className={style.banner3}>
                        <div className={style.banner3bg}></div>
                        <div className={style.content}>
                            <h3>Viviendas Platense</h3>
                            <div className={style.images}>
                                <div className={style.imageContainer}>
                                    <div className={style.imageOverlay}></div>
                                    <img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1705326249/viviendasPlatense/houses/36%20Americana%20-%202%20Dormitorios/llnxhiy8wdvswnhvy7dk.jpg" alt="Modelo Americano"/>
                                    <p>Americana</p>
                                </div>
                                <div className={style.imageContainer}>
                                    <div className={style.imageOverlay}></div>
                                    <img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1705327817/viviendasPlatense/houses/79%2C5%20Minimalista%20-%203%20Dormitorios/mjfc1n6gaj9xtxkse7fu.jpg" alt="Modelo Minimalista"/>
                                    <p>Minimalista</p>
                                </div>
                                <div className={style.imageContainer}>
                                    <div className={style.imageOverlay}></div>
                                    <img src="https://res.cloudinary.com/dwemuzjbb/image/upload/v1705328130/viviendasPlatense/houses/80%20Americana%20-%203%20Dormitorios/sbmd46nl0dxoxvwnrqyz.jpg" alt="Modelo 2 Plantas"/>
                                    <p>2 Plantas</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </Carousel>
        </div>
    );
}

export default Banner;