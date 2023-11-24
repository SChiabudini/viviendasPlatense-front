import Banner from './banner/Banner';
import CataloguePreview from './cataloguePreview/CataloguePreview';
import Services from './services/Services';
import Portfolio from './portfolio/Portfolio';
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
            <Banner/>
            <CataloguePreview/>
            <Services/>
            <Portfolio/>
        </div>
    );
}

export default Home;