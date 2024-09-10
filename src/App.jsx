import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/LoginPage/LoginPage';
import Inventory from './pages/Inventory/Inventory';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => <div><h2>Home</h2></div>;
// const Inventory = () => <div><h2>Inventory</h2></div>;
const Orders = () => <div><h2>Orders</h2></div>;
const Suppliers = () => <div><h2>Suppliers</h2></div>;
const Shipments = () => <div><h2>Shipments</h2></div>;
const Reports = () => <div><h2>Reports</h2></div>;
const Settings = () => <div><h2>Settings</h2></div>;

export default App;