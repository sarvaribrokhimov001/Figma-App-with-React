import React from 'react';
import "../App.css";
import 'remixicon/fonts/remixicon.css';
import { NavLink } from 'react-router-dom';

const Intro = () => {
  return (
    <div>
      <nav className='main__navbar'>
        <h2 className='main__navbar__logo'> BrandLogo </h2>
        <ul className='main__navbar__links'>
          <li> <NavLink className={'main__navbar__link'} to={'/'}> Bosh sahifa </NavLink> </li>
          <li> <NavLink className={'main__navbar__link'} to={'/'}> Katalog </NavLink> </li>
          <li> <NavLink className={'main__navbar__link'} to={'/'}> Haqimizda </NavLink> </li>
          <li> <NavLink className={'main__navbar__link'} to={'/'}> Aloqa </NavLink> </li>
        </ul>
        <div className='main__navbar__search__contact'>
          <div className='main__navbar__searchInput__searchIcon'>
            <input className='main__navbar__searchInput' type="search" placeholder='Siz nima qidiryapsiz?' />
            <i class="ri-search-line main__navbar__searchIcon"></i>
          </div>
          <div className='main__navbar__contactIcon__contactBtn'>
            <i class="ri-phone-line main__navbar__contactIcon"></i>
            <button className='main__navbar__contactBtn'> Aloqaga chiqish </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Intro