import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPortfolios } from "../../../../redux/portfolioActions";
import style from "./Portfolio.module.css";

const Portfolio = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPortfolios());
    }, [dispatch]);

    const { portfolios } = useSelector((state) => state.portfolios);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPortfolio, setSelectedPortfolio] = useState(null);

    const openModal = (portfolio) => {
        setSelectedPortfolio(portfolio);
        setModalOpen(true);
    };
    
    const closeModal = () => {
        setSelectedPortfolio(null);
        setModalOpen(false);
    };
    
    return(
        <div>
            {portfolios.map(portfolio => (
                <div key={portfolio._id} onClick={() => openModal(portfolio)}>
                        {portfolio.image && <img src={portfolio.image} alt={portfolio.text}/>}
                        {portfolio.video && <video autoPlay muted loop playsInline>
                            <source src={portfolio.video} type="video/mp4" />
                        </video>}
                        <p>{portfolio.text}</p>
                </div>
            ))}

        {modalOpen && selectedPortfolio && (
            <div className={style.modal}>
                <div className={style.modalContent}>
                    {selectedPortfolio.image && <img src={selectedPortfolio.image} alt={selectedPortfolio.text} />}
                    {selectedPortfolio.video && <video autoPlay muted loop playsInline>
                        <source src={selectedPortfolio.video} type="video/mp4" />
                    </video>}
                    <p>{selectedPortfolio.text}</p>
                    <button onClick={closeModal}>Cerrar</button>
                </div>
            </div>
        )}
        </div>
    );
}

export default Portfolio;