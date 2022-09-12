import { useContext } from "react";
import { menusContext } from "../provider/menusProvider";

export const CardNewProduct = () => {
    const {onSetMenuNew} = useContext(menusContext);
    
    
    
    return(
    <div onClick={onSetMenuNew} className="container-product animate__animated animate__fadeIn">
        <i className="fa-solid fa-plus"></i>
    </div>
)}