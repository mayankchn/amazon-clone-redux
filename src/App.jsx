import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductsListPage";

const App = () => {
  return (
    <div className="text-primary-bg-default">
      <Header />
      <Routes>
        <Route index element={<ProductListPage />}/>
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </div>
  )
}
export default App;