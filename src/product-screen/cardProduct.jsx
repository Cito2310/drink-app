import { useState , useEffect , useRef } from "react";
import axios from "axios";

import { changeProductAmount } from "./changeProductAmount";
import { nameToAssetsId } from "./nameToAssetsId";

import { DeleteButton , EditButton } from "./deleteEditButton";

import "./cardProduct.css"
import "./editAndDeleteButton.css"

export const CardProduct = ({product}) => {
    const { _id ,name, brand, category, location, size, ...rest} = product;
    const idAssetCard = nameToAssetsId("card-", brand.name);

    //amount controller
    const [amount, setAmount] = useState(rest.amount);
    const [timer, setTimer] = useState("");
    useEffect(() => {
        if (timer === false) {setTimeout(()=>{setTimer(true)},1500)}
        if (timer === true) {changeProductAmount(_id, amount)}
    }, [timer])
    
    const addOneAmount = () => {
        setAmount(amount+1);
        if (timer === true || timer === "") {setTimer(false)}
    }
    
    const subOneAmount = () => {
        if (amount === 0) {return} 
        setAmount(amount-1)
        if (timer === true || timer === "") {setTimer(false)}
    }


    const changeProductAmount = () => {
        axios.put(`https://drink-freeze.herokuapp.com/api/product/changeamount/${_id}?amount=${amount}`)
    }
    


    
    return(
        <li className="container-product animate__animated animate__fadeIn">
            <div className="data-product">
                <img className="img-bread-product" src={`assets/logo-cards/${idAssetCard}.png`}></img>
                <p>TIPO: <b>{name + " " +  size}</b></p>

                <div className="footerCard">
                    <div className="dataFooter">
                        <p>CATEGORIA: <b>{category.name}</b></p>
                        <p>{location.name}</p>
                    </div>

                    <div className="buttonFooter">
                        <EditButton product={product} />
                        <DeleteButton idProduct={product._id} />
                    </div>
                </div>
            </div>
            <div className="button-product">
                <button onClick={addOneAmount} className="arrow-up"><i className="fa-solid fa-angle-up" /></button>
                <div>{amount}</div>
                <button onClick={subOneAmount} className="arrow-down"><i className="fa-solid fa-angle-down" /></button>
            </div>
        </li>   
    )
}