import { useContext } from "react";
import { productsContext } from "../provider/productsProvider";

import { CardProduct } from "../product-screen/cardProduct";

export const OnlyNeedMenu = () => {
    const { listProduct } = useContext(productsContext);
    const selectProducts = listProduct.products.filter(product => {
        if (product.amount !== 0) {return product}
    })

    return (
        <ul id="product-grid">
            {
                (listProduct.loading) ? <h1 className="animate__animated animate__fadeIn">Cargando...</h1> :
                (selectProducts.length)
                ? selectProducts.map(product => <CardProduct key={product._id} product={product}/>)
                : <h1 style={{textAlign:"center"}} className="animate__animated animate__fadeIn">No se encontro ningun producto seleccionado</h1> 
            }
        </ul>
    )
}
