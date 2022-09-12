import { useContext } from "react";
import { productsContext } from "../provider/productsProvider";


export const OrderMenu = () => {
    const {onSetOrder , listProduct} = useContext(productsContext)
    
    return (
    <>
        <button  
            onClick={() => onSetOrder("name")}
            className={(listProduct.order === "name") ? "orderSelect orderBtn" : "orderBtn"}>
            
            Nombre
        </button>

        <button 
            onClick={() => onSetOrder("brand")}
            className={(listProduct.order === "brand") ? "orderSelect orderBtn" : "orderBtn"}>

            Marca
        </button>

        <button 
            onClick={() => onSetOrder("category")}
            className={(listProduct.order === "category") ? "orderSelect orderBtn" : "orderBtn"}>

            Categoria
        </button>

        <button 
            onClick={() => onSetOrder("location")}
            className={(listProduct.order === "location") ? "orderSelect orderBtn lastBtnSideBar" : "orderBtn lastBtnSideBar"}>

            Ubicacion
        </button>
    </>
)}