import React from 'react';
import "../App.css";
import 'remixicon/fonts/remixicon.css';
import CellPhone from "../images/cellphone.png";
import Computer from "../images/computer.png";
import Smartwatch from "../images/smartwatch.png";
import Camera from "../images/camera.png";
import Headphone from "../images/headphone.png";
import Gamepad from "../images/gamepad.png";

const Catalogs = () => {
  return (
    <div className='catalogs__wrapper'>
        <div className='catalogs'>
          <h2 className='catalogs__title'> Kataloglar </h2>
          <div className='catalogs__directions'>
            <div className='catalogs__direction'>
              <i class="ri-arrow-left-line catalogs__direction__left"></i>
            </div>
              <div className='catalogs__direction'>
                <i class="ri-arrow-right-line catalogs__direction__right"></i>
              </div>
          </div>
        </div>

        <div className="catalogs__cards">
            <div className="catalogs__card">
              <img className='catalogs__img' src={CellPhone} alt="" />
              <p className='catalogs__card__text'> Telefon </p>
            </div>

             <div className="catalogs__card">
              <img className='catalogs__img' src={Computer} alt="" />
              <p className='catalogs__card__text'> Kompyuter </p>
            </div>

             <div className="catalogs__card">
              <img className='catalogs__img' src={Smartwatch} alt="" />
              <p className='catalogs__card__text'> Aqilli soatlar </p>
            </div>

             <div className="catalogs__card">
              <img className='catalogs__img' src={Camera} alt="" />
              <p className='catalogs__card__text'> Kamera </p>
            </div>

             <div className="catalogs__card">
              <img className='catalogs__img' src={Headphone} alt="" />
              <p className='catalogs__card__text'> Quloqchinlar </p>
            </div>

             <div className="catalogs__card">
              <img className='catalogs__img' src={Gamepad} alt="" />
              <p className='catalogs__card__text'> Aksesuarlar </p>
            </div>
          </div>
    </div>
  )
}
export default Catalogs