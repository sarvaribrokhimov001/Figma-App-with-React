import React from 'react';
import "../App.css";
import 'remixicon/fonts/remixicon.css';

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer">
        <div className="footer__section">
          <h2 className="footer__logo"> BrandLogo </h2>
          <p className="footer__text"> Eng sifatli mahsulotlar faqat bizda. Tez va ishonchli yetkazib berish xizmati mavjud. </p>
        </div>

        <div className="footer__section">
          <h3 className="footer__title"> Sahifalar </h3>
          <ul>
            <li> Bosh sahifa </li>
            <li> Katalog </li>
            <li> Haqimizda </li>
            <li> Aloqa </li>
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__title"> Bog‘lanish </h3>
          <p> 📍 Toshkent, O‘zbekiston </p>
          <p> 📞 +998 90 123 45 67 </p>
          <p> 📧 info@gmail.com </p>
        </div>

        <div className="footer__section">
          <h3 className="footer__title"> Ijtimoiy tarmoqlar </h3>
          <div className="footer__icons">
            <i className="ri-telegram-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-facebook-circle-line"></i>
            <i className="ri-youtube-line"></i>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p> © 2026 BrandLogo. Barcha huquqlar himoyalangan. </p>
      </div>
    </div>
  );
};
export default Footer;