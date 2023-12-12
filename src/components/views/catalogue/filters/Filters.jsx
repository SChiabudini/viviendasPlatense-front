import { useSelector, useDispatch } from "react-redux";
import { filterByRooms, filterByType, orderByPrice, orderBySize } from "../../../../redux/productActions";
import style from './Filters.module.css';

const Filters = () => {

    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);

    const uniqueTypes = [...new Set(products.map((product) => product.type))];
    const uniqueRooms = [...new Set(products.map((product) => product.rooms))];
    
    const handleFilterType = (event) => {
        dispatch(filterByType(event.target.value));
    }
    const handleFilterRooms = (event) => {
        dispatch(filterByRooms(event.target.value));
    }
    const handleOrderSize = (event) => {
        dispatch(orderBySize(event.target.value));
    }
    const handleOrderPrice = (event) => {
        dispatch(orderByPrice(event.target.value));
    }
    
    return(
        <div className={style.div}>
            <div className={style.filter}>
                <p>Filtrar por tipo:</p>
                <select onChange={handleFilterType}>
                    <option value="allTypes">Todos los tipos</option>
                    {uniqueTypes.map((type) => (
                        <option value={type} key={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            <div className={style.filter}>
                <p>Filtrar por habitaciones:</p>
                <select onChange={handleFilterRooms}>
                    <option value="allRooms">Todos las opciones</option>
                    {uniqueRooms.map((rooms) => (
                        <option value={rooms} key={rooms}>
                            {rooms}
                        </option>
                    ))}
                </select>
            </div>

            <div className={style.filter}>
                <p>Ordenar por precio:</p>
                <select onChange={handleOrderPrice}>
                    <option value="">Seleccionar orden</option>
                    <option value="A">Menor precio</option>
                    <option value="B">Mayor precio</option>
                </select>
            </div>

            <div className={style.filter}>
                <p>Ordenar por m2:</p>
                <select onChange={handleOrderSize}>
                    <option value="">Seleccionar orden</option>
                    <option value="A">Menor tamaño</option>
                    <option value="B">Mayor tamaño</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;