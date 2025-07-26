import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import Layout from "./pages/layout/Layout";
import DetailProduct from "./pages/detail-product/DetailProduct";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Wishlist from "./pages/wishlist/Wishlist";
import Cart from "./pages/cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;