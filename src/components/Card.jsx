import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Card({ children, title, className = '' }) {
  const { isDarkMode } = useTheme();

  const cardClasses = isDarkMode
    ? 'bg-neutral-900 text-white'
    : 'bg-white text-gray-900';

  const titleClasses = isDarkMode
    ? 'bg-neutral-950 text-white border-neutral-800'
    : 'bg-gray-50 text-gray-900 border-gray-200';

  return (
    <div
      className={`shadow-lg rounded-xl overflow-hidden ${cardClasses} ${className}`}
    >
      {title && (
        <div className={`px-6 py-4 border-b ${titleClasses}`}>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}

export default Card;