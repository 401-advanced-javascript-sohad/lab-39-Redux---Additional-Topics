/* eslint-disable no-unused-vars */
import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/main/categories.js';
import Products from './components/main/products.js';
import Cart from './components/main/cart.js';
import './app.scss';



const App = ()=>{


  return(
    <>

      <Header />

      <Route exact path="/cart">
        <Cart />
      </Route>

      <Route exact path="/">
        <Categories />
        <Products />
      </Route>

      <Footer />
          
    </>
  );
};

export default App ;
