import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Catalogs from './components/Catalogs';
import Discounts from './components/Discounts';
import TopProducts from './components/TopProducts';
import NewProducts from './components/NewProducts';
import AllProducts from './components/AllProducts';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Catalogs/>
      <Discounts/>
      <TopProducts/>
      <NewProducts/>
      <AllProducts/>
      <Services/>
      <Footer/>
    </div>
  )
}
export default App