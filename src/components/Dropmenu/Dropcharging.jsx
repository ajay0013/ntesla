import React from "react";
import "./Dropcharging.css"

export default function Dropcharging() {
    return (
        <div className="dropdown_panel">
            <div className="charging">
                <div className="chargingIn" id="chargingdevice">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Charging.png" alt="CI"/>
                    </a>
                    <div className="productName">
                        Charging
                        <div className="chargingIn_link" id="cd_link">
                            <p>Learn</p>
                            <p>Order</p>
                        </div>
                    </div>
                </div>

                <div className="homecharging" id="chargingdevice">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Home-Charging.png" alt="HC"/>
                    </a>
                    <div className="productName">
                        Home Charging
                        <div className="homecharging_link" id="cd_link">
                            <p>Learn</p>
                            <p>Order</p>
                        </div>
                    </div>
                </div>

                <div className="supercharging" id="chargingdevice">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Charging-Supercharging-NA.png" alt="SC"/>
                    </a>
                    <div className="productName">
                        Supercharging
                        <div className="supercharging_link" id="cd_link">
                            <p>Learn</p>
                            <p>Order</p>
                        </div>
                    </div>
                </div>

        
            </div>
    {/* Vertical Divider Add Krna H */}
        <div className="cd_options">
            <ul>
                <li> <a href="./Home">Charging Calculator</a> </li>
                <li> <a href="./Home">Trip Planner</a> </li>
                <li> <a href="./Home">Supercharger Voting</a> </li>
                <li> <a href="./Home">Host a Supercharger</a> </li>
                <li> <a href="./Home">Commercial Charging</a> </li>
                <li> <a href="./Home">Host Wall Connectors</a> </li>
            </ul>
        </div>

        </div>
    );
};