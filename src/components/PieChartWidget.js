// src/components/PieChartWidget.js
import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Sector } from 'recharts';
import './PieChartWidget.css';
import mockData from '../api/mockData';

function PieChartWidget() {
  const data = mockData.pieChart;

  return (
    <div className="widget-container">
      <h2>Pie Chart</h2>
      <PieChart width={400} height={400}>
        <Tooltip />
        <Legend />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#f2a74b"
          label
        >
          {data.map((entry, index) => (
            <Sector key={`cell-${index}`} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default PieChartWidget;


