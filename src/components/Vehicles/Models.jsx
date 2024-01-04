import React from "react";
import { useState } from "react";
import "./Models.css";
import model_s_1 from "./Vehicleimages/model_s_1.jpg";
import model_s_2 from "./Vehicleimages/model_s_2.jpg";
import model_s_video_1 from "./Vehicleimages/model_s_video_1.mp4";
import model_s_video_2 from "./Vehicleimages/model_s_video_2.mp4";
import model_s_video_3 from "./Vehicleimages/model_s_video_3.mp4";
import model_s_video_4 from "./Vehicleimages/model_s_video_4.mp4";
import elem_img_1 from "./Vehicleimages/elem_img_1.jpg";
import elem_img_2 from "./Vehicleimages/elem_img_2.jpg";
import elem_img_3 from "./Vehicleimages/elem_img_3.jpg";
import model_s_blue from "./Vehicleimages/model_s_blue.jpg";
import model_s_ep from "./Vehicleimages/model_s_ep.jpg";
import model_s_plaid_ep from "./Vehicleimages/model_s_plaid_ep.jpg";


export default function Models() {

  const [image, setImage] = useState(model_s_ep);

  const changeImage = (imageFile) => {
    setImage(imageFile);
  };

  return (
    <div className="model-s-frontend">                                                {/*      Page   */}

      <div className="section" style={{ backgroundImage: `url(${model_s_1})` }}>     {/*      Section    */}
        <div className="section-content">                                             {/*      Section m info  */}
            <div className="model-name">                                              {/*      naam aur neeche ka part   */}      
              <h1>Model S</h1>
              <a href="https://www.tesla.com/en_ca/inventory/new/ms">Explore Inventory</a>
            </div>
            <div className="model-specs-orderbtn">
              <ol className="model-spec-numbers">
                <li>
                  <p>637 km</p>
                  <p>Range (EPA est.)</p>
                </li>
                <li>
                  <p>2.1s</p>
                  <p>0-100 km/h*</p>
                </li>
                <li>
                  <p>322 km/h</p>
                  <p>Top Speed†</p>
                </li>
                <li>
                  <p>1,020 hp</p>
                  <p>Peak Power</p>
                </li>
              </ol>

              <ol>
                <li>
                  <button>
                    <span>Order Now</span>
                  </button>
                  <button>
                    <span>Demo Drive</span>
                  </button>
                </li>
              </ol>

              <p id="disclaimer_p">Specs displayed are Model S Plaid values.</p>
            </div>
        </div>
      </div>

      <div className="section" id="section-2">
        <div className="iof">
          <h2>Interior of the Future</h2>
        </div>

      </div>

      <div className="section" id="section-3" style={{ backgroundImage: `url(${model_s_2})` }} /> 

      <div className="empty_space"></div>

      <div className="section" id="model_s_vids_1">
        <div className="int_vid">

          <div className="vid_txt" id="item_1">
            <div className="video_item">
              <video preload="true" autoPlay muted loop>
                <source src={model_s_video_1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text_item">
              <div className="text">
                <p1>Yaha cideo 1 ka heading aayega</p1>
                <p2>yaha video 1 ka text ayega</p2>
              </div>
            </div>
          </div>

          <div className="vid_txt" id="item_2">
            <div className="video_item">
              <video preload="true" autoPlay muted loop>
                <source src={model_s_video_2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text_item">
              <div className="text">
                <p1>Yaha cideo 2 ka heading aayega</p1>
                <p2>yaha video 2 ka text ayega</p2>
              </div>
            </div>
          </div>

          <div className="vid_txt" id="item_3">
            <div className="video_item">
              <video preload="true" autoPlay muted loop>
                <source src={model_s_video_3} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text_item">
              <div className="text">
                <p1>Yaha cideo 3 ka heading aayega</p1>
                <p2>yaha video 3 ka text ayega</p2>
              </div>
            </div>
          </div>

          <div className="vid_txt" id="item_4">
            <div className="video_item">
              <video preload="true" autoPlay muted loop>
                <source src={model_s_video_4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="text_item">
              <div className="text">
                <p1>Yaha cideo 4 ka heading aayega</p1>
                <p2>yaha video 4 ka text ayega</p2>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="section" id="six_elements">
        <div className="items">

          <div className="item" id="item_1">
            <div className="img_content">
              <img src = {elem_img_1} alt="elem_img_1"/>
            </div>

            <div className="txt_content">
              <p1> pehle ki heading </p1>
              <p2> pehle ka text </p2>
            </div>

          </div>

          
          <div className="item" id="item_2">
            <div className="txt_content">
              <p1> pehle ki heading </p1>
              <p2> pehle ka text </p2>
            </div>

            <div className="img_content">
              <img src = {elem_img_2} alt="elem_img_2"/>
            </div>


          </div>

          <div className="items">
            <div className="item" id="item_3">

              <div className="img_content">
                <img src = {elem_img_3} alt="elem_img_3"/>
              </div>

              <div className="txt_content">
                <p1> pehle ki heading </p1>
                <p2> pehle ka text </p2>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="section" id="beyond_ludicrous" style={{ backgroundImage: `url(${model_s_blue})` }}>
        <div className="pic_specs" >

          <div className="text" id="specs">
            <div className="spec_numbers">
              <div className="peak_power" id="number">
                <p1>1,020 hp</p1>
                <p2>Peak Power</p2>
              </div>

              <div className="mile" id="number">
                <p1>9.23 s</p1>
                <p2>@250 km/h 1/4 mile</p2>
              </div>

              <div className="zero_hund" id="number">
                <p1>2.1 s</p1>
                <p2>0-100 km/h*</p2>
              </div>
            </div>
          </div>

          <div className="btn_dscrb">
            <div className="btn">
              <div className="name">
                <p1>Plaid</p1>
                <p2>Beyond Ludicrous</p2>
              </div>
              <div className="btns">
                <button>
                  <a href="">Order Now</a>
                </button>
                <button>
                  <a href="">View Inventory</a>
                </button>
              </div>
            </div>

            <div className="dscrb">
              <p>Model S Plaid has the quickest acceleration 
                of any vehicle in production. Updated battery 
                architecture for all Model S trims enables 
                back-to-back track runs without performance 
                degradation.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="section" id="electric_powertrain">

        <div className="ep_text">
          <div className="txt">
            <p1>Electric Powertrain</p1>
            <p2>Model S platforms unite powertrain and battery 
              technologies for unrivaled performance, range and efficiency. 
              New module and pack thermal architecture allows faster charging 
              and gives you more power and endurance in all conditions.</p2>
          </div>
        </div>

        <div className="ep_mtr_btn">

          <div className="ep_mtr">
            <img className="ep_mtr_img" id="image" src={image} alt="ep_mtr" />
          </div>

          <div className="btns">
            <div className="ep_btn">

              <button id="ep_btn_1" onClick={() => changeImage(model_s_ep)}>
                <p1>Model S</p1>
                <p2>Dual Motor All-Wheel Drive unlocks more range than any other vehicle 
                  in our current lineup, with insane power and maximum control.</p2>
                <div className="specs">

                  <div className="specs_time">
                    <p1>3.2 s</p1>
                    <p2>0-100 km/h</p2>
                  </div>

                  <div className="specs_range">
                    <p1>652 km</p1>
                    <p2>Range (EPA est.)</p2>
                  </div>

                </div>
              </button>
              <button id="ep_btn_2" onClick={() => changeImage(model_s_plaid_ep)}>
              <p1>Model S Plaid</p1>
                <p2>Maintain 1,000+ horsepower all the way to 322 km/h with Tri-Motor 
                  All-Wheel Drive, featuring torque vectoring and three independent 
                  carbon-sleeved rotors.</p2>
                <div className="specs">

                  <div className="specs_time">
                    <p1>2.1 s*</p1>
                    <p2>0-100 km/h</p2>
                  </div>

                  <div className="specs_range">
                    <p1>637 km</p1>
                    <p2>Range (EPA est.)</p2>
                  </div>
                </div>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}