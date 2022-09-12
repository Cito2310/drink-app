import { OrderMenu } from "./orderMenu"

import "./sideBar.css"

export const Sidebar = () => (
    <>
        <a id="sideBarBtn" className="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <i className="fa-solid fa-bars"></i>
        </a>

        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title fontPoppins">ORDENAR POR</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <OrderMenu/>
        </div>

    </>
)