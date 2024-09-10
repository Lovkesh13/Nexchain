import React, { useState } from 'react';
import './Inventory.css'; 

const InventoryPage = () => {
  // Sample inventory data
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Item A', code: '001', category: 'Tools', location: 'WH1', stock: 120, reorderLevel: 50 },
    { id: 2, name: 'Item B', code: '002', category: 'Electronics', location: 'WH2', stock: 30, reorderLevel: 100 },
    { id: 3, name: 'Item C', code: '003', category: 'Furniture', location: 'WH1', stock: 5, reorderLevel: 20 },
  ]);

  // Handling new item addition
  const [newItem, setNewItem] = useState({ name: '', code: '', category: '', location: '', stock: 0, reorderLevel: 0 });

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle opening/closing modal
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  // Add new item to inventory
  const handleAddItem = () => {
    setInventory([...inventory, { ...newItem, id: inventory.length + 1 }]);
    setNewItem({ name: '', code: '', category: '', location: '', stock: 0, reorderLevel: 0 });
    handleModalClose();
  };

  return (
    <div className="inventory-container">
      <h1 className="inventory-header">Inventory Management</h1>
      
      {/* Search, Filter and Add Item Section */}
      <div className="search-filter-container">
        <input type="text" className="search-input" placeholder="Search items..." />
        <div className="filter-group">
          <select className="filter-select">
            <option value="">Category</option>
            <option value="Tools">Tools</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
          </select>
          <select className="filter-select">
            <option value="">Stock Status</option>
            <option value="low">Low Stock</option>
            <option value="out">Out of Stock</option>
          </select>
        </div>
        <button className="add-item-button" onClick={handleModalOpen}>Add New Item</button>
      </div>

      {/* Inventory Table */}
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Code</th>
            <th>Category</th>
            <th>Location</th>
            <th>Current Stock</th>
            <th>Reorder Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.code}</td>
              <td>{item.category}</td>
              <td>{item.location}</td>
              <td>{item.stock}</td>
              <td>{item.reorderLevel}</td>
              <td className="action-buttons">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
                <button className="reorder-btn">Reorder</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Adding New Items */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Item</h2>
            <div className="add-item-container">
              <input
                type="text"
                placeholder="Item Name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Item Code"
                value={newItem.code}
                onChange={(e) => setNewItem({ ...newItem, code: e.target.value })}
              />
              <input
                type="text"
                placeholder="Category"
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              />
              <input
                type="text"
                placeholder="Location"
                value={newItem.location}
                onChange={(e) => setNewItem({ ...newItem, location: e.target.value })}
              />
              <input
                type="number"
                placeholder="Stock"
                value={newItem.stock}
                onChange={(e) => setNewItem({ ...newItem, stock: parseInt(e.target.value) })}
              />
              <input
                type="number"
                placeholder="Reorder Level"
                value={newItem.reorderLevel}
                onChange={(e) => setNewItem({ ...newItem, reorderLevel: parseInt(e.target.value) })}
              />
              <div className="modal-actions">
                <button className="modal-add-btn" onClick={handleAddItem}>Add Item</button>
                <button className="modal-close-btn" onClick={handleModalClose}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryPage;
