import React from "react";
import "./App.css";
import Home from "../src/Pages/Home";
import LOGIN from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Details from "./Pages/Details";
import Laptops from "./Pages/Laptops";
import UserProfile from "./Pages/UserProfile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserOrders from "./Components/UserProfilePage/UserOrders";
import UserWishlist from "./Components/UserProfilePage/UserWishlist";
import UserNotifications from "./Components/UserProfilePage/UserNotifications";
import UserSettings from "./Components/UserProfilePage/UserSettings";
import Cart from "./Pages/Cart";
import Loader from "./GlobalUtil/Loader";
import Error from "./Pages/Error";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LOGIN />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Error />} />
          <Route path="/details" element={<Details />} />
          <Route path="/profile" element={<UserProfile />}>
            <Route path="myorders" element={<UserOrders />} />
            <Route path="wishlist" element={<UserWishlist />} />
            <Route path="notifications" element={<UserNotifications />} />
            <Route path="settings" element={<UserSettings />} />
          </Route>
          <Route path="/mycart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
