import React from "react";
import "./Dropvehicles.css"

export default function Dropvehicles() {
    return (
        <div className="dropdown_panel">
            <div className="vehicles">
                <div className="modelS" id="models">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-S.png" alt="Model S"/>
                    </a>
                    <div className="productName">
                        Model S
                        <div className="modelS_link" id="model_link">
                            <p>Learn</p>
                            <p>Order</p>
                        </div>
                    </div>
                </div>

                <div className="model3" id="models">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-3.png" alt="Model 3"/>
                    </a>
                    <div className="productName">
                        Model 3
                        <div className="model3_link" id="model_link">
                            <p>Learn</p>
                            <p>Order</p>
                        </div>
                    </div>
                </div>

                <div className="modelX" id="models">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-X.png" alt="Model X"/>
                    </a>
                    <div className="productName">
                        Model X
                        <div className="modelX_link" id="model_link">
                            <p>Learn</p>
                            <p>Order</p>
                        </div>
                    </div>
                </div>

                <div className="modelY" id="models">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Model-Y.png" alt="Model Y"/>
                    </a>
                    <div className="productName">
                        Model Y
                        <div className="modelY_link" id="model_link">
                            <p>Learn</p>
                            <p>Order</p>
                        </div>
                    </div>
                </div>

                <div className="Cybertruck" id="models">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Vehicles-Cybertruck-1x.png" alt="Cybertruck"/>
                    </a>
                    <div className="productName">
                    Cybertruck
                        <div className="Cybertruck_link" id="model_link">
                            <p>Learn</p>
                            <p>Order</p>
                        </div>
                    </div>
                </div>

                <div className="help_me_choose" id="models">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/v1697244584/Mega-Menu-Vehicles-HMC-RedBlue.png" alt="Choose"/>
                    </a>
                    <div className="productName">
                        Help Me Choose
                        <div className="modelY_link" id="model_link">
                            <p>Get Started</p>
                        </div>
                    </div>
                </div>
            </div>
    {/* Vertical Divider Add Krna H */}
        <div className="vehicle_options">
            <ul>
                <li> <a href="./Home">Inventory</a> </li>
                <li> <a href="./Home">Used Cars</a> </li>
                <li> <a href="./Home">Demo Drive</a> </li>
                <li> <a href="./Home">Trade-in</a> </li>
                <li> <a href="./Home">Compare</a> </li>
                <li> <a href="./Home">Fleet</a> </li>
                <li> <a href="./Home">Semi</a> </li>
                <li> <a href="./Home">Roadster</a> </li>
            </ul>
        </div>

        </div>
    );
};