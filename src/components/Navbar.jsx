import "./Navbar.css";
import React from "react";
import Dropvehicles from "./Dropmenu/Dropvehicles";
import Dropenergy from "./Dropmenu/Dropenergy";
import Dropcharging from "./Dropmenu/Dropcharging";
import Dropdiscover from "./Dropmenu/Dropdiscover";
import Dropshop from "./Dropmenu/Dropshop";

export default function Navbar() {

  return (
  <div className="Navbar_DropdownMenu">
    <div className="Navbar">
      <header className="navbar_header">
        <button className="tesla_logo" type="button" id="nav_tesla_logo">
          <h1 className="t_logo">TESLA</h1>
        </button>

        <ol className="navbar_options">
          <li>
              <button className="nav_btn" type="button" id="nav_vehicle_btn">
                <span className="nav_btn_txt">Vehicles</span>
              </button>
          </li>

          <li>
            <button className="nav_btn" type="button" id="nav_energy_btn">
              <span className="nav_btn_txt">Energy</span>
            </button>
          </li>

          <li>
            <button className="nav_btn" type="button" id="nav_charging_btn">
              <span className="nav_btn_txt">Charging</span>
            </button>
          </li>
          <li>
            <button className="nav_btn" type="button" id="nav_discover_btn">
              <span className="nav_btn_txt">Discover</span>
            </button>
          </li>
          <li>
            <button className="nav_btn" type="button" id="nav_shop_btn">
              <span className="nav_btn_txt">Shop</span>
            </button>
          </li>
        </ol>

        <ol className="navbar_logos">
          <li className="navbar_support">
            <button
              type="button"
              className="navbar_logo"
              id="navbar_support_logo"
              >
              <svg height="16" width="16" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
              </svg>
            </button>
          </li>

          <li className="navbar_reg-and-lang">
            <button
              type="button"
              className="navbar_logo"
              id="navbar_reg-and-lag_logo"
              >
              <svg height="16" width="16" viewBox="0 0 512 512">
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
              </svg>
            </button>
          </li>

          <li className="account">
            <button
              type="button"
              className="navbar_logo"
              id="navbar_account_logo"
              >
              <svg height="16" width="16" viewBox="0 0 512 512">
                <path d="M406.5 399.6C387.4 352.9 341.5 320 288 320H224c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7C334.4 452.4 296.6 464 256 464s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0 -176 0z" />
              </svg>
            </button>
          </li>
        </ol>
      </header>
    </div>
    <div className="drop_vehicles"><Dropvehicles /></div> 
    <div className="drop_energy"><energy /><Dropenergy /></div> 
    <div className="drop_charging"><energy /><Dropcharging /></div> 
    <div className="drop_discover"><energy /><Dropdiscover /></div> 
    <div className="drop_shop"><energy /><Dropshop /></div>

  </div>
  );
}
