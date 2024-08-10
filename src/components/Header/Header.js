import React from 'react';
import './index.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
            <input type="search" placeholder='Search here' />
            <div className='profile-container'>
                <img src="https://img.freepik.com/free-photo/young-beautiful-girl-posing-black-leather-jacket-park_1153-8104.jpg" alt="Profile" className='profile' />
                <div>
                    <h1 className='heading'>Super Admin</h1>
                    <p className='paragraph'>Admin@test.com</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
