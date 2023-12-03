import style from './House.module.css';
import { NavLink } from "react-router-dom";

const House = ({id, type, size, price, image, rooms}) => {
    return (
        <div className={style.div}>
            <img src={image} alt={type} />
            <NavLink to={`/detail/${id}`}>{type}</NavLink>
            <p>{size}</p>
            <p>{price}</p>
            <p>{rooms}</p>
        </div>
    )
}

export default House;