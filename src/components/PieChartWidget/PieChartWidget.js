import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import './index.css';

const PieChartWidget = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                const chartData = response.data.slice(0, 5).map(comment => ({
                    name: `Comment ${comment.id}`,
                    value: comment.id
                }));
                setData(chartData);
            });
    }, []);

    return (
        <div className="widget">
            <h3>Pie Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={data} dataKey="value" nameKey="name" fill="#8884d8" label />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PieChartWidget;
