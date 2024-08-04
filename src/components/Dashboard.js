// src/components/Dashboard.js
import React, { Component } from 'react';
import BarChartWidget from './BarChartWidget';
import LineChartWidget from './LineChartWidget';
import PieChartWidget from './PieChartWidget';
import RecentActivityFeed from './RecentActivityFeed';
import LoadingSpinner from './LoadingSpinner';
import mockData from '../api/mockData';
import './Dashboard.css';

class Dashboard extends Component {
  state = {
    lineChartData: [],
    barChartData: [],
    pieChartData: [],
    recentActivityData: [],
    loading: false,
    error: null
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ loading: true });
    try {
      // Simulate API call
      setTimeout(() => {
        this.setState({
          lineChartData: mockData.lineChart,
          barChartData: mockData.barChart,
          pieChartData: mockData.pieChart,
          recentActivityData: mockData.recentActivity,
          loading: false
        });
      }, 1000); // Simulate network delay
    } catch (error) {
      this.setState({
        error: 'Error fetching data',
        loading: false
      });
    }
  };

  render() {
    const { loading, error, lineChartData, barChartData, pieChartData, recentActivityData } = this.state;

    if (loading) {
      return <LoadingSpinner />;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="chart-container">
          <BarChartWidget data={barChartData} />
        </div>
        <div className="chart-container">
          <LineChartWidget data={lineChartData} />
        </div>
        <div className="chart-container">
          <PieChartWidget data={pieChartData} />
        </div>
        <div className="chart-container">
          <RecentActivityFeed activities={recentActivityData} />
        </div>
      </div>
    );
  }
}

export default Dashboard;




