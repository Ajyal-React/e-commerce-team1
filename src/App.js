import React from "react";
import "./App.css";
import Home from "../src/Pages/Home";
import SignUp from "./Pages/SignUp";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
