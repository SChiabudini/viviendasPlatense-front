//import styles from './House.module.css';
import { NavLink } from "react-router-dom";

const House = ({id, type, size, price, image}) => {
    return (
        <div>
            <img src={image} alt={type} />
            <NavLink to={`/detail/${id}`}>{type}</NavLink>
            <p>{size}</p>
            <p>{price}</p>
        </div>
    )
}

export default House;