import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '../../../../redux/productActions';
import { useState, useEffect } from 'react';
import style from "./Detail.module.css";
import { Carousel } from 'react-responsive-carousel';
import whatsapp from './whatsapp.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const { selectedProduct } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (selectedProduct) {
            setProduct(selectedProduct);
        }
    }, [selectedProduct]);

    const formattedPrice = product.price ? product.price.toLocaleString() : '';

    return (
        <div className={style.div}>
            <div className={style.carousel}>
                {product.images && product.images.length > 0 && (
                    <Carousel showThumbs={false} showStatus={false}>
                        {product.images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Product ${index + 1}`}/>
                            </div>
                        ))}
                    </Carousel>
                )}
            </div>

            <div className={style.info}>
                <h2>{product.type}</h2>
                <p>- {product.size} m<sup>2</sup></p>
                <p>- {product.rooms}</p>
                <p>- Descripción:</p>
                <ul className={style.ul}> 
                    {product.description?.map((description) => (
                        <li className={style.li}>{description}</li>
                    ))}
                </ul>
                <p className={style.price}>${formattedPrice} <span className={style.contado}>(contado)</span></p>
                <p className={style.whatsapp}><img src={whatsapp} alt=""/><a href="">Consultanos por este modelo</a></p>
                <p className={style.back}><NavLink to="/catalogo">Volver al catálogo</NavLink></p>
            </div>
        </div>
    );
};

export default Detail;
