import { useEffect, useState } from 'react';
import "../App.css";
import 'remixicon/fonts/remixicon.css';
import axios from 'axios';

const Discounts = () => {
  const [products , setProducts] = useState([]);

  useEffect(() => {
    axios
    .get('https://fakestoreapi.com/products')
    .then((data) => {
      setProducts(data.data);
    }).catch((error) => {
      console.log(error);
    })
  } , [])

  return (
    <div>
      <div className="products__container">
        <h1> Yangi chegirmalar </h1>
        {products.map((item) => (
          <div key={item.id} className="product__card">
            <img src={item.image} alt={item.title} width="100" height={'140px'} />
            <h3>{item.title}</h3>
            <p>{item.price} $</p>
          </div>
        ))}
        <button className='discount__btn'> Barcha ko’rish </button>
      </div>
    </div>
  );
};
export default Discounts