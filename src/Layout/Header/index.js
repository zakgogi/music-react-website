import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

const Header = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/music" activeClassName="current">Music</NavLink>
            <NavLink to="/activity" activeClassName="current">Activities</NavLink>
            <NavLink to="/chat" activeClassName="current">Chat</NavLink>
            <NavLink to="/socket" activeClassName="current">Socket</NavLink>
        </nav>
    )
};

export default Header;