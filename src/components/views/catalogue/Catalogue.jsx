import House from "./house/House";
import Filters from "./filters/Filters";
import style from "./Catalogue.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../../redux/productActions";

const Catalogue = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { productsCopy } = useSelector((state) => state.products);

    return(
        <div className={style.div}>

                <Filters/>
            
                <div className={style.cards}>
                    {productsCopy.map(product => (
                        <div className={style.card}>
                            <House
                                key={product._id}
                                id={product._id}
                                type={product.type}
                                size={product.size}
                                price={product.price}
                                image={product.images[0]}
                                rooms={product.rooms}
                            />
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default Catalogue;