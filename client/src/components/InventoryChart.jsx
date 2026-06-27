import React from 'react';
import { FaChartBar } from 'react-icons/fa';
import './InventoryChart.css';

/**
 * Basic SVG mockup chart to display inventory level trends without external library dependencies.
 */
function InventoryChart({ title }) {
  const data = [
    { label: 'Jan', value: 400 },
    { label: 'Feb', value: 600 },
    { label: 'Mar', value: 800 },
    { label: 'Apr', value: 500 },
    { label: 'May', value: 900 },
    { label: 'Jun', value: 1200 },
  ];

  const maxVal = 1500;
  const chartHeight = 150;
  const chartWidth = 400;

  return (
    <div className="chart-container">
      <div className="chart-header">
        <FaChartBar className="chart-title-icon" />
        <h3 className="chart-title">{title}</h3>
      </div>
      <div className="chart-area">
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="chart-svg">
          {/* Draw Gridlines */}
          <line x1="40" y1="10" x2={chartWidth} y2="10" stroke="#e2e8f0" strokeDasharray="4" />
          <line x1="40" y1="70" x2={chartWidth} y2="70" stroke="#e2e8f0" strokeDasharray="4" />
          <line x1="40" y1="130" x2={chartWidth} y2="130" stroke="#e2e8f0" strokeDasharray="4" />

          {/* Render simple bars */}
          {data.map((item, idx) => {
            const barWidth = 35;
            const gap = 20;
            const x = 50 + idx * (barWidth + gap);
            const ratio = item.value / maxVal;
            const barHeight = chartHeight * ratio - 30;
            const y = chartHeight - barHeight - 20;

            return (
              <g key={idx}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={Math.max(barHeight, 5)}
                  className="chart-bar"
                  rx="4"
                />
                <text x={x + barWidth / 2} y={y - 5} textAnchor="middle" className="chart-label-value">
                  {item.value}
                </text>
                <text x={x + barWidth / 2} y={chartHeight - 5} textAnchor="middle" className="chart-label-axis">
                  {item.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default InventoryChart;
