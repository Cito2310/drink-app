// IMPORTS
// React
import { useContext } from "react";

import { productsContext } from "../provider/productsProvider";

// components
import { CardProduct } from "./cardProduct";
import { CardNewProduct } from "../form-product-menu/cardNewProduct";

// css
import "./productGrid.css"


export const ProductGrid = () => {
    const { listProduct } = useContext(productsContext);

    return (
        <ul id="product-grid">
            {
            listProduct.loading 
            ? <h1 className="animate__animated animate__fadeIn">Cargando...</h1> 
            : <>
                {listProduct.products.map(product => <CardProduct key={product._id} product={product}/>)} 
                <CardNewProduct/>
            </>
            }
        </ul>
    )
}

