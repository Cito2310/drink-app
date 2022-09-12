import { Sidebar } from "./side-bar/sidebar"
import { PageProduct } from "./pageProduct"

import { MenusProvider } from "./provider/menusProvider"
import { ProductsProvider } from "./provider/productsProvider"

const App = () => {
    return(
        <ProductsProvider>
        <MenusProvider>
            <Sidebar />
            <PageProduct />
        </MenusProvider>
        </ProductsProvider>
    )
}

export default App
