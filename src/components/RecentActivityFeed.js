// src/components/RecentActivityFeed.js
import React from 'react';
import './RecentActivityFeed.css';
import mockData from '../api/mockData';

function RecentActivityFeed() {
  const activities = mockData.recentActivity;

  return (
    <div className="recent-activity">
      <h2>Recent Activity</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivityFeed;


