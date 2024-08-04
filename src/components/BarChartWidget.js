// src/components/BarChartWidget.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './BarChartWidget.css';
import mockData from '../api/mockData';

const BarChartWidget = () => {
  return (
    <div className="bar-chart-widget">
      <h2>Sales Data</h2>
      <BarChart
        width={window.innerWidth < 768 ? window.innerWidth - 20 : 600}
        height={300}
        data={mockData.barChart}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarChartWidget;



