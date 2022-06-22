import React from "react";
import "./App.css";
import Home from "../src/Pages/Home";
import LOGIN from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Details from "./Pages/Details";
import Laptops from "./Pages/Laptops"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LOGIN />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/laptops" element={<Laptops />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
