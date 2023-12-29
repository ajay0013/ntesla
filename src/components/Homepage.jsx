import React from "react";
import "./Homepage.css";
import models from "./Images/models.jpg";
import model3 from "./Images/model3.jpg";
import modelx from "./Images/modelx.jpg";
import modely from "./Images/modely.jpg";
import cybertruck from "./Images/cybertruck.jpg";
import accessories from "./Images/accessories.jpg";
import experience from "./Images/experience.jpg";
import powerwall from "./Images/powerwall.jpg";
import solarroof from "./Images/solarroof.jpg";
import solarpanel from "./Images/solarpanel.jpg";

export default function Homepage() {
  return (
    <div className="frontend-content">
      
      <div className="model-content" style={{backgroundImage:`url(${modely})`}}>
        <div className="info">
          <div className="model-name">
            <h1>Model Y</h1>
            <p>Lease starting at $399/mo*</p> 
          </div>
          <div className="model-options">
            <button className="invent">
              <span>Explore Inventory</span>
            </button>
            <button className="drive">
              <span>Demo Drive</span>
            </button>
            <p>
              *Excludes taxees and fees with price subject to change. Available
              in select state.
              <a href="https://www.tesla.com/modely/design?financeModalTab=finance_options#overview">
                See Details
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="model-content" style={{backgroundImage:`url(${model3})`}}>
        <div className="info">
          <div className="model-name">
            <h1>Model 3</h1>
            <p>Lease starting at $329/mo*</p> 
          </div>
          <div className="model-options">
            <button className="invent">
              <span>Explore Inventory</span>
            </button>
            <button className="drive">
              <span>Demo Drive</span>
            </button>
            <p>
              *Excludes taxees and fees with price subject to change. Available
              in select state.
              <a href="https://www.tesla.com/model3/design?financeModalTab=finance_options#overview">
                See Details
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="model-content" style={{backgroundImage:`url(${modelx})`}}>
        <div className="info">
          <div className="model-name">
            <h1>Model X</h1>
            <p>From $68,590*</p> 
          </div>
          <div className="model-options">
            <button className="invent">
              <span>Explore Inventory</span>
            </button>
            <button className="drive">
              <span>Demo Drive</span>
            </button>
            <p>
              *Price before incentives and savings is $79,990, excluding taxes and fees. Subject to change.
              <a href="https://www.tesla.com/modelx/design?financeModalTab=finance_options#overview">
              Learn about est. gas savings.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="model-content" style={{backgroundImage:`url(${models})`}}>
        <div className="info">
          <div className="model-name">
            <h1>Model S</h1>
            <p>From $71,090*</p> 
          </div>
          <div className="model-options">
            <button className="invent">
              <span>Explore Inventory</span>
            </button>
            <button className="drive">
              <span>Demo Drive</span>
            </button>
            <p>
              *Price before incentives and savings is $74,990, excluding taxes and fees. Subject to change.
              <a href="https://www.tesla.com/models/design?financeModalTab=finance_options#overview">
              Learn about est. gas savings.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="model-content" style={{backgroundImage:`url(${cybertruck})`}}>
        <div className="info">
          <div className="model-name">
            <h1></h1>
            <p></p> 
          </div>
          <div className="model-options">
            <button className="invent">
              <span>Order Now</span>
            </button>
            <button className="drive">
              <span>Learn More</span>
            </button>
            <p>
              <a href="https://www.tesla.com/model3/design?financeModalTab=finance_options#overview">  
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="model-content" style={{backgroundImage:`url(${experience})`}}>
        <div className="info">
          <div className="model-name">
            <h1>Experience Tesla</h1>
            <p>Schedule a Demo Drive Today</p> 
          </div>
          <div className="model-options">
            <button className="invent">
              <span>Demo Drive</span>
            </button>
            <p>
              <a href="https://www.tesla.com/model3/design?financeModalTab=finance_options#overview">
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="model-content" style={{backgroundImage:`url(${solarpanel})`}}>
        <div className="info">
          <div className="model-name">
            <h1>Solar Panels</h1>
            <p><a href="https://www.tesla.com/solar-virtual-consultations">Schedule a Virtual Consultation</a></p> 
          </div>
          <div className="model-options">
            <button className="invent">
              <span>Order Now</span>
            </button>
            <button className="drive">
              <span>Learn More</span>
            </button>
            <p>
              <a href="https://www.tesla.com/model3/design?financeModalTab=finance_options#overview">
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="model-content" style={{backgroundImage:`url(${solarroof})`}}>
        <div className="info">
          <div className="model-name">
            <h1>Solar Roof</h1>
            <p>Produce Clean Energy From Your Roof</p> 
          </div>
          <div className="model-options">
            <button className="invent">
              <span>Order Now</span>
            </button>
            <button className="drive">
              <span>Learn More</span>
            </button>
            <p>
              <a href="https://www.tesla.com/model3/design?financeModalTab=finance_options#overview">
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="model-content" style={{backgroundImage:`url(${powerwall})`}}>
        <div className="info">
          <div className="model-name">
            <h1>Powerwall</h1>
            <p></p> 
          </div>
          <div className="model-options">
            <button className="invent">
              <span>Order Now</span>
            </button>
            <button className="drive">
              <span>Learn More</span>
            </button>
            <p>
              <a href="https://www.tesla.com/model3/design?financeModalTab=finance_options#overview">
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="model-content" style={{backgroundImage:`url(${accessories})`}}>
        <div className="info">
          <div className="model-name">
            <h1>Accessories</h1>
            <p></p> 
          </div>
          <div className="model-options">
            <button className="invent">
              <span>Shop Now</span>
            </button>
            <p>
              <a href="https://www.tesla.com/model3/design?financeModalTab=finance_options#overview">
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
