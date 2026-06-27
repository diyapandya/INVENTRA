import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { FaClipboardCheck, FaCogs, FaCalendarAlt, FaHistory } from 'react-icons/fa';
import './InventoryManagement.css';

/**
 * InventoryManagement Page
 * Displays stock tracking, low stock warnings, and replenishment configurations.
 */
function InventoryManagement() {
  const [stocks, setStocks] = useState([
    { sku: 101, name: 'Wireless Mouse', qty: 15, threshold: 10, status: 'Normal' },
    { sku: 102, name: 'Keyboard', qty: 8, threshold: 10, status: 'Low Stock' },
    { sku: 103, name: 'Water Bottle', qty: 50, threshold: 15, status: 'Normal' }
  ]);

  const [replenishLog, setReplenishLog] = useState([]);

  const triggerReplenishment = (strategy) => {
    const updated = stocks.map(item => {
      if (strategy === 'threshold' && item.qty < item.threshold) {
        return { ...item, qty: item.qty + 15, status: 'Normal' };
      } else if (strategy === 'weekly') {
        return { ...item, qty: item.qty + 20, status: 'Normal' };
      }
      return item;
    });

    setStocks(updated);
    setReplenishLog([
      `Executed ${strategy.toUpperCase()} strategy at ${new Date().toLocaleTimeString()}`,
      ...replenishLog
    ]);
  };

  return (
    <div className="inventory-app-container">
      <Navbar />
      <div className="inventory-layout">
        <Sidebar />
        <main className="inventory-content">
          <header className="inventory-header">
            <h1 className="inventory-title">
              <FaClipboardCheck className="mr-2 text-emerald-500 text-2xl" /> Inventory Stock & Replenishment
            </h1>
          </header>

          <div className="inventory-grid">
            {/* Stock status table */}
            <div className="inventory-card">
              <h3 className="card-section-title">Warehouse Stock Levels</h3>
              <table className="inventory-table">
                <thead>
                  <tr className="table-header-row">
                    <th>SKU</th>
                    <th>Product Name</th>
                    <th>Stock Qty</th>
                    <th>Reorder Threshold</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {stocks.map((item, idx) => (
                    <tr key={idx} className="table-data-row">
                      <td>{item.sku}</td>
                      <td>{item.name}</td>
                      <td><strong>{item.qty}</strong></td>
                      <td>{item.threshold}</td>
                      <td>
                        <span className={`status-badge ${item.status === 'Low Stock' ? 'status-low' : 'status-normal'}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Replenish Actions panel */}
            <div className="inventory-actions-panel">
              <h3 className="card-section-title">Replenishment Controls</h3>
              <p className="help-text">Execute simulated algorithms to restock dark store shelves.</p>
              
              <div className="btn-group">
                <button className="replenish-btn btn-threshold" onClick={() => triggerReplenishment('threshold')}>
                  <FaCogs className="mr-2" /> Run Threshold Strategy
                </button>
                <button className="replenish-btn btn-weekly" onClick={() => triggerReplenishment('weekly')}>
                  <FaCalendarAlt className="mr-2" /> Run Weekly Restock
                </button>
              </div>

              <div className="log-box">
                <h4 className="log-box-title">
                  <FaHistory className="mr-1 text-slate-400" /> Execution Logs
                </h4>
                {replenishLog.length === 0 ? (
                  <p className="no-logs">No replenishment actions triggered yet.</p>
                ) : (
                  <ul className="log-list">
                    {replenishLog.map((log, i) => (
                      <li key={i} className="log-item">{log}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default InventoryManagement;
