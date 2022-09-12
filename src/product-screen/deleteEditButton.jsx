import { useContext } from "react"

import { menusContext } from "../provider/menusProvider"

export const DeleteButton = ({idProduct}) => {
    const { onSetMenuDelete } = useContext(menusContext)
    const onClick = () => {onSetMenuDelete(idProduct)}

    return (
        <button
            onClick={onClick}
        ><i className="fa-solid fa-trash"></i></button>
    )
}

export const EditButton = ({product}) => {
    const { onSetMenuEdit } = useContext(menusContext)

    const onClick = () => {onSetMenuEdit(product)}

    return(
        <button onClick={onClick}>
        <i className="fa-solid fa-pen"></i></button>
    )
}