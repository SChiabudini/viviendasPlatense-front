import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, getProductById } from '../../../../redux/productActions';
import { useState, useEffect } from 'react';
import style from "./Detail.module.css";
import { Carousel } from 'react-responsive-carousel';
import whatsapp from './whatsapp.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const { products, selectedProduct } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        if(products){
            
            dispatch(getProductById(id));
        }
    }, [dispatch, id, products]);

    useEffect(() => {
        if (selectedProduct) {
            setProduct(selectedProduct);
        }
    }, [selectedProduct]);

    const formattedPrice = product.price ? product.price.toLocaleString() : '';

    const whatsappMessage = `https://wa.me/542216911442?text=Buenos%20d%C3%ADas,%20quisiera%20consultar%20por%20el%20modelo%20${product.size + ' ' + product.type + ' ' + product.rooms},%20muchas%20gracias.`;

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
                <div className={style.infoContent}>
                    <div className={style.infoText}>
                        <p>- {product.size} m<sup>2</sup></p>
                        {product.rooms && <p>- {product.rooms}</p>}
                        <p>- Descripción:</p>
                        <ul className={style.ul}> 
                        {product.description?.map((description) => (
                            <li className={style.li}>{description}</li>
                        ))}
                        </ul>
                    </div>

                    <div className={style.infoButton}>
                        {product.type === 'Steel' ?
                            <p className={style.price}>USD {formattedPrice} <span className={style.contado}>(contado)</span></p>
                            : <p className={style.price}>${formattedPrice} <span className={style.contado}>(contado)</span></p>
                        }
                        <p className={style.whatsapp}><img src={whatsapp} alt=""/><a href={whatsappMessage} target="_blank" rel="noopener noreferrer">Consultanos por este modelo</a></p>
                        <p className={style.back}><NavLink to="/catalogo">Volver al catálogo</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
