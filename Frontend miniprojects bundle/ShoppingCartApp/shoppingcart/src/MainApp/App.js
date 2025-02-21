import React from "react";
import "./AppStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Components/HomePage/HomePage.jsx";
import Cart from "../Components/Cart/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
