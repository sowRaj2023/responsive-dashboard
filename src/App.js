// src/App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import LoadingSpinner from './components/LoadingSpinner';
import './styles/App.css';

class App extends Component {
  state = {
    darkMode: false,
  };

  toggleTheme = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    const { darkMode } = this.state;

    return (
      <Router>
        <Header darkMode={darkMode} toggleTheme={this.toggleTheme} />
        <Sidebar />
        <main className={`main-content ${darkMode ? 'dark-mode' : ''}`}>
          <React.Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/overview" element={<Dashboard />} />
              <Route path="/analytics" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;



