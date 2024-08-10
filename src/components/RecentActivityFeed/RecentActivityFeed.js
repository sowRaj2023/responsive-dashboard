import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const RecentActivityFeed = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(response => {
                setActivities(response.data.slice(0, 5));
            });
    }, []);

    return (
        <div className="widget">
            <h3>Recent Activity Feed</h3>
            <ul>
                {activities.map(activity => (
                    <li key={activity.id}>{activity.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecentActivityFeed;
