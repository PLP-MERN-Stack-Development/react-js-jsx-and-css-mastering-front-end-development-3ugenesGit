import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Rocket } from 'lucide-react'; // Using lucide-react for a simple icon

function Navbar() {
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
            <NavLink to="/about" className={getNavLinkClass}>
              About
            </NavLink>
          </li>
          {/* Add more links here */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;