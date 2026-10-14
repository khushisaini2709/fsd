import React, { useState,useEffect } from 'react'
import Header from './Components/Header';
import Product from './Components/Product';
import Footer from './Components/Footer';
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Cart from './Components/Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [])
  console.log(products);
  
  return (
    <div>
      <BrowserRouter>
        <>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Product products={products} />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Header />
      <Product products={products}/>
      <Footer />
    </div>
  )
}

export default App