import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
<div>
  <BrowserRouter>
  <Routes>
    <Route index element = {<Home />} />
    <Route path = "/home" element = {<Home />} />
    <Route path = "/Login" element = {<Login/>}  />
    <Route path = "Register" element = {<Register />} />
    <Route path = "Product" element = {<Product />} />
    <Route path = "ProductList" element = {<ProductList />} />
    <Route path = "Cart" element = {<Cart />} />
    </Routes>
    </BrowserRouter>
</div>
  )
};

export default App;