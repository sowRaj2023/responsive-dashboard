import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-toggle" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
            <nav>
                <div className="sidebar-pro">
                <img src="https://img.freepik.com/free-photo/blue-letter-made-wood_1232-681.jpg" alt="imgage" className="profile"/>
                <h1>Bare Kaab</h1>
                </div>
                <ul>
                    
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;


