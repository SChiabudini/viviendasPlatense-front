import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPortfolios } from "../../../../redux/portfolioActions";
import style from "./Portfolio.module.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

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

  const shuffledPortfolios = shuffleArray([...portfolios]);

  const groupedPortfolios = shuffledPortfolios.reduce(
    (acc, portfolio, index) => {
      const groupIndex = Math.floor(index / 4);
      acc[groupIndex] = acc[groupIndex] || [];
      acc[groupIndex].push(portfolio);
      return acc;
    },
    []
  );

  const limitedGroups = groupedPortfolios.slice(0, 2);

  return (
    <div className={style.div}>
      <h2>Trabajos realizados</h2>

      {limitedGroups.map((group, groupIndex) => (
        <div key={groupIndex} className={style.portfolioGroup}>
          {group.map((portfolio) => (
            <div key={portfolio._id} onClick={() => openModal(portfolio)} className={style.portfolio}>
              <div className={style.overlay}>
                <p>{portfolio.text}</p>
              </div>
              {portfolio.image && (
                <img src={portfolio.image} alt={portfolio.text} className={style.portfolioImg} />
              )}
              {portfolio.video && (
                <video autoPlay muted loop playsInline className={style.portfolioVideo}>
                  <source src={portfolio.video} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
      ))}

      {modalOpen && selectedPortfolio && (
        <div className={style.modal}>
            
          <div className={style.modalContent}>
     
            <p>{selectedPortfolio.text}</p>
            {selectedPortfolio.image && <img src={selectedPortfolio.image} alt={selectedPortfolio.text} />}
            {selectedPortfolio.video && (
              <video autoPlay loop playsInline>
                <source src={selectedPortfolio.video} type="video/mp4" />
              </video>
            )}
            <button onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
