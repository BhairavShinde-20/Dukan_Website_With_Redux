import "./App.css";
import Home from "./comoponent/home/Home";
import Navbar from "./comoponent/navbar/Navbar";
// import Product from './comoponent/product/Product';
import { Routes, Route } from "react-router-dom";
import Product from "./comoponent/product/Product";
import Produtcts from "./comoponent/products/Produtcts";
import Cart from "./comoponent/cart/Cart";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/product" element={<Product/>} />
        <Route exact path="/products/:id" element={<Produtcts/>} />
        <Route exact path="/cart" element={<Cart/>} />


      </Routes>
      {/* <Product/> */}
    </>
  );
}

export default App;
