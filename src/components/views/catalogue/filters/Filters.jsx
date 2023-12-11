import { useSelector, useDispatch } from "react-redux";
import { filterByRooms, filterByType, orderByPrice, orderBySize } from "../../../../redux/productActions";

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
        <div>
            <select onChange={handleFilterType}>
                <option value="allTypes">Filtrar por tipo</option>
                {uniqueTypes.map((type) => (
                    <option value={type} key={type}>
                        {type}
                    </option>
                ))}
                <option value="allTypes">Todos los tipos</option>
            </select>

            <select onChange={handleFilterRooms}>
                <option value="allRooms">Filtrar por habitaciones</option>
                {uniqueRooms.map((rooms) => (
                    <option value={rooms} key={rooms}>
                        {rooms}
                    </option>
                ))}
                <option value="allRooms">Todos las opciones</option>
            </select>

            <select onChange={handleOrderPrice}>
                <option value="">Ordenar por precio</option>
                <option value="A">Menor precio</option>
                <option value="B">Mayor precio</option>
            </select>

            <select onChange={handleOrderSize}>
                <option value="">Ordenar por m2</option>
                <option value="A">Menor tamaño</option>
                <option value="B">Mayor tamaño</option>
            </select>

        </div>
    )
}

export default Filters;