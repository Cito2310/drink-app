import { useContext } from "react";
import { productsContext } from "../provider/productsProvider";
import { menusContext } from "../provider/menusProvider";

export const OrderMenu = () => {
    const {onSetOrder , listProduct , onUpdateRequest} = useContext(productsContext)
    const {menus , onSetMenuOnlyNeed , onSetMenuProduct} = useContext(menusContext)
    
    return (
    <>
        <button  
            onClick={() => {if(!listProduct.loading && listProduct.order !== "name"){onSetOrder("name")}}}
            className={(listProduct.order === "name") ? "orderSelect orderBtn" : "orderBtn"}>
            
            Nombre
        </button>

        <button 
            onClick={() => {if(!listProduct.loading && listProduct.order !== "brand"){onSetOrder("brand")}}}
            className={(listProduct.order === "brand") ? "orderSelect orderBtn" : "orderBtn"}>

            Marca
        </button>

        <button 
            onClick={() => {if(!listProduct.loading && listProduct.order !== "category"){onSetOrder("category")}}}
            className={(listProduct.order === "category") ? "orderSelect orderBtn" : "orderBtn"}>

            Categoria
        </button>

        <button 
            onClick={() => {if(!listProduct.loading && listProduct.order !== "location"){onSetOrder("location")}}}
            className={(listProduct.order === "location") ? "orderSelect orderBtn lastBtnSideBar" : "orderBtn lastBtnSideBar"}>

            Ubicacion
        </button>



        <hr />



        <button 
            onClick={() => {if(!listProduct.loading && menus.menu !== "")  {onSetMenuProduct(); onUpdateRequest()}}}
            className={(menus.menu === "") ? "orderSelect orderBtn lastBtnSideBar" : "orderBtn lastBtnSideBar"}>

            Lista de productos
        </button>

        <button 
            onClick={() => {if(!listProduct.loading && menus.menu !== "onlyneed")  {onSetMenuOnlyNeed(); onUpdateRequest()}}}
            className={(menus.menu === "onlyneed") ? "orderSelect orderBtn lastBtnSideBar" : "orderBtn lastBtnSideBar"}>

            Productos seleccionados
        </button>

    </>
)}