
// import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

/**
 * A layout component that wraps page content with Navbar and Footer.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The page content to be rendered.
 */
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main content area */}
      <main className="flex-grow container mx-auto p-4 md:p-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
