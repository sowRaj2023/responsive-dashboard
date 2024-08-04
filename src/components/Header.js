// src/components/Header.js
import React from 'react';
import './Header.css';

function Header({ darkMode, toggleTheme }) {
  return (
    <header className={`header ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="header-left">
        <h1>Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="profile">Profile</div>
        <div className="notifications">Notifications</div>
        <div className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
      </div>
    </header>
  );
}

export default Header;



