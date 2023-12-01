import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Transaction from "./components/Transaction";
import Data from "./components/Data";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/data" element={<Data />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
