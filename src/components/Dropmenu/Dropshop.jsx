import React from "react";
import "./Dropshop.css"

export default function Dropshop() {
    return (
        <div className="dropdown_panel">
            <div className="shop">
                <div className="shop_charging" id="dropshop">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Charging.png" alt="SHC"/>
                    </a>
                    <div className="productName">
                        Charging
                    </div>
                </div>

                <div className="shop_vehicle_accessories" id="dropshop">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Vehicle-Accessories.png" alt="VA"/>
                    </a>
                    <div className="productName">
                        Vehicle Accessories
                    </div>
                </div>

                <div className="shop_apparel" id="drop">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Apparel.png" alt="AP"/>
                    </a>
                    <div className="productName">
                        Apparel
                    </div>
                </div>

                <div className="Lifestyle" id="dropshop">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Shop-Lifestyle.png" alt="LS"/>
                    </a>
                    <div className="productName">
                        LifeStyle
                    </div>
                </div>
            </div>
        </div>
    );
};