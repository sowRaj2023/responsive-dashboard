import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import './index.css';

const BarChartWidget = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const chartData = response.data.map(user => ({
                    name: user.username,
                    value: user.id
                }));
                setData(chartData);
            });
    }, []);

    return (
        <div className="bar-chart-widget">
            <h3>Bar Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartWidget;

