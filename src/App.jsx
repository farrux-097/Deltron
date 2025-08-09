import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, memo } from "react";


const Home = lazy(() => import('./pages/home/Home'))
const NotFound = lazy(() => import('./pages/not-found/NotFound'))
const Layout = lazy(() => import('./pages/layout/Layout'))
const DetailProduct = lazy(() => import('./pages/detail-product/DetailProduct'))
const Shop = lazy(() => import('./pages/shop/Shop'))
const Contact = lazy(() => import('./pages/contact/Contact'))
const Wishlist = lazy(() => import('./pages/wishlist/Wishlist'))
const Cart = lazy(() => import('./pages/cart/Cart'))
const Categories = lazy(() => import('./components/categories/Categories'))
const Blog = lazy(() => import('./pages/blog/Blog'))
const Checkout = lazy(() => import('./pages/checkout/Checkout'))









const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/category/:id" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default memo(App);