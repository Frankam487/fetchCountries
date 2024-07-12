import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <li>
                    <NavLink to='/' className={(nav) => nav.isActive ? "nav" : ""}>Acceuil</NavLink>
                </li>
                <li>
                    <NavLink to='/about' className={(e) => e.isActive ? "nav" : ""}>A propos</NavLink>
                </li>
                <li>
                    <NavLink to='/blog' className={(e) => e.isActive ? "nav" : ''}>Blog</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;