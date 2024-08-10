import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dashboard';
import Settings from './components/Settings/Settings';
import './App.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <Router>
                <div className="app-container">
                    <Header />
                    <Sidebar />
                    <button className="theme-toggle" onClick={toggleDarkMode}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                    <div className="main-content">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </div>
    );
};

export default App;






 