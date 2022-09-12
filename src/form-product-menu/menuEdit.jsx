import { useContext, useState } from "react";
import axios from "axios";

import { productsContext } from "../provider/productsProvider";
import { menusContext } from "../provider/menusProvider";

import { getFormNew } from "./getFormNew";
import { checkFormProduct } from "./checkFormProduct";

import { InputSelect } from "./components/inputSelect";
import { InputText } from "./components/inputText";

import "./formModal.css"


export const MenuEdit = ({product}) => {
    const { onUpdateRequest } = useContext(productsContext);
    const { onSetMenuProduct } = useContext(menusContext);
    const [requestHttp, setRequestHttp] = useState({loading: false})

    const {
        onChangeForm,
        onResetForm,

        inputCategory,
        inputLocation,
        inputBrand,
        inputType,
        inputSize,
    } = getFormNew({
        inputCategory: product.category.name,
        inputLocation: product.location.name,
        inputBrand: product.brand.name,
        inputType: product.name,
        inputSize: product.size,
    })

    const onSubmit = async(e) => {
        e.preventDefault()

        const payload = {
            name: inputType,
            brand: inputBrand,
            size: inputSize,
            category: inputCategory,
            location: inputLocation,
        };

        const {error, msg} = checkFormProduct(payload)

        if (!error) {
            setRequestHttp({loading: true})
            axios.put(`https://drink-freeze.herokuapp.com/api/product/${product._id}`, payload)
                .then(() => {
                    setRequestHttp({done: true, loading: false})
                    onResetForm()
                    onUpdateRequest()
                    onSetMenuProduct()
                })
                .catch(() => {setRequestHttp({error:true, msg: "Ya existe un producto como este"})})
        } else {
            setRequestHttp({error, msg})
        }
    }

    const onClose = () => {
        onSetMenuProduct();
        document.body.style.overflow = "scroll"
    }

    return (
        <div className="modal animate__animated animate__fadeIn">
        <div className="modal-content animate__animated animate__fadeInDownBig">
            <div id="header-modal">
                <h4>Editar producto</h4>

                <button onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
            </div>

            <div id="body-modal">
                <hr />

                <InputSelect onChange={onChangeForm} name="inputCategory" label="Categoria" valueArr={[
                    "vino", "cerveza", "gaseosa", "jugo", "energizante", "alcohol"
                ]}/>

                <InputText onChange={onChangeForm} value={inputBrand} name="inputBrand" label="Marca"/>

                <InputText onChange={onChangeForm} value={inputType} name="inputType" label="Tipo"/>

                <InputText onChange={onChangeForm} value={inputSize} name="inputSize" label="Tamaño"/>

                <InputText onChange={onChangeForm} value={inputLocation} name="inputLocation" label="Ubicacion"/>
            </div>

            <div id="footer-modal">
                <input type="submit" onClick={onSubmit} className="btn btn-primary" value="Editar"/>
                {(requestHttp.loading) ?    <label><div className="lds-dual-ring"></div></label>                                                         : null}
                {(requestHttp.error) ?      <label className="alertText me-3"><i className="fa-solid fa-exclamation"/>{"  " + requestHttp.msg}</label>    : null}
                {(requestHttp.done) ?       <label className="doneText me-3"><i className="fa-solid fa-check"></i>{"  Hecho"}</label>                       : null} 
            </div>
        </div>
        </div>
    )
}