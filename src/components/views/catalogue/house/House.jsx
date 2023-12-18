import style from './House.module.css';
import { NavLink } from "react-router-dom";

const House = ({ id, type, size, price, image, rooms }) => {

    const formattedPrice = price.toLocaleString();

    return (
        <div className={style.div}>
            <NavLink className={style.link} to={`/detail/${id}`}>
                <div className={style.image}>
                    <img src={image} alt={type} />
                    <div className={style.size}><p>{size} m<sup>2</sup></p></div>
                </div>
                <p className={style.title}>{size} {type} - {rooms}</p>
                <p className={style.price}>${formattedPrice}</p>
            </NavLink>
        </div>
    );
}

export default House;
