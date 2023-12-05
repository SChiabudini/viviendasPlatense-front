import style from './House.module.css';
import { NavLink } from "react-router-dom";

const House = ({id, type, size, price, image, rooms}) => {
    return (
        <div className={style.div}>
            <NavLink to={`/detail/${id}`}>
                <div className={style.image}>
                    <img src={image} alt={type} />
                    <p>{size}</p>
                </div>
                <p>{type} - {rooms}</p>                
                <p className={style.price}>{price}</p>

            </NavLink>
        </div>
    )
}

export default House;