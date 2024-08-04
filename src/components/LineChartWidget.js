// src/components/LineChartWidget.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './LineChartWidget.css';
import mockData from '../api/mockData';

const LineChartWidget = () => {
  return (
    <div className="line-chart-widget">
      <h2>User Activity</h2>
      <LineChart
        width={window.innerWidth < 768 ? window.innerWidth - 20 : 600}
        height={300}
        data={mockData.lineChart}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default LineChartWidget;



