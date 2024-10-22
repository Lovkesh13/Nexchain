import React, { useState, useEffect } from "react";
import "./Buyer.css";

// Mock data for buyers (in a real app, this data would come from an API or database)
const initialBuyers = [
  { id: 1, name: "John Doe", email: "john@example.com", company: "ABC Corp" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", company: "XYZ Ltd" },
];

const BuyerManagement = () => {
  const [buyers, setBuyers] = useState(initialBuyers);
  const [newBuyer, setNewBuyer] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBuyer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddBuyer = () => {
    if (newBuyer.name && newBuyer.email && newBuyer.company) {
      const newBuyerId = buyers.length + 1;
      const buyerToAdd = { id: newBuyerId, ...newBuyer };
      setBuyers((prevBuyers) => [...prevBuyers, buyerToAdd]);
      setNewBuyer({ name: "", email: "", company: "" });
    } else {
      alert("Please fill all the fields");
    }
  };

  const handleDeleteBuyer = (buyerId) => {
    setBuyers((prevBuyers) =>
      prevBuyers.filter((buyer) => buyer.id !== buyerId)
    );
  };

  useEffect(() => {
    // Example effect to fetch data if coming from an API
    // fetchBuyers();
  }, []);

  return (
    <div className="buyer-management">
      <h1>Buyer Management</h1>

      {/* Display Existing Buyers */}
      <div>
        <h2>Existing Buyers</h2>
        <ul>
          {buyers.map((buyer) => (
            <li key={buyer.id}>
              <strong>Name:</strong> {buyer.name}, <strong>Email:</strong>{" "}
              {buyer.email}, <strong>Company:</strong> {buyer.company}
              <button onClick={() => handleDeleteBuyer(buyer.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Add New Buyer Form */}
      <div>
        <h2>Add New Buyer</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newBuyer.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newBuyer.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={newBuyer.company}
          onChange={handleInputChange}
        />
        <button onClick={handleAddBuyer}>Add Buyer</button>
      </div>
    </div>
  );
};

export default BuyerManagement;
