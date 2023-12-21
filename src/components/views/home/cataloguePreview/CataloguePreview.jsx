import style from './CataloguePreview.module.css';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CataloguePreview = () => {
  const { productsCopy } = useSelector((state) => state.products);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div className={style.div}>
      <h2>Modelos disponibles</h2>
      <Slider {...settings}>
        {productsCopy.map((product, index) => (
          <div key={index} className={style.slide}>
            <NavLink to={`/detail/${product._id}`}>
              <div className={style.image}>
                <div className={style.imageOverlay}></div>
                <img src={product.images[0]} alt={`Product ${index + 1}`} />
              </div>
              <div className={style.info}>
                <p className={style.title}>{product.size} {product.type}</p>
                <p className={style.price}>${product.price.toLocaleString()}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </Slider>
      <p className={style.toCatalogue}><NavLink to="/catalogo">Ver más modelos</NavLink></p>
    </div>
  );
};

export default CataloguePreview;
