import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import CheckoutAd from "./components/CheckoutAd";
import ShoppingBasket from "./components/ShoppingBasket";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import React from "react";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Fragment>
              <Banner />
              <ProductList />
            </React.Fragment>
          }
        />
        <Route
          exact
          path="/checkout"
          element={
            <React.Fragment>
              <CheckoutAd />
              <ShoppingBasket />
            </React.Fragment>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
