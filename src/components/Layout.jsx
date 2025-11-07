
import { Outlet } from 'react-router-dom';
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

/**
 * A layout component that wraps page content with Navbar and Footer.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The page content to be rendered.
 */
function Layout({ children }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const baseClasses = isDarkMode
    ? 'flex flex-col min-h-screen bg-black text-white'
    : 'flex flex-col min-h-screen bg-white text-gray-900';
  return (
    <div className={baseClasses}>
      <Navbar isDark={isDarkMode} onToggleTheme={toggleTheme} />
      
      {/* Main content area */}
      <main className="flex-grow container mx-auto p-4 md:p-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
