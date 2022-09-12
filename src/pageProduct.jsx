import { useContext } from "react";

// Providers
import { menusContext } from "./provider/menusProvider";

// Components
import { ProductGrid } from "./product-screen/productGrid";

import { MenuNew } from "./form-product-menu/menuNew";
import { MenuEdit } from "./form-product-menu/menuEdit";
import { MenuDelete } from "./form-product-menu/menuDelete";

export const PageProduct = () => {
    const {menus} = useContext(menusContext);
    const { menu , product } = menus;

    return(
        <>
            <ProductGrid />
            
            {menu === "edit" ? <MenuEdit product={product}/> : "" }
            {menu === "newproduct" ? <MenuNew /> : "" }
            {menu === "delete" ? <MenuDelete product={product}/> : "" }
        </>
    )
}