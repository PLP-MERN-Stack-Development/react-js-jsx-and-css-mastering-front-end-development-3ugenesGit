import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import PropTypes from 'prop-types';
import { Rocket } from 'lucide-react'; // Using lucide-react for a simple icon

function Navbar({onToggleTheme, isDark}) {
  // Helper function for NavLink active state
  const getNavLinkClass = ({ isActive }) => {
    return isActive
      ? 'text-blue-600 font-bold'
      : 'text-gray-700 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-2xl font-bold text-gray-900"
        >
          <Rocket className="text-blue-600" size={28} />
          <span>ReactApp</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          <li>
            <NavLink to="/" className={getNavLinkClass} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tasks" className={getNavLinkClass} >
              Tasks
            </NavLink>
          </li>
           <li>
            <NavLink to="/posts" className={getNavLinkClass}>
              Posts
            </NavLink>
          </li>
          
          <button
            onClick={onToggleTheme}
            className="px-3 py-1.5 text-sm rounded border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-black dark:text-blue-100 hover:bg-gray-100 dark:hover:bg-neutral-700"
            aria-label="Toggle dark mode"
          >
            {isDark ? "Light" : "Dark"} Mode
          </button>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onToggleTheme: PropTypes.func.isRequired,
  isDark: PropTypes.bool.isRequired,
};


export default Navbar;