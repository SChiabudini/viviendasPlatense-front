import Banner from './banner/Banner';
import CataloguePreview from './cataloguePreview/CataloguePreview';
import Services from './services/Services';
import Portfolio from './portfolio/Portfolio';

const Home = () => {
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