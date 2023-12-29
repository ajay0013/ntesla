import React from "react";
import "./Dropenergy.css"

export default function Dropenergy() {
    return (
        <div className="dropdown_panel">
            <div className="energy">
                <div className="solarPanel" id="energydevice">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Panels.png" alt="SP"/>
                    </a>
                    <div className="productName">
                        Solar Panels
                        <div className="solarpanel_link" id="ed_link">
                            <p>Learn</p>
                            <p>Order</p>
                        </div>
                    </div>
                </div>

                <div className="solarRoof" id="energydevice">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Solar-Roof.png" alt="SR"/>
                    </a>
                    <div className="productName">
                        Solar Roof
                        <div className="solarroof_link" id="ed_link">
                            <p>Learn</p>
                            <p>Order</p>
                        </div>
                    </div>
                </div>

                <div className="powerwall" id="energydevice">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Powerwall-US.png" alt="PW"/>
                    </a>
                    <div className="productName">
                        Powerwall
                        <div className="powerwall_link" id="ed_link">
                            <p>Learn</p>
                            <p>Order</p>
                        </div>
                    </div>
                </div>

                <div className="megapack" id="energydevice">
                    <a href="./Home">
                        <img src="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Mega-Menu-Energy-Megapack.png" alt="MP"/>
                    </a>
                    <div className="productName">
                        Megapack
                        <div className="megapack_link" id="ed_link">
                            <p>Learn</p>
                            <p>Order</p>
                        </div>
                    </div>
                </div>

        
            </div>
    {/* Vertical Divider Add Krna H */}
        <div className="ed_options">
            <ul>
                <li> <a href="./Home">Schedule a Consultation</a> </li>
                <li> <a href="./Home">Why Solar</a> </li>
                <li> <a href="./Home">Incentives</a> </li>
                <li> <a href="./Home">Support</a> </li>
                <li> <a href="./Home">Partner with Tesla</a> </li>
                <li> <a href="./Home">Commercial</a> </li>
                <li> <a href="./Home">Utilities</a> </li>
            </ul>
        </div>

        </div>
    );
};