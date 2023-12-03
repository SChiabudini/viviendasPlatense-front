import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from '../../../../redux/productActions';
import { useState, useEffect } from 'react';
import style from "./Detail.module.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState({});
    const { selectedProduct } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(getProductById(id));
        setProduct(selectedProduct);
    }, [dispatch, id, selectedProduct]);

    return (
        <div>
            <div>
                {product.images && product.images.length > 0 && (
                    <Carousel showThumbs={false} showStatus={false}>
                        {product.images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`Product ${index + 1}`} />
                            </div>
                        ))}
                    </Carousel>
                )}
            </div>

            <div>
                <h2>{product.type}</h2>
                <p>- {product.size} m<sup>2</sup></p>
                <p>- {product.rooms}</p>
                <p>{product.price}</p>
                <NavLink to="/catalogo">Volver al catálogo</NavLink>
            </div>
        </div>
    );
};

export default Detail;
