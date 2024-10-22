import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Login from "./pages/LoginPage/LoginPage";
import Inventory from "./pages/Inventory/Inventory";
import Home from "./pages/Home/Home";
import Buyer from "./pages/Buyer/Buyer";
import Order from "./pages/Order/Order";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/buyer" element={<Buyer />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
