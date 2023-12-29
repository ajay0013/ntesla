import React from "react";
import "./Dropdiscover.css"

export default function Dropdiscover() {
    return (
        <div className="dropdown_panel">
            <div className="discover">
    
                <div className="cd_options_resources">
                    <ol>Resources</ol>
                    <ul>
                        <li> <a href="./Home">Demo Drive</a> </li>
                        <li> <a href="./Home">Insurance</a> </li>
                        <li> <a href="./Home">Video Guides</a> </li>
                        <li> <a href="./Home">Customer Stories</a> </li>
                        <li> <a href="./Home">Events</a> </li>
                    </ul>
                </div>

                <div className="cd_options_loc_services">
                    <ol>Location Services</ol>
                    <ul>
                        <li> <a href="./Home">Find Us</a> </li>
                        <li> <a href="./Home">Trip Planner</a> </li>
                        <li> <a href="./Home">Find a Collision Center</a> </li>
                        <li> <a href="./Home">Find a Certified Installer</a> </li>
                    </ul>
                </div>

                <div className="cd_options_resources">
                    <ol>Company</ol>
                    <ul>
                        <li> <a href="./Home">About</a> </li>
                        <li> <a href="./Home">Careers</a> </li>
                        <li> <a href="./Home">Investor Relations</a> </li>
                    </ul>
                </div>
        
            </div>

        </div>
    );
};