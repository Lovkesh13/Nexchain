import React from 'react';
import { FaShippingFast, FaWarehouse, FaChartLine } from 'react-icons/fa';

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <FaShippingFast size={50} />
            <h3>Efficient Logistics</h3>
            <p>Manage and track shipments with ease and precision.</p>
          </div>
          <div className="feature-card">
            <FaWarehouse size={50} />
            <h3>Inventory Management</h3>
            <p>Maintain optimal stock levels and reduce overhead costs.</p>
          </div>
          <div className="feature-card">
            <FaChartLine size={50} />
            <h3>Analytics</h3>
            <p>Gain insights and make data-driven decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;