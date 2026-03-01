import React from 'react';
import "../App.css";
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <div className='navbar__location__icon'>
          <i className="ri-map-pin-line navbar__icon"></i>
          <p className='navbar__location'> Shahar:Toshkent </p>
        </div>
        <p className='navbar__text'> Buyurtmalaringizni bepul yetkazib beramiz - atiga 1 kun ichida </p>
        <select className='navbar__select'>
          <option className='navbar__option' value="Uzbek"> Uzbek </option>
          <option className='navbar__option' value="English"> English </option>
          <option className='navbar__option' value="Russian"> Russian </option>
        </select>
      </nav>
    </div>
  )
}
export default Navbar