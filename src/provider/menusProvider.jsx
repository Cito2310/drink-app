import { useEffect } from "react";
import { createContext, useState  } from "react";


export const menusContext = createContext();
export const MenusProvider = ({children}) => {
    // INITIALIZATION
    const [menus, setMenus] = useState({
        menu: "",
        product: {},
    })

    // CONTROLLERS
    const onSetMenuEdit = (product) => {
        document.body.style.overflow = "hidden"
        setMenus({
            ...menus,
            product: product,
            menu: "edit",
        })
    }

    const onSetMenuNew = () => {
        document.body.style.overflow = "hidden"
        setMenus({
            ...menus,
            menu: "newproduct",
        })
    }

    const onSetMenuProduct = () => {
        document.body.style.overflow = "scroll";
        setMenus({
            ...menus,
            menu: "",
        })
    }

    const onSetMenuOnlyNeed = () => {
        document.body.style.overflow = "scroll";
        setMenus({
            ...menus,
            menu: "onlyneed",
        })
    }

    const onSetMenuDelete = (idProduct) => {
        document.body.style.overflow = "hidden"
        setMenus({
            ...menus,
            product: idProduct,
            menu: "delete",
        })
    }


    return (
        <menusContext.Provider value={{menus , onSetMenuEdit , onSetMenuNew , onSetMenuProduct , onSetMenuDelete , onSetMenuOnlyNeed}}>
            {children}
        </menusContext.Provider>
    )
}