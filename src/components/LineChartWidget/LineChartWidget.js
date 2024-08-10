import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import './index.css';

const LineChartWidget = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // Map data to the structure needed for the chart
                const chartData = response.data.map(item => ({
                    name: `Post ${item.id}`,
                    value: item.id
                }));
                setData(chartData);
            });
    }, []);

    return (
        <div className="widget">
            <h3>Line Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChartWidget;
