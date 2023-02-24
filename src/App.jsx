import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { updateUserAction } from "./actions/user";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { auth } from "./firebase";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import LoadingPage from "./pages/LoadingPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductsListPage";
import SignupPage from "./pages/SignupPage"
import UserPage from "./pages/UserPage";
import AuthRoute from "./routes/AuthRout";
import UserRoute from "./routes/UserRoute";

const App = () => {

  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        dispatch(updateUserAction(user))
      }else{
        console.log('sign up.')
      }
      setLoading(false)
    })
  },[])

  if(loading){
    return <LoadingPage />
  }

  return (
    <div className="text-primary-bg-default">
      <Header />
      <Routes>
        <Route index element={<ProductListPage />} />
        <Route path="/products/:id" element={<UserRoute><ProductDetailPage /></UserRoute>} />
        <Route path="/cart" element={<UserRoute><CartPage /></UserRoute>} />
        <Route path="/user" element={<UserRoute><UserPage /></UserRoute>} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/signup" element={<AuthRoute><SignupPage /></AuthRoute>} />
        <Route path="/login" element={<AuthRoute><LoginPage /></AuthRoute>} />
      </Routes>
      <Footer />
    </div>
  )
}
export default App;