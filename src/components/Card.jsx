import React from 'react';

/**
 * A reusable card component for boxed content.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The content inside the card.
 * @param {string} [props.title] - An optional title for the card.
 * @param {string} [props.className] - Additional Tailwind classes for the card container.
 */
function Card({ children, title, className = '' }) {
  return (
    <div
      className={`bg-white shadow-lg rounded-xl overflow-hidden ${className}`}
    >
      {title && (
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
}

export default Card;