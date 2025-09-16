import React from 'react';

interface GladysCommentsPopupProps {
  onClose: () => void;
}

export default function GladysCommentsPopup({ onClose }: GladysCommentsPopupProps) {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl border border-gray-200 z-50 w-80"
      onClick={(e) => e.stopPropagation()} // Prevent click from closing immediately
    >
      <h3 className="text-lg font-bold mb-4 text-black">Comments from Gladys:</h3>
      <p className="text-gray-700 text-sm mb-2">"Super trajet aujourd'hui ! À très vite !"</p>
      <p className="text-gray-700 text-sm">"Merci pour la bonne humeur !"</p>
      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
}
