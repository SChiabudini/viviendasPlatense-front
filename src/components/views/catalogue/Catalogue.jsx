import House from "./house/House";
import { useSelector } from "react-redux";

const Catalogue = () => {

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