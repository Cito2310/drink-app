import { useState , useEffect } from "react";

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
    const [timerActivated, setTimerActivated] = useState(false);

    useEffect(() => {
        if (!timerActivated) {changeProductAmount(_id, amount);}
    }, [timerActivated])
    
    const addOneAmount = () => {
        setAmount(amount+1);

        if (!timerActivated) {
            setTimerActivated(true)
            setTimeout(() => {setTimerActivated(false)}, 1500);
        }
    }

    const subOneAmount = () => {
        if (amount === 0) {return} 
        setAmount(amount-1)

        if (!timerActivated) {
            setTimerActivated(true)
            setTimeout(() => {setTimerActivated(false)}, 1500);
        }
    }

    return(
        <li className="container-product animate__animated animate__fadeIn">
            <div className="data-product">
                {/* <img className="img-bread-product" src={`/src/logo-cards/${idAssetCard}.png`}></img> */}
                <p>TIPO: <b>{name + " " +  size}</b></p>
                <p style={{margin: 0}}>CANTIDAD</p> <h4> {amount}</h4>

                <div className="footerCard">
                    <div className="dataFooter">
                        <p>CATEGORIA: <b>{category.name}</b></p>
                        <p>{location.name}</p>
                        <p style={{fontSize: 10}}>{_id}</p>
                    </div>

                    <div className="buttonFooter">
                        <EditButton product={product} />
                        <DeleteButton idProduct={product._id} />
                    </div>
                </div>
            </div>
            <div className="button-product">
                <button onClick={addOneAmount} className="arrow-up"><i className="fa-solid fa-angle-up" /></button>
                <button onClick={subOneAmount} className="arrow-down"><i className="fa-solid fa-angle-down" /></button>
            </div>
        </li>   
    )
}