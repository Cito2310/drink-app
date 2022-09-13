import { useContext } from "react";

// Providers
import { menusContext } from "./provider/menusProvider";

// Components
import { ProductGrid } from "./product-screen/productGrid";
import { OnlyNeedMenu } from "./only-need-menu/onlyNeedMenu";

import { MenuNew } from "./form-product-menu/menuNew";
import { MenuEdit } from "./form-product-menu/menuEdit";
import { MenuDelete } from "./form-product-menu/menuDelete";

export const PageProduct = () => {
    const {menus} = useContext(menusContext);
    const { menu , product } = menus;

    return(
        <>
            {menu !== "onlyneed" ? <ProductGrid /> : "" }
            {menu !== "" ? <OnlyNeedMenu /> : "" }
            
            {menu === "edit" ? <MenuEdit product={product}/> : "" }
            {menu === "newproduct" ? <MenuNew /> : "" }
            {menu === "delete" ? <MenuDelete product={product}/> : "" }
        </>
    )
}