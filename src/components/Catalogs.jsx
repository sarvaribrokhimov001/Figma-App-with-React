import React from 'react';
import "../App.css";
import 'remixicon/fonts/remixicon.css';

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
    </div>
  )
}
export default Catalogs