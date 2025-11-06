import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link to="/Tasks" className="hover:text-white">
            Tasks
          </Link>
          <Link to="/Posts" className="hover:text-white">
            Posts
          </Link>
          
        </div>
        <p>&copy; {currentYear} Task Manager. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;