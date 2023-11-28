import House from "./house/House";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../../redux/productActions";

const Catalogue = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const { products } = useSelector((state) => state.products);

    return(
        <div>
            {products.map(product => (
                <House
                    key={product._id}
                    id={product._id}
                    type={product.type}
                    size={product.size}
                    price={product.price}
                    image={product.image}
                />
            ))}
        </div>
    );
}

export default Catalogue;