import React from 'react';
import './KPICard.css';

/**
 * Reusable KPI card component for statistics.
 * @param {string} title - Title of the metric
 * @param {string|number} value - Numerical or text value
 * @param {React.ReactNode} icon - The React-Icon node
 * @param {string} borderClass - Tailwind dynamic border class name (e.g. border-blue-500)
 * @param {string} textClass - Tailwind dynamic text class name (e.g. text-blue-500)
 */
function KPICard({ title, value, icon, borderClass = 'border-blue-500', textClass = 'text-blue-500' }) {
  return (
    <div className={`kpi-card-container ${borderClass}`}>
      <div className="kpi-card-header">
        <div className="kpi-card-title">{title}</div>
        {icon && <span className={`kpi-card-icon ${textClass}`}>{icon}</span>}
      </div>
      <div className={`kpi-card-value ${textClass}`}>{value}</div>
    </div>
  );
}

export default KPICard;
