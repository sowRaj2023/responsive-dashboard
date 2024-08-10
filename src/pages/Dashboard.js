import React, { Suspense } from 'react';
import './index.css';

const LineChartWidget = React.lazy(() => import('../components/LineChartWidget/LineChartWidget'));
const BarChartWidget = React.lazy(() => import('../components/BarChartWidget/BarChartWidget'));
const PieChartWidget = React.lazy(() => import('../components/PieChartWidget/PieChartWidget'));
const RecentActivityFeed = React.lazy(() => import('../components/RecentActivityFeed/RecentActivityFeed'));

const Dashboard = () => {
    return (
        <main className="dashboard">
            <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
                <LineChartWidget />
                <BarChartWidget />
                <PieChartWidget />
                <RecentActivityFeed />
            </Suspense>
        </main>
    );
};

export default Dashboard;

