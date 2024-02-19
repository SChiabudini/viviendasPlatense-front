// Home.jsx
import React, { useEffect, useState } from 'react';
import Banner from './banner/Banner';
import CataloguePreview from './cataloguePreview/CataloguePreview';
import Services from './services/Services';
import Portfolio from './portfolio/Portfolio';
import style from './Home.module.css';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../../redux/productActions';

const Home = () => {
    const dispatch = useDispatch();
    const [showIcons, setShowIcons] = useState(false);

    useEffect(() => {
        dispatch(getProducts());

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setShowIcons(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dispatch]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div className={`${style.icons} ${showIcons ? style.visible : ''}`}>
                <div onClick={scrollToTop} className={style.scrollToTop}>
                    <img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/arrow_up.svg" alt="Flecha hacia arriba" />
                </div>
                <div className={style.whatsapp}>
                    <a href="https://wa.me/542216911442" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/SChiabudini/viviendasPlatenseImg/main/resources/whatsapp.svg" alt="Comunicate con nosotros" />
                    </a>
                </div>
            </div>
           
            <Banner />
            <CataloguePreview />
            <Services />
            <Portfolio />
        </div>
    );
};

export default Home;
