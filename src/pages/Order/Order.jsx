import React, { useState } from "react";
import "./Order.css";

// Mock data for buyers and products
const buyers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Smartphone", price: 800 },
];

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    buyerId: "",
    productId: "",
    quantity: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddOrder = () => {
    const { buyerId, productId, quantity } = newOrder;
    if (buyerId && productId && quantity > 0) {
      const orderToAdd = {
        id: orders.length + 1,
        buyer: buyers.find((b) => b.id === parseInt(buyerId)).name,
        product: products.find((p) => p.id === parseInt(productId)).name,
        quantity: parseInt(quantity),
        totalPrice:
          products.find((p) => p.id === parseInt(productId)).price * quantity,
      };
      setOrders([...orders, orderToAdd]);
      setNewOrder({ buyerId: "", productId: "", quantity: 1 });
    } else {
      alert("Please fill all fields correctly");
    }
  };

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <div className="order-page">
      <h1>Order Management</h1>

      {/* Order List */}
      <div>
        <h2>Existing Orders</h2>
        {orders.length > 0 ? (
          <ul>
            {orders.map((order) => (
              <li key={order.id}>
                <strong>Buyer:</strong> {order.buyer}, <strong>Product:</strong>{" "}
                {order.product}, <strong>Quantity:</strong> {order.quantity},{" "}
                <strong>Total Price:</strong> ${order.totalPrice}
                <button onClick={() => handleDeleteOrder(order.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-orders">No orders yet.</p>
        )}
      </div>

      {/* Add New Order Form */}
      <div>
        <h2>Add New Order</h2>
        <select
          name="buyerId"
          value={newOrder.buyerId}
          onChange={handleInputChange}
        >
          <option value="">Select Buyer</option>
          {buyers.map((buyer) => (
            <option key={buyer.id} value={buyer.id}>
              {buyer.name}
            </option>
          ))}
        </select>

        <select
          name="productId"
          value={newOrder.productId}
          onChange={handleInputChange}
        >
          <option value="">Select Product</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name} (${product.price})
            </option>
          ))}
        </select>

        <input
          type="number"
          name="quantity"
          min="1"
          value={newOrder.quantity}
          onChange={handleInputChange}
          placeholder="Quantity"
        />
        <button onClick={handleAddOrder}>Add Order</button>
      </div>
    </div>
  );
};

export default OrderPage;
