import { createContext, useState, useEffect  } from "react";
import axios from 'axios';
import { orderArrayProduct } from "./orderArrayProduct";


export const productsContext = createContext();
export const ProductsProvider = ({children}) => {
    // INITIALIZATION
    const [listProduct, setListProduct] = useState({
        loading: true,
        products: [],
        countRequest: 0,
        order: "location",
    })

    useEffect(()=>{
        setListProduct({...listProduct, loading: true})
        axios.get("https://drink-freeze.herokuapp.com/api/product/?limit=200")
            .then(resp => {setListProduct({
                ...listProduct,
                products: orderArrayProduct(resp.data, listProduct.order), 
                loading: false
            })});
    },[listProduct.countRequest]);


    // CONTROLLERS
    const onUpdateRequest = () => {setListProduct({
        ...listProduct, 
        countRequest: listProduct.countRequest + 1
    })};

    const onSetOrder = ( newOrder ) => {setListProduct({
        ...listProduct, 
        order: newOrder,
        countRequest: listProduct.countRequest + 1
    })};
    
    return (
        <productsContext.Provider value={{ listProduct, onUpdateRequest, onSetOrder }}>
            {children}
        </productsContext.Provider>
    )
}