import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState, useEffect } from 'react';
import style from "./Banner.module.css";
import { NavLink } from 'react-router-dom';

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
            <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={1000} swipeable={!isMobile}>

                    <div className={style.banner1}>
                        {isMobile ? (
                            <>
                                <div className={style.banner1text}>                                    
                                    <h3>PROMO ESPECIAL</h3>
                                    <p className={style.price}>15% OFF</p>
                                    <p className={style.text}>Base de hormigón de regalo<br/>para los primeros dos cupos</p>
                                    <p className={style.text}>Flete y armado bonificados</p>
                                    <p className={style.text}>OFERTA PAGANDO AL CONTADO</p>
                                    <p className={style.number}>
                                        <img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/banners/1/whatsapp.svg" alt=""/>
                                        <a href='https://wa.me/542216911442?text=Buenos%20d%C3%ADas,%20quisiera%20consultar%20por%20el%20modelo%20en%20promoci%C3%B3n.%20Muchas%20gracias.'>Envianos un WhatsApp </a>
                                        
                                    </p></div>
                                <div className={style.banner1render}><img  src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/banners/1/banner_1_img.jpg" alt="22,5 Americana - 1 Dormitorio - En promoción"/></div>
                            </>
                        ) : (
                            <>
                                <div className={style.banner1bg}><img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/banners/1/banner_1_bg.svg" alt=""/></div>
                                <div className={style.banner1render}><img  src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/banners/1/banner_1_img.jpg" alt="22,5 Americana - 1 Dormitorio - En promoción"/></div>
                                <div className={style.banner1logo}><img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/logo.svg" alt=""/></div>
                                <div className={style.banner1text}>
                                    <h3>PROMO ESPECIAL</h3>
                                    <p className={style.price}>15% OFF</p>
                                    <p className={style.text}>Antes <span className={style.textPrice}>$4.386.000</span></p>
                                    <p className={style.text}>Ahora <span className={style.textPrice}>$3.728.000</span></p>
                                    <p className={style.text}>Flete y armado bonificados</p>
                                    <p className={style.text}>OFERTA PAGANDO AL CONTADO</p>
                                    <p className={style.number}>
                                        <img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/banners/1/whatsapp.svg" alt=""/>
                                        <a href='https://wa.me/542216911442?text=Buenos%20d%C3%ADas,%20quisiera%20consultar%20por%20el%20modelo%20en%20promoci%C3%B3n.%20Muchas%20gracias.'>Envianos un WhatsApp </a>
                                        
                                    </p>
                                </div>
                            </>
                        )}
                    </div>

                    <div className={style.banner2}>
                        <div className={style.banner2bg}><img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/banners/2/banner_2%20_bg.svg" alt=""/></div>
                        
                        {isMobile ? (
                            <div className={style.content}>
                                <div className={style.contentText}>
                                    <p className={style.textBlue}>Con la compra de tu casa<br/>colaborás con <a href="https://www.instagram.com/rescataditoslaplata/" target="_blank" rel="noopener noreferrer">Rescataditos La Plata</a></p>
                                    <div className={style.textBottom}>
                                        <p><span className={style.textRed}>Adoptá, no compres</span><br/>Tu hogar es mejor con una mascota</p>
                                        <p className={style.contentLogo}>
                                            <img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/banners/2/logo_rescataditos_borde-05.png" alt="Rescataditos La Plata"/>
                                            <img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/banners/2/logo_viviendas_borde-05.png" alt="Viviendas Platense"/>
                                        </p>
                                        
                                    </div>
                                </div>
                                <div className={style.contentImg}><img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/banners/2/banner_2_img.png" alt="Equipos de Viviendas Platense y Rescataditos La Plata"/></div>
                            </div>
                        ) : (
                            <div className={style.content}>
                                <div className={style.contentImg}><img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/banners/2/banner_2_img.png" alt="Equipos de Viviendas Platense y Rescataditos La Plata"/></div>
                                <div className={style.contentText}>
                                    <p className={style.textBlue}>Con la compra de tu casa<br/>colaborás con <a href="https://www.instagram.com/rescataditoslaplata/" target="_blank" rel="noopener noreferrer">Rescataditos La Plata</a></p>
                                    <div className={style.textBottom}>
                                        <p><span className={style.textRed}>Adoptá, no compres</span><br/>Tu hogar es mejor con una mascota</p>
                                        <p className={style.contentLogo}><img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/banners/2/logo_rescataditos_borde-05.png" alt="Rescataditos La Plata"/></p>
                                        <p className={style.contentLogo}><img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/banners/2/logo_viviendas_borde-05.png" alt="Viviendas Platense"/></p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <div className={style.vector}><img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/f8dd4d0d7d94bd3c3bd80680d8a1a53f8dd52123/resources/banners/2/banner_2_vector.svg" alt=""/></div>
                    </div>

                    <div className={style.banner3}>
                        <NavLink to="/catalogo">
                            <div className={style.banner3bg}></div>
                            <div className={style.content}>
                                <h3>Viviendas Platense</h3>
                                <div className={style.images}>
                                    <div className={style.imageContainer}>
                                        <div className={style.imageOverlay}></div>
                                        <img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/catalogue/36%20Americana%20-%202%20Dormitorios/1.jpg" alt="Modelo Americano"/>
                                        <p>Americana</p>
                                    </div>
                                    <div className={style.imageContainer}>
                                        <div className={style.imageOverlay}></div>
                                        <img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/catalogue/79%2C5%20Minimalista%20-%203%20Dormitorios/1.jpg" alt="Modelo Minimalista"/>
                                        <p>Minimalista</p>
                                    </div>
                                    <div className={style.imageContainer}>
                                        <div className={style.imageOverlay}></div>
                                        <img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/catalogue/80%20Americana%20-%203%20Dormitorios/1.jpg" alt="Modelo 2 Plantas"/>
                                        <p>2 Plantas</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>  
                    </div>
            </Carousel>
        </div>
    );
}

export default Banner;