import Banner from './banner/Banner';
import CataloguePreview from './cataloguePreview/CataloguePreview';
import Services from './services/Services';
import Portfolio from './portfolio/Portfolio';
import whatsapp from './whatsapp.svg';
import style from './Home.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../../redux/productActions';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return(
        <div>
            <div className={style.whatsapp}><a href="https://wa.me/542216911442" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt=""/></a></div>
            <Banner/>
            <CataloguePreview/>
            <Services/>
            <Portfolio/>
        </div>
    );
}

export default Home;