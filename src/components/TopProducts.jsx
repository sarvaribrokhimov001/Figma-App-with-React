import React from 'react';
import "../App.css";
import 'remixicon/fonts/remixicon.css';
import Chair from "../images/chair.png";

const TopProducts = () => {
  return (
    <div className='top__products__wrapper'>
        <div className='top__products'>
          <h1 className='top__products__title'> Ommabop mahsulotlar </h1>
          <div className='top__products__cards'>
            <div className="top__products__card">
              <img width={'270px'} height={'250px'} src={Chair} alt="" />
              <h6 className='top__products__product__name'> S-Series Comfort Chair </h6>
              <div className='top__products__price__btn'>
                <p className='top__products__discount__price'> $375 </p>
                <p className='top__products__price'> <del>$400</del> </p>
                <button className='top__products__btn'> Buyurtma berish </button>
              </div>
            </div>

             <div className="top__products__card">
              <img width={'270px'} height={'250px'} src={Chair} alt="" />
              <h6 className='top__products__product__name'> S-Series Comfort Chair </h6>
              <div className='top__products__price__btn'>
                <p className='top__products__discount__price'> $375 </p>
                <p className='top__products__price'> <del>$400</del> </p>
                <button className='top__products__btn'> Buyurtma berish </button>
              </div>
            </div>

             <div className="top__products__card">
              <img width={'270px'} height={'250px'} src={Chair} alt="" />
              <h6 className='top__products__product__name'> S-Series Comfort Chair </h6>
              <div className='top__products__price__btn'>
                <p className='top__products__discount__price'> $375 </p>
                <p className='top__products__price'> <del>$400</del> </p>
                <button className='top__products__btn'> Buyurtma berish </button>
              </div>
            </div>

             <div className="top__products__card">
              <img width={'270px'} height={'250px'} src={Chair} alt="" />
              <h6 className='top__products__product__name'> S-Series Comfort Chair </h6>
              <div className='top__products__price__btn'>
                <p className='top__products__discount__price'> $375 </p>
                <p className='top__products__price'> <del>$400</del> </p>
                <button className='top__products__btn'> Buyurtma berish </button>
              </div>
            </div>




          </div>
        </div>
    </div>
  )
}

export default TopProducts