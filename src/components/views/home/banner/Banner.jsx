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
                                    <h3>TU CASA A SOLO</h3>
                                    <p className={style.price}>$3.990.000</p>
                                    <p className={style.text}>Base de hormigón de regalo<br/>para los primeros dos cupos</p>
                                    <p className={style.text}>Flete y armado bonificados</p>
                                    <p className={style.text}>OFERTA PAGANDO AL CONTADO</p>
                                    <p className={style.number}>
                                        <img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707175916/viviendasPlatense/resources/banners/1/pcnmetyslpoywjomfzrk.svg" alt=""/>
                                        <a href='https://wa.me/542216911442?text=Buenos%20d%C3%ADas,%20quisiera%20consultar%20por%20el%20modelo%20en%20promoci%C3%B3n.%20Muchas%20gracias.'>Envianos un WhatsApp </a>
                                        
                                    </p></div>
                                <div className={style.banner1render}><img  src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707175492/viviendasPlatense/houses/22%2C5%20Americana%20-%201%20Dormitorio/klrkfgs3029bkzq69kaz.jpg" alt="22,5 Americana - 1 Dormitorio - En promoción"/></div>
                            </>
                        ) : (
                            <>
                                <div className={style.banner1bg}><img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707175912/viviendasPlatense/resources/banners/1/qhz4yugxeko7llruidob.svg" alt=""/></div>
                                <div className={style.banner1render}><img  src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707175916/viviendasPlatense/resources/banners/1/xcmk0fsbkchbyfkbhbxp.jpg" alt="22,5 Americana - 1 Dormitorio - En promoción"/></div>
                                <div className={style.banner1logo}><img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707176376/viviendasPlatense/resources/g5nt2fvnza5laaikgp8a.svg" alt=""/></div>
                                <div className={style.banner1text}>
                                    <h3>TU CASA A SOLO</h3>
                                    <p className={style.price}>$3.990.000</p>
                                    <p className={style.text}>Base de hormigón de regalo<br/>para los primeros dos cupos</p>
                                    <p className={style.text}>Flete y armado bonificados</p>
                                    <p className={style.text}>OFERTA PAGANDO AL CONTADO</p>
                                    <p className={style.number}>
                                        <img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707175916/viviendasPlatense/resources/banners/1/pcnmetyslpoywjomfzrk.svg" alt=""/>
                                        <a href='https://wa.me/542216911442?text=Buenos%20d%C3%ADas,%20quisiera%20consultar%20por%20el%20modelo%20en%20promoci%C3%B3n.%20Muchas%20gracias.'>Envianos un WhatsApp </a>
                                        
                                    </p>
                                </div>
                            </>
                        )}
                    </div>

                    <div className={style.banner2}>
                        <div className={style.banner2bg}><img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707176309/viviendasPlatense/resources/banners/2/rzowvcdlyfkok5y46kfq.svg" alt=""/></div>
                        
                        {isMobile ? (
                            <div className={style.content}>
                                <div className={style.contentText}>
                                    <p className={style.textBlue}>Con la compra de tu casa<br/>colaborás con <a href="https://www.instagram.com/rescataditoslaplata/" target="_blank" rel="noopener noreferrer">Rescataditos La Plata</a></p>
                                    <div className={style.textBottom}>
                                        <p><span className={style.textRed}>Adoptá, no compres</span><br/>Tu hogar es mejor con una mascota</p>
                                        <p className={style.contentLogo}>
                                            <img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707176351/viviendasPlatense/resources/banners/2/w4cns1i6roh1ooiprus1.png" alt="Rescataditos La Plata"/>
                                            <img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707176350/viviendasPlatense/resources/banners/2/zxmez46ppqhpju4ngdqc.png" alt="Viviendas Platense"/>
                                        </p>
                                        
                                    </div>
                                </div>
                                <div className={style.contentImg}><img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707176313/viviendasPlatense/resources/banners/2/u9uuyrrcv0w9terdylwk.png" alt="Equipos de Viviendas Platense y Rescataditos La Plata"/></div>
                            </div>
                        ) : (
                            <div className={style.content}>
                                <div className={style.contentImg}><img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707176313/viviendasPlatense/resources/banners/2/u9uuyrrcv0w9terdylwk.png" alt="Equipos de Viviendas Platense y Rescataditos La Plata"/></div>
                                <div className={style.contentText}>
                                    <p className={style.textBlue}>Con la compra de tu casa<br/>colaborás con <a href="https://www.instagram.com/rescataditoslaplata/" target="_blank" rel="noopener noreferrer">Rescataditos La Plata</a></p>
                                    <div className={style.textBottom}>
                                        <p><span className={style.textRed}>Adoptá, no compres</span><br/>Tu hogar es mejor con una mascota</p>
                                        <p className={style.contentLogo}><img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707176351/viviendasPlatense/resources/banners/2/w4cns1i6roh1ooiprus1.png" alt="Rescataditos La Plata"/></p>
                                        <p className={style.contentLogo}><img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707176350/viviendasPlatense/resources/banners/2/zxmez46ppqhpju4ngdqc.png" alt="Viviendas Platense"/></p>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <div className={style.vector}><img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707176339/viviendasPlatense/resources/banners/2/u6trkzi3rxlvm7agfgsl.svg" alt=""/></div>
                    </div>

                    <div className={style.banner3}>
                        <NavLink to="/catalogo">
                            <div className={style.banner3bg}></div>
                            <div className={style.content}>
                                <h3>Viviendas Platense</h3>
                                <div className={style.images}>
                                    <div className={style.imageContainer}>
                                        <div className={style.imageOverlay}></div>
                                        <img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707175492/viviendasPlatense/houses/36%20Americana%20-%202%20Dormitorios/r3kt7g9hps5qn7dotmn3.jpg" alt="Modelo Americano"/>
                                        <p>Americana</p>
                                    </div>
                                    <div className={style.imageContainer}>
                                        <div className={style.imageOverlay}></div>
                                        <img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707175495/viviendasPlatense/houses/79%2C5%20Minimalista%20-%203%20Dormitorios/ba3pbg0gtxyiixhao2cs.jpg" alt="Modelo Minimalista"/>
                                        <p>Minimalista</p>
                                    </div>
                                    <div className={style.imageContainer}>
                                        <div className={style.imageOverlay}></div>
                                        <img src="https://res.cloudinary.com/dsmrctezd/image/upload/v1707175490/viviendasPlatense/houses/80%20Americana%20-%203%20Dormitorios/zlc8j9o20ka3ffasqlfn.jpg" alt="Modelo 2 Plantas"/>
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