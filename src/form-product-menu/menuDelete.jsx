import { useContext, useState } from "react";
import axios from "axios";

import { productsContext } from "../provider/productsProvider";
import { menusContext } from "../provider/menusProvider";

import "./formModal.css"


export const MenuDelete = ({product}) => {
    const { onUpdateRequest } = useContext(productsContext);
    const { onSetMenuProduct } = useContext(menusContext);
    const [requestHttp, setRequestHttp] = useState({loading: false})

    const onDelete = () => {
        setRequestHttp({loading: true})
        axios.delete(`https://drink-freeze.herokuapp.com/api/product/${product}`)
            .then(() => {
                setRequestHttp({loading: false})
                onUpdateRequest()
                document.body.style.overflow = "scroll"
                onSetMenuProduct()
            })
    }



    const onClose = () => {
        onSetMenuProduct();
        document.body.style.overflow = "scroll"
    }

    return (
        <div className="modal animate__animated animate__fadeIn">
        <div className="modal-content animate__animated animate__fadeInDownBig">
            <div id="header-modal">
                <h4>Confirmar eliminacion</h4>
                <button onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
            </div>

            <div style={{display: "flex", flexDirection: "column"}} id="body-modal">
                <hr />
                <h6 style={{alignSelf: "flex-start"}}>Seguro que deseas borrar este producto?</h6>
                
                <div style={{alignSelf: "flex-end"}}>
                    {(requestHttp.loading) ?    <label><div className="lds-dual-ring"></div></label> : null}
                    <button onClick={onDelete} className="btn btn-primary me-3 ps-4 pe-4">Si</button>
                    <button onClick={onClose} className="btn btn-secondary ps-4 pe-4">No</button>
                </div>
            </div>
        </div>
        </div>
    )
}